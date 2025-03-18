import { useEffect } from 'react';
import { View } from 'react-native';
import { useBiometricStore } from '../../hooks';
import type { BiometricAuthProviderProps } from '../../types';


export const BiometricAuthProvider = ({ children }: BiometricAuthProviderProps) => {
    const {
        checkBiometricAvailability,
        biometricKeysExist,
        createKeys,
        sensorStatus,
        isLoadingBiometricAuth,
        loadBiometricAuth
    } = useBiometricStore();

    useEffect(() => {
        const initializeBiometrics = async () => {
            await checkBiometricAvailability();
            const keysExist = await biometricKeysExist();
            if (!keysExist) {
                await createKeys();
            }
            await loadBiometricAuth();
        };

        initializeBiometrics();
    }, [checkBiometricAvailability, biometricKeysExist, createKeys]);

    return !sensorStatus && !isLoadingBiometricAuth
        ? null
        : (
            <View style={{ flex: 1 }}>
                {children}
            </View>
        );
};