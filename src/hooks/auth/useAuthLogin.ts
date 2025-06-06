import { useCallback, useEffect, useRef } from 'react';
import { useAuthAttempts, useTouchIdAuth, usePinAuth, useGradient } from '@hooks';
import { AUTHENTICATION_SCREEN } from '@config';
import type { AuthenticationProps } from '@types';

export const useAuthLogin = ({ navigation }: AuthenticationProps) => {
    const { themeGradient } = useGradient();
    const authState = useAuthAttempts();
    const touchIdAuth = useTouchIdAuth(authState.handleFailedAttempt);
    const pinAuth = usePinAuth(authState.handleFailedAttempt);
    const isMounted = useRef(true);
    const authInProgress = useRef(false);

    useEffect(() => {
        return () => { isMounted.current = false; };
    }, []);

    useEffect(() => {
        const initBiometricAuth = async () => {
            if (touchIdAuth.allowBiometricAuth && !authInProgress.current) {
                authInProgress.current = true;
                await handleTouchIdAuth();
                if (isMounted.current) {
                    authInProgress.current = false;
                }
            }
        };
        initBiometricAuth();
    }, [touchIdAuth.allowBiometricAuth]);

    useEffect(() => {
        const initPinAuth = async () => {
            if (pinAuth.pinEnabled) {
                const exists = await pinAuth.checkPinExists();
                if (!exists) {
                    pinAuth.setPinError(AUTHENTICATION_SCREEN.errors.pinNotSet);
                }
            }
        };
        initPinAuth();
    }, [pinAuth.pinEnabled, pinAuth.checkPinExists]);

    const handleTouchIdAuth = useCallback(async () => {
        const success = await touchIdAuth.authenticate();
        if (success) {
            navigation.replace('UtilityStackNavigation');
        }
    }, [touchIdAuth.authenticate, navigation]);

    const handlePinAuth = useCallback(async () => {
        if (!pinAuth.pin) {
            pinAuth.setPinError(AUTHENTICATION_SCREEN.errors.enterPin);
            return;
        }
        const isValid = await pinAuth.validatePin(pinAuth.pin);
        if (isValid) {
            navigation.replace('UtilityStackNavigation');
        } else {
            pinAuth.setPinError(AUTHENTICATION_SCREEN.errors.incorrectPin);
        }
    }, [pinAuth.pin, pinAuth.validatePin, navigation]);

    return {
        themeGradient,
        authState,
        touchIdAuth,
        pinAuth,
        handleTouchIdAuth,
        handlePinAuth,
    };
};
