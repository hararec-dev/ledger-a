import { useEffect } from 'react';
import { View } from 'react-native';
import { useBiometricStore } from '../../hooks';
import type { BiometricAuthProviderProps } from '../../types';


export const BiometricAuthProvider = ({ children }: BiometricAuthProviderProps) => {
    const {
        checkBiometricAvailability,
        biometricKeysExist,
        createKeys,
        sensorStatus
    } = useBiometricStore();

    useEffect(() => {
        const initializeBiometrics = async () => {
            await checkBiometricAvailability();
            const keysExist = await biometricKeysExist();
            if (!keysExist) {
                await createKeys();
            }
        };

        initializeBiometrics();
    }, [checkBiometricAvailability, biometricKeysExist, createKeys]);

    return !sensorStatus
        ? null
        : (
            <View style={{ flex: 1 }}>
                {children}
            </View>
        );
};