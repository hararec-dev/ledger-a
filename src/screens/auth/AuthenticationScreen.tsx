import { useCallback, useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, TextInput, StyleSheet } from 'react-native';
import { useAuthAttempts, useTouchIdAuth, useCurrentStatusAppStore, usePinAuth, useBiometricStore } from '../../hooks';
import { AUTHENTICATION_SCREEN } from '../../config';
import type { AuthenticationProps } from '../../types';


export const AuthenticationScreen = ({ navigation }: AuthenticationProps) => {
    const { lockout, handleFailedAttempt } = useAuthAttempts();
    const { pinEnabled } = useCurrentStatusAppStore();
    const { allowBiometricAuth } = useBiometricStore();
    const { authenticate, loadingTouchIdAuth } = useTouchIdAuth(handleFailedAttempt);
    const { checkPinExists, validatePin, loadingPinAuth } = usePinAuth(handleFailedAttempt);
    const [pin, setPin] = useState('');
    const [pinError, setPinError] = useState('');

    const handleTouchIdAuth = useCallback(async () => {
        const success = await authenticate();
        if (success) { navigation.replace('MainNavigation'); }
    }, [authenticate, navigation]);

    useEffect(() => {
        const initBiometricAuth = async () => {
            if (allowBiometricAuth) { await handleTouchIdAuth(); }
        };
        initBiometricAuth();
    }, [allowBiometricAuth, handleTouchIdAuth]);

    useEffect(() => {
        const initPinAuth = async () => {
            if (pinEnabled) {
                const exists = await checkPinExists();
                if (!exists) { setPinError(AUTHENTICATION_SCREEN.errors.pinNotSet); }
            }
        };
        initPinAuth();
    }, [pinEnabled, checkPinExists]);

    const handlePinAuth = useCallback(async () => {
        if (!pin) {
            setPinError(AUTHENTICATION_SCREEN.errors.enterPin);
            return;
        }
        const isValid = await validatePin(pin);
        isValid
            ? navigation.replace('MainNavigation')
            : setPinError(AUTHENTICATION_SCREEN.errors.incorrectPin);
    }, [pin, validatePin, navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                {allowBiometricAuth ? AUTHENTICATION_SCREEN.title.biometric : AUTHENTICATION_SCREEN.title.pin}
            </Text>

            {(loadingTouchIdAuth || loadingPinAuth) ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    {allowBiometricAuth && (
                        <Button
                            title={AUTHENTICATION_SCREEN.buttons.fingerprint}
                            onPress={handleTouchIdAuth}
                            disabled={lockout}
                        />
                    )}

                    {pinEnabled && (
                        <View style={styles.pinContainer}>
                            <TextInput
                                placeholder={AUTHENTICATION_SCREEN.input.pinPlaceholder}
                                secureTextEntry
                                keyboardType="number-pad"
                                value={pin}
                                onChangeText={setPin}
                                style={[styles.input, pinError && styles.inputError]}
                                maxLength={4}
                            />

                            {pinError && (
                                <Text style={styles.errorText}>
                                    {pinError}
                                </Text>
                            )}

                            <Button
                                title={AUTHENTICATION_SCREEN.buttons.validatePin}
                                onPress={handlePinAuth}
                                disabled={lockout || pin.length !== 4}
                            />
                        </View>
                    )}
                </>
            )}

            {lockout && (
                <Text style={styles.lockoutText}>
                    {AUTHENTICATION_SCREEN.errors.tooManyAttempts}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titleText: {
        marginBottom: 20,
        fontSize: 18,
    },
    pinContainer: {
        width: '80%',
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    lockoutText: {
        marginTop: 20,
        color: 'red',
    },
});
