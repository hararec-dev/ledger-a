import { useMemo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { OnboardingSetupHeader } from './OnboardingSetupHeader';
import { OnboardingSetupAccountForm } from './OnboardingSetupAccountForm';
import { useCurrentStatusAppStore, useGradient, useThemeStore } from '../../../hooks';
import { currencies, ONBOARDING_SETUP_TEXT, validationOnboardingSetup as validationSchema } from '../../../config';
import type { OnboardingSetupAccountProps } from '../../../types';


export const OnboardingSetupAccount: React.FC<OnboardingSetupAccountProps> = ({ navigation }) => {
    const { setTheme, currentTheme, isDark } = useThemeStore();
    const { setUserCurrency, userCurrency, setHasOnboarded } = useCurrentStatusAppStore();
    const { gradientDark, gradientLight, gradientOnboarding } = useGradient();
    const formik = useFormik({
        initialValues: {
            currency: userCurrency || 'MXN',
            accountName: '',
            initialAmount: '',
        },
        validationSchema,
        onSubmit: async ({ currency }) => {
            await setHasOnboarded(true);
            await setUserCurrency(currency);
            navigation.navigate('Authentication');
        },
    });

    const selectedCurrency = useMemo(() => currencies.find(
        currency => currency.code === formik.values.currency
    ), [formik.values.currency]);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <OnboardingSetupHeader
                gradientDark={isDark ? gradientDark : gradientLight}
                title={ONBOARDING_SETUP_TEXT.setup.title}
                subtitle={ONBOARDING_SETUP_TEXT.setup.subtitle}
                isAccount
            />
            <OnboardingSetupAccountForm
                formik={formik}
                selectedCurrency={selectedCurrency}
                gradientLight={gradientLight}
                gradientOnboarding={gradientOnboarding}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 30,
    }
});
