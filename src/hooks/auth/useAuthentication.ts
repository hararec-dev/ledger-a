import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { useBiometrics } from './useBiometrics';
import { AUTH_CONFIG, AUTH_TEXTS } from '../../config';
import type { AuthenticationState } from '../../types';


export const useAuthentication = () => {
    const {
        createSignature,
        checkBiometricAvailability,
        sensorStatus,
        biometricKeysExist,
        createKeys,
    } = useBiometrics();

    const [state, setState] = useState<AuthenticationState>({
        attempts: 0,
        loading: false,
        lockout: false
    });

    useEffect(() => {
        const initializeBiometrics = async () => {
            try {
                await checkBiometricAvailability();
                const keysExist = await biometricKeysExist();
                if (!keysExist) {
                    await createKeys();
                }
            } catch (error) { }
        };

        initializeBiometrics();
    }, [checkBiometricAvailability, biometricKeysExist, createKeys]);

    useEffect(() => {
        if (state.attempts >= AUTH_CONFIG.MAX_ATTEMPTS) {
            setState(prev => ({ ...prev, lockout: true }));
            const timer = setTimeout(() => {
                setState(prev => ({ ...prev, attempts: 0, lockout: false }));
            }, AUTH_CONFIG.LOCKOUT_DURATION);
            return () => clearTimeout(timer);
        }
    }, [state.attempts]);

    const generateRandomPayload = useCallback((): string => {
        const array = new Uint8Array(AUTH_CONFIG.PAYLOAD_LENGTH);
        if (global.crypto?.getRandomValues) {
            global.crypto.getRandomValues(array);
        } else {
            for (let i = 0; i < array.length; i++) {
                array[i] = Math.floor(Math.random() * 256);
            }
        }
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }, []);

    const storeSessionToken = async (): Promise<void> => {
        try {
            const token = generateRandomPayload();
            await Keychain.setGenericPassword(AUTH_TEXTS.USER_SESSION_KEY, token);
        } catch (error) {
            throw error;
        }
    };

    const handleFailedAttempt = useCallback(() => {
        const newAttempts = state.attempts + 1;
        setState(prev => ({ ...prev, attempts: newAttempts }));
        const message = newAttempts >= AUTH_CONFIG.MAX_ATTEMPTS
            ? AUTH_TEXTS.MAX_ATTEMPTS_MESSAGE
            : AUTH_TEXTS.FAILED_ATTEMPT_MESSAGE(newAttempts, AUTH_CONFIG.MAX_ATTEMPTS);
        Alert.alert(AUTH_TEXTS.ERROR_TITLE, message);
    }, [state.attempts]);

    const authenticate = async (): Promise<boolean> => {
        if (!sensorStatus?.available) {
            Alert.alert(AUTH_TEXTS.ERROR_TITLE, AUTH_TEXTS.BIOMETRIC_UNAVAILABLE);
            return false;
        }
        setState(prev => ({ ...prev, loading: true }));
        try {
            const randomPayload = generateRandomPayload();
            const { success } = await createSignature({
                payload: randomPayload,
                promptMessage: AUTH_TEXTS.FINGERPRINT_PROMPT,
                cancelButtonText: AUTH_TEXTS.CANCEL_BUTTON,
            });
            if (success) {
                await storeSessionToken();
                return true;
            }
            handleFailedAttempt();
            return false;
        } catch (error) {
            handleFailedAttempt();
            return false;
        } finally {
            setState(prev => ({ ...prev, loading: false }));
        }
    };

    return {
        authenticate,
        loading: state.loading,
        lockout: state.lockout
    };
};