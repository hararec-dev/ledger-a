import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useBiometricStore } from '../../hooks';
import type { BiometricAuthProviderProps } from '../../types';

export const BiometricAuthProvider = ({ children }: BiometricAuthProviderProps) => {
    const {
        checkBiometricAvailability,
        biometricKeysExist,
        createKeys,
        sensorStatus,
        isLoadingBiometricAuth,
        loadBiometricAuth,
    } = useBiometricStore();

    useEffect(() => {
        const initializeBiometrics = async () => {
            await loadBiometricAuth();
            const isValid = await checkBiometricAvailability();
            if (!isValid) { return; }
            const keysExist = await biometricKeysExist();
            if (!keysExist) { await createKeys(); }
        };

        initializeBiometrics();
    }, [loadBiometricAuth, checkBiometricAvailability, biometricKeysExist, createKeys]);

    return isLoadingBiometricAuth || !sensorStatus
        ? null
        : (
            <View style={styles.container}>
                {children}
            </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
