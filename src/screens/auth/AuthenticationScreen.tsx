import { View, Text, Button, ActivityIndicator } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useAuthentication } from '../../hooks';
import type { RootStackParamList } from '../../types';

type AuthenticationScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Authentication'
>;

type Props = {
    navigation: AuthenticationScreenNavigationProp;
};

export const AuthenticationScreen = ({ navigation }: Props) => {
    const { authenticate, loading, lockout } = useAuthentication();

    const handleAuthentication = async () => {
        const success = await authenticate();
        if (success) {
            navigation.replace('MainNavigation');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ marginBottom: 20, fontSize: 18 }}>Autenticación con Touch ID (Offline)</Text>
            {loading ? (
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
