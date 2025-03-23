import { useMemo } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useFormik } from 'formik';
import { OnboardingSetupForm, OnboardingSetupHeader } from '../../components';
import { useCurrentStatusAppStore, useGradient } from '../../hooks';
import { colorPalette, currencies, validationOnboardingSetupSchema as validationSchema } from '../../config';
import type { OnboardingSetupProps } from '../../types';

export const OnboardingSetupScreen: React.FC<OnboardingSetupProps> = ({ navigation }) => {
  const { setUserCurrency, userCurrency } = useCurrentStatusAppStore();
  const { gradientDark, gradientLight, gradientOnboarding } = useGradient();
  const formik = useFormik({
    initialValues: {
      currency: userCurrency || 'MXN',
      accountName: 'Efectivo',
      initialAmount: '0',
    },
    validationSchema,
    onSubmit: ({ currency }) => {
      setUserCurrency(currency);
      navigation.navigate('OnboardingAuthSetup');
    },
  });

  const selectedCurrency = useMemo(() => currencies.find(
    currency => currency.code === formik.values.currency
  ), [formik.values.currency]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <OnboardingSetupHeader gradientDark={gradientDark} />
        <OnboardingSetupForm
          formik={formik}
          selectedCurrency={selectedCurrency}
          gradientLight={gradientLight}
          gradientOnboarding={gradientOnboarding}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorPalette.coolGray[900],
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 30,
  }
});
