import { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, TextInput } from 'react-native';
import { useCurrentStatusAppStore, useThemeStore } from '../../hooks';
import type { OnboardingAuthSetupProps } from '../../types';


export const OnboardingAuthSetupScreen = ({ navigation }: OnboardingAuthSetupProps) => {
    const { colors } = useThemeStore();
    const [pin, setPin] = useState('');
    const [confirmPin, setConfirmPin] = useState('');
    const [error, setError] = useState('');
    const { setHasOnboarded } = useCurrentStatusAppStore();

    const handleSetPin = async () => {
        if (pin.length < 4) {
            setError('El PIN debe tener al menos 4 dígitos.');
            Alert.alert('El PIN debe tener al menos 4 dígitos.');
            return;
        }
        if (pin !== confirmPin) {
            setError('Los PINs no coinciden.');
            Alert.alert('Los PINs no coinciden.');
            return;
        }

        try {
            await setHasOnboarded(true);
            Alert.alert('Éxito', 'Tu PIN ha sido configurado correctamente.');
            navigation.replace('Authentication');
        } catch (error) {
            Alert.alert('Error', error as string);
        }
    };

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.emerald[200],
        }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Configura tu PIN</Text>

            <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 10,
                    width: 200,
                    height: 50,
                    fontSize: 20,
                    textAlign: 'center',
                    marginBottom: 10,
                }}
                value={pin}
                onChangeText={setPin}
                secureTextEntry
                keyboardType="numeric"
                maxLength={6}
                placeholder="Ingresa tu PIN"
            />

            <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 10,
                    width: 200,
                    height: 50,
                    fontSize: 20,
                    textAlign: 'center',
                    marginBottom: 10,
                }}
                value={confirmPin}
                onChangeText={setConfirmPin}
                secureTextEntry
                keyboardType="numeric"
                maxLength={6}
                placeholder="Confirma tu PIN"
            />

            {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}

            <TouchableOpacity
                onPress={handleSetPin}
                style={{
                    backgroundColor: '#007bff',
                    padding: 10,
                    borderRadius: 10,
                    width: 200,
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: 'white', fontSize: 16 }}>Guardar PIN</Text>
            </TouchableOpacity>
        </View>
    );
};
