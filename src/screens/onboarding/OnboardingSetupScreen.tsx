import { useMemo } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { useFormik } from 'formik';
import { CurrencyPicker, CustomGradientBackground, CustomGradientBorder, CustomText, FormSetupGroup } from '../../components';
import { useCurrentStatusAppStore, useGradient } from '../../hooks';
import { colorPalette, currencies, ONBOARDING_SETUP_TEXT, validationOnboardingSetupSchema as validationSchema } from '../../config';
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
  ), []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <CustomText
            text={ONBOARDING_SETUP_TEXT.title}
            fontSize={30}
            fontWeight='bold'
            gradientColors={gradientDark}
            style={{ textAlign: 'center', lineHeight: 40 }}
          />
          <Text style={styles.subtitle}>{ONBOARDING_SETUP_TEXT.subtitle}</Text>
        </View>

        <View style={styles.formContainer}>
          <FormSetupGroup
            label={ONBOARDING_SETUP_TEXT.currencyLabel}
            error={formik.errors.currency}
            touched={formik.touched.currency}
          >
            <CurrencyPicker formik={formik} selectedCurrency={selectedCurrency} />
          </FormSetupGroup>

          <FormSetupGroup
            label={ONBOARDING_SETUP_TEXT.accountNameLabel}
            error={formik.errors.accountName}
            touched={formik.touched.accountName}
          >
            <CustomGradientBorder gradientColors={gradientLight}>
              <TextInput
                style={styles.input}
                value={formik.values.accountName}
                onChangeText={formik.handleChange('accountName')}
                onBlur={formik.handleBlur('accountName')}
                placeholder={ONBOARDING_SETUP_TEXT.accountNamePlaceholder}
              />
            </CustomGradientBorder>
          </FormSetupGroup>

          <FormSetupGroup
            label={ONBOARDING_SETUP_TEXT.initialAmountLabel}
            error={formik.errors.initialAmount}
            touched={formik.touched.initialAmount}
          >
            <CustomGradientBorder gradientColors={gradientLight}>
              <TextInput
                style={styles.input}
                value={formik.values.initialAmount}
                onChangeText={formik.handleChange('initialAmount')}
                onBlur={formik.handleBlur('initialAmount')}
                placeholder={ONBOARDING_SETUP_TEXT.initialAmountPlaceholder}
                keyboardType="numeric"
              />
            </CustomGradientBorder>
          </FormSetupGroup>

          <TouchableOpacity onPress={() => formik.handleSubmit()}>
            <CustomGradientBackground
              gradient={gradientOnboarding}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{ONBOARDING_SETUP_TEXT.submitButton}</Text>
            </CustomGradientBackground>
          </TouchableOpacity>
        </View>
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
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    width: '100%',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'Nunito-Regular',
    color: colorPalette.coolGray[50],
  },
  formContainer: {
    rowGap: 15,
    width: '90%',
  },
  input: {
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: colorPalette.gray[50],
  },
  button: {
    ...(Platform.OS === 'ios' && {
      height: 50,
    }),
    borderRadius: 15,
    padding: Platform.OS === 'ios' ? 0 : 15,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: colorPalette.coolGray[50],
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Quicksand-Regular',
  }
});
