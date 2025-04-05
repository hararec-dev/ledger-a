import { useCallback, useState } from 'react';
import * as Keychain from 'react-native-keychain';
import { useCurrentStatusAppStore } from '../store';

const PIN_STORAGE_KEY = 'USER_PIN_KEY';
const PIN_USERNAME = 'PIN_AUTH_USER';

export const usePinAuth = (handleFailedAttempt?: () => void) => {
    const [loadingPinAuth, setLoadingPinAuth] = useState(false);
    const [isPinSet, setIsPinSet] = useState<boolean | null>(null);
    const [pin, setPin] = useState<string>('');
    const [pinError, setPinError] = useState<string>('');
    const { pinEnabled, setPinEnabled } = useCurrentStatusAppStore();

    const checkPinExists = useCallback(async (): Promise<boolean> => {
        try {
            const credentials = await Keychain.getGenericPassword({ service: PIN_STORAGE_KEY });
            const exists = !!credentials;
            setIsPinSet(exists);
            return exists;
        } catch (error) {
            setIsPinSet(false);
            return false;
        }
    }, []);

    const createPin = useCallback(async (keyPin: string): Promise<boolean> => {
        setLoadingPinAuth(true);
        try {
            if (!/^\d{4,6}$/.test(keyPin)) { return false; }
            await Keychain.setGenericPassword(PIN_USERNAME, keyPin, {
                service: PIN_STORAGE_KEY,
                accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
            });
            setIsPinSet(true);
            return true;
        } catch (error) {
            return false;
        } finally {
            setLoadingPinAuth(false);
        }
    }, []);

    const validatePin = useCallback(async (keyPin: string): Promise<boolean> => {
        setLoadingPinAuth(true);
        try {
            const credentials = await Keychain.getGenericPassword({ service: PIN_STORAGE_KEY });

            if (!credentials) { return false; }
            const isValid = credentials.password === keyPin;

            if (!isValid && handleFailedAttempt) { handleFailedAttempt(); }
            return isValid;
        } catch (error) {
            if (handleFailedAttempt) { handleFailedAttempt(); }
            return false;
        } finally {
            setLoadingPinAuth(false);
        }
    }, [handleFailedAttempt]);

    const changePin = useCallback(async (currentPin: string, newPin: string): Promise<boolean> => {
        setLoadingPinAuth(true);
        try {
            const isValid = await validatePin(currentPin);
            if (!isValid) { return false; }
            return await createPin(newPin);
        } catch (error) {
            return false;
        } finally {
            setLoadingPinAuth(false);
        }
    }, [validatePin, createPin]);

    const resetPin = useCallback(async (): Promise<boolean> => {
        setLoadingPinAuth(true);
        try {
            await Keychain.resetGenericPassword({ service: PIN_STORAGE_KEY });
            setIsPinSet(false);
            return true;
        } catch (error) {
            return false;
        } finally {
            setLoadingPinAuth(false);
        }
    }, []);

    return {
        changePin,
        checkPinExists,
        createPin,
        isPinSet,
        loadingPinAuth,
        pin,
        pinEnabled,
        pinError,
        resetPin,
        setPin,
        setPinEnabled,
        setPinError,
        validatePin,
    };
};
