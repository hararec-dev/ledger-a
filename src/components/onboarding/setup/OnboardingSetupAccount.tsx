import { useMemo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { OnboardingSetupAccountForm, OnboardingSetupHeader } from '../../../components';
import { useCurrentStatusAppStore, useGradient, useLocalDatabase } from '../../../hooks';
import { currencies, ONBOARDING_SETUP_TEXT, validationOnboardingSetup as validationSchema } from '../../../config';
import type { OnboardingSetupNavProps } from '../../../types';


export const OnboardingSetupAccount: React.FC<OnboardingSetupNavProps> = ({ navigation }) => {
    const { setUserCurrency, userCurrency, setHasOnboarded } = useCurrentStatusAppStore();
    const { createRecord } = useLocalDatabase();
    const { themeGradient } = useGradient();
    const formik = useFormik({
        initialValues: {
            currency: userCurrency || 'MXN',
            accountName: '',
            initialAmount: '',
        },
        validationSchema,
        onSubmit: async ({ currency, accountName, initialAmount }) => {
            await setHasOnboarded(true);
            await setUserCurrency(currency);
            await createRecord({
                table: 'personal_accounts', 
                data: {
                    name: accountName,
                    type: 'cash',
                    currencyCode: currency,
                    currentBalance: Number(initialAmount),
                    initialBalance: Number(initialAmount),
                    emoji: '💵',
                    color: '#000',
                    isActive: true,
                },
            });
            navigation.navigate('Authentication');
        },
    });

    const selectedCurrency = useMemo(() => currencies.find(
        currency => currency.code === formik.values.currency
    ), [formik.values.currency]);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <OnboardingSetupHeader
                gradientColors={themeGradient}
                title={ONBOARDING_SETUP_TEXT.setup.title}
                subtitle={ONBOARDING_SETUP_TEXT.setup.subtitle}
                isAccount
            />
            <OnboardingSetupAccountForm
                formik={formik}
                selectedCurrency={selectedCurrency}
                gradientColors={themeGradient}
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
    },
});
