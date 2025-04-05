import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useBiometricStore } from '../../hooks';
import type { BiometricAuthProviderProps } from '../../types';


export const BiometricAuthProvider = ({ children }: BiometricAuthProviderProps) => {
    const {
        biometricKeysExist,
        checkBiometricAvailability,
        createKeys,
        isLoadingBiometricAuth,
        loadBiometricAuth,
        sensorStatus,
        setAllowBiometricAuth,
    } = useBiometricStore();

    useEffect(() => {
        const initializeBiometrics = async () => {
            await loadBiometricAuth();
            const isValid = await checkBiometricAvailability();
            if (!isValid) {
                await setAllowBiometricAuth(false);
                return;
            }
            const keysExist = await biometricKeysExist();
            if (!keysExist) { await createKeys(); }
        };

        initializeBiometrics();
    }, [
        biometricKeysExist,
        checkBiometricAvailability,
        createKeys,
        loadBiometricAuth,
        setAllowBiometricAuth,
    ]);

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
