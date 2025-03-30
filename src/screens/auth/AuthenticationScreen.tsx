import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useAuthAttempts, useTouchIdAuth, useCurrentStatusAppStore } from '../../hooks';
import { useCallback, useEffect } from 'react';
import type { AuthenticationProps } from '../../types';


export const AuthenticationScreen = ({ navigation }: AuthenticationProps) => {
    const { lockout, handleFailedAttempt } = useAuthAttempts();
    const { biometricEnabled } = useCurrentStatusAppStore();
    const { authenticate, loadingAuth } = useTouchIdAuth(handleFailedAttempt);

    useEffect(() => {
        if (biometricEnabled) {handleAuthentication();}
    }, []);

    const handleAuthentication = useCallback(async () => {
        const success = await authenticate();
        if (success) {
            navigation.replace('MainNavigation');
        }
    }, [authenticate, navigation]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ marginBottom: 20, fontSize: 18 }}>Autenticación con Touch ID (Offline)</Text>
            {loadingAuth ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <Button title="Iniciar Autenticación" onPress={handleAuthentication} disabled={lockout} />
            )}
            {lockout && (
                <Text style={{ marginTop: 10, color: 'red' }}>
                    Demasiados intentos fallidos. Espera 30 segundos para volver a intentarlo.
                </Text>
            )}
        </View>
    );
};
