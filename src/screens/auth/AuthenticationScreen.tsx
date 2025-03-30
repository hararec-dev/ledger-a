import { View, Text, Button, ActivityIndicator, TextInput } from 'react-native';
import { useAuthAttempts, useTouchIdAuth, useCurrentStatusAppStore, usePinAuth } from '../../hooks';
import { useCallback, useEffect, useState } from 'react';
import type { AuthenticationProps } from '../../types';


export const AuthenticationScreen = ({ navigation }: AuthenticationProps) => {
    const { lockout, handleFailedAttempt } = useAuthAttempts();
    const { touchIdEnabled, pinEnabled } = useCurrentStatusAppStore();
    const { authenticate, loadingAuth: bioLoading } = useTouchIdAuth(handleFailedAttempt);
    const { checkPinExists, validatePin, loadingAuth: pinLoading } = usePinAuth(handleFailedAttempt);
    const [pin, setPin] = useState('');
    const [pinError, setPinError] = useState('');

    useEffect(() => {
        const initAuth = async () => {
            if (touchIdEnabled) {
                await handleTouchIdAuth();
            }
            if (pinEnabled) {
                const exists = await checkPinExists();
                if (!exists) {
                    setPinError('PIN no configurado');
                }
            }
        };
        initAuth();
    }, [touchIdEnabled]);

    const handleTouchIdAuth = useCallback(async () => {
        const success = await authenticate();
        if (success) { navigation.replace('MainNavigation'); }
    }, [authenticate, navigation]);

    const handlePinAuth = useCallback(async () => {
        if (!pin) {
            setPinError('Por favor ingrese el PIN');
            return;
        }
        const isValid = await validatePin(pin);
        if (isValid) {
            navigation.replace('MainNavigation');
        } else {
            setPinError('PIN incorrecto');
        }
    }, [pin, validatePin, navigation]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ marginBottom: 20, fontSize: 18 }}>
                {touchIdEnabled ? 'Autenticación Biométrica' : 'Autenticación con PIN'}
            </Text>

            {(bioLoading || pinLoading) ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    {touchIdEnabled && (
                        <Button
                            title="Usar Huella Digital"
                            onPress={handleTouchIdAuth}
                            disabled={lockout}
                        />
                    )}

                    {pinEnabled && (
                        <View style={{ width: '80%', marginTop: 20 }}>
                            <TextInput
                                placeholder="Ingrese su PIN"
                                secureTextEntry
                                keyboardType="number-pad"
                                value={pin}
                                onChangeText={setPin}
                                style={{
                                    borderWidth: 1,
                                    borderColor: pinError ? 'red' : '#ccc',
                                    borderRadius: 5,
                                    padding: 10,
                                    marginBottom: 10,
                                }}
                                maxLength={4}
                            />

                            {pinError && (
                                <Text style={{ color: 'red', marginBottom: 10 }}>
                                    {pinError}
                                </Text>
                            )}

                            <Button
                                title="Validar PIN"
                                onPress={handlePinAuth}
                                disabled={lockout || pin.length !== 4}
                            />
                        </View>
                    )}
                </>
            )}

            {lockout && (
                <Text style={{ marginTop: 20, color: 'red' }}>
                    Demasiados intentos fallidos. Espere 30 segundos.
                </Text>
            )}
        </View>
    );
};
