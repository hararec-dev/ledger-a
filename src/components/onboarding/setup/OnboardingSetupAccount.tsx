import { useMemo } from 'react';
import { ScrollView } from 'react-native';
import { useFormik } from 'formik';
import { OnboardingSetupAccountForm, OnboardingSetupHeader } from '../../../components';
import { useCurrentStatusAppStore, useGradient, useLocalDatabase, useStyles } from '../../../hooks';
import { accountsInfo, currencies, ONBOARDING_SETUP_TEXT, validationOnboardingSetup as validationSchema } from '../../../config';
import type { FormOnboardingSetupValues, OnboardingSetupNavProps } from '../../../types';


export const OnboardingSetupAccount: React.FC<OnboardingSetupNavProps> = ({ navigation }) => {
    const { setUserCurrency, userCurrency, setHasOnboarded } = useCurrentStatusAppStore();
    const { createRecord } = useLocalDatabase();
    const { themeGradient } = useGradient();
    const styles = useStyles(({ colors }) => ({
        scrollContainer: {
            flexGrow: 1,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: 30,
        },
        accountColor: {
            color: colors.indigo[500],
        },
    }));
    const formik = useFormik<FormOnboardingSetupValues>({
        initialValues: {
            currency: userCurrency || 'MXN',
            accountName: '',
            initialAmount: '',
            accountType: 'EFE',
        },
        validationSchema,
        onSubmit: async ({ currency, accountName, initialAmount, accountType }) => {
            await setHasOnboarded(true);
            await setUserCurrency(currency);
            await createRecord({
                table: 'personal_accounts',
                data: {
                    name: accountName,
                    type: accountType,
                    currencyCode: currency,
                    currentBalance: Number(initialAmount),
                    initialBalance: Number(initialAmount),
                    emoji: '💵',
                    color: styles.accountColor.color,
                    isActive: true,
                    positionOnScreen: 0,
                },
            });
            navigation.navigate('Authentication');
        },
    });

    const selectedCurrency = useMemo(() => currencies.find(
        currency => currency.code === formik.values.currency
    ), [formik.values.currency]);
    const selectedAccountType = useMemo(() => accountsInfo.find(
        accountType => accountType.code === formik.values.accountType
    ), [formik.values.accountType]);

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
                selectedAccountType={selectedAccountType}
                gradientColors={themeGradient}
            />
        </ScrollView>
    );
};
