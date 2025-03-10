import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useCurrentStatusAppStore, useThemeStore } from '../../hooks';
import type { RootStackParamList } from '../../types';

type OnboardingSetupNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OnboardingSetup'
>;

type Props = {
  navigation: OnboardingSetupNavigationProp;
};

export const OnboardingSetupScreen = ({ navigation }: Props) => {
  const { colors } = useThemeStore();
  const { setUserCurrency } = useCurrentStatusAppStore();
  const [currency, setCurrency] = useState('MXN');
  const [initialBalance, setInitialBalance] = useState('');
  const [accountName, setAccountName] = useState('');

  const handleNext = () => {
    // Aquí se puede guardar la divisa y otros datos en el estado global o enviarlos a un backend
    setUserCurrency('MXN');
    // También podrías almacenar initialBalance y accountName en tu store si es necesario
    navigation.navigate('OnboardingAuthSetup');
  };

  return (
    <View style={{ padding: 20, backgroundColor: colors.sky[200] }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Configura tu cuenta inicial
      </Text>
      <TextInput
        placeholder="Divisa (ej: MXN)"
        value={currency}
        onChangeText={setCurrency}
        style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
      />
      <TextInput
        placeholder="Saldo inicial"
        value={initialBalance}
        onChangeText={setInitialBalance}
        keyboardType="numeric"
        style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
      />
      <TextInput
        placeholder="Nombre de la cuenta"
        value={accountName}
        onChangeText={setAccountName}
        style={{ marginBottom: 20, borderWidth: 1, padding: 5 }}
      />
      <Button title="Continuar" onPress={handleNext} />
    </View>
  );
};
