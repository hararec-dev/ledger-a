import { ScrollView, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { OnboardingSetupAppForm, OnboardingSetupHeader } from '../../../components';
import { useCurrentStatusAppStore, useGradient, useThemeStore } from '../../../hooks';
import { ONBOARDING_SETUP_TEXT, validationOnboardingApp as validationSchema } from '../../../config';
import type { OnboardingSetupNavProps } from '../../../types';


export const OnboardingSetupApp: React.FC<OnboardingSetupNavProps> = ({ navigation }) => {
    const { setTheme, currentTheme } = useThemeStore();
    const { themeGradient } = useGradient();
    const { setBiometricEnabled } = useCurrentStatusAppStore();
    const formik = useFormik({
        initialValues: {
            theme: currentTheme || 'dark',
            biometricAuth: true,
            createPin: false,
            pin: '',
            confirmPin: '',
        },
        validationSchema,
        onSubmit: async ({ theme, biometricAuth, createPin, pin, confirmPin }) => {
            await setTheme(theme);
            await setBiometricEnabled(biometricAuth);
            navigation.navigate('OnboardingSetup', { typeSetup: 'account' });
        },
    });

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
        >
            <OnboardingSetupHeader
                gradientColors={themeGradient}
                title={ONBOARDING_SETUP_TEXT.app.title}
                subtitle={ONBOARDING_SETUP_TEXT.app.subtitle}
                isAccount={false}
            />
            <OnboardingSetupAppForm
                formik={formik}
                gradientColors={themeGradient}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 40,
    },
});
