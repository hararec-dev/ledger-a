import { ScrollView, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { OnboardingSetupAppForm } from './OnboardingSetupAppForm';
import { OnboardingSetupHeader } from './OnboardingSetupHeader';
import { useCurrentStatusAppStore, useGradient, useThemeStore } from '../../../hooks';
import { ONBOARDING_SETUP_TEXT, validationOnboardingApp as validationSchema } from '../../../config';
import type { OnboardingSetupAppProps } from '../../../types';


export const OnboardingSetupApp: React.FC<OnboardingSetupAppProps> = ({ navigation }) => {
    const { setTheme, currentTheme, isDark } = useThemeStore();
    const { gradientDark, gradientLight, gradientOnboarding } = useGradient();
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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <OnboardingSetupHeader
                gradientDark={isDark ? gradientDark : gradientLight}
                title={ONBOARDING_SETUP_TEXT.app.title}
                subtitle={ONBOARDING_SETUP_TEXT.app.subtitle}
                isAccount={false}
            />
            <OnboardingSetupAppForm
                formik={formik}
                gradientLight={gradientLight}
                gradientOnboarding={gradientOnboarding}
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
