import { useCallback, useState } from 'react';
import * as Keychain from 'react-native-keychain';
import { useBiometricStore } from '../store';
import { AUTH_CONFIG, AUTH_TEXTS } from '../../config';

export const useAuthentication = (handleFailedAttempt?: () => void) => {
    const { createSignature, allowBiometricAuth } = useBiometricStore();
    const [loadingAuth, setLoadingAuth] = useState(false);

    const generateRandomPayload = useCallback((): string => {
        const array = new Uint8Array(AUTH_CONFIG.PAYLOAD_LENGTH);
        // @ts-ignore - React Native global type declaration
        if (global.crypto?.getRandomValues) {
            global.crypto.getRandomValues(array);
            const timestamp = new Date().getTime();
            const performanceMark = global.performance?.now() || 0;
            for (let i = 0; i < array.length; i++) {
                // eslint-disable-next-line no-bitwise
                array[i] = array[i] ^
                    // eslint-disable-next-line no-bitwise
                    ((timestamp >> (i % 8)) & 0xFF) ^
                    // eslint-disable-next-line no-bitwise
                    ((performanceMark * 1000 >> (i % 8)) & 0xFF);
            }
        } else {
            const timeStamp = new Date().getTime();
            for (let i = 0; i < array.length; i++) {
                const random = Math.random();
                // eslint-disable-next-line no-bitwise
                const timeFragment = (timeStamp >> (i % 8)) & 0xFF;
                // eslint-disable-next-line no-bitwise
                const iterationNoise = (i * 13) & 0xFF;
                // eslint-disable-next-line no-bitwise
                array[i] = Math.floor(
                    // eslint-disable-next-line no-bitwise
                    (random * 256) ^ timeFragment ^ iterationNoise
                ) & 0xFF;
            }
        }
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }, []);

    const storeSessionToken = useCallback(async (): Promise<void> => {
        try {
            const token = generateRandomPayload();
            await Keychain.setGenericPassword(AUTH_TEXTS.USER_SESSION_KEY, token);
        } catch (error) {
            throw error;
        }
    }, [generateRandomPayload]);

    const authenticate = useCallback(async (): Promise<boolean> => {
        setLoadingAuth(true);
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
            if (handleFailedAttempt) {handleFailedAttempt();}
            return false;
        } catch (error) {
            if (handleFailedAttempt) {handleFailedAttempt();}
            return false;
        } finally {
            setLoadingAuth(false);
        }
    }, [
        generateRandomPayload,
        storeSessionToken,
        createSignature,
        handleFailedAttempt,
        setLoadingAuth,
    ]);

    return {
        authenticate,
        loadingAuth,
        allowBiometricAuth,
    };
};
