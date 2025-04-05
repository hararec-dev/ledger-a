import { ScrollView, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { OnboardingSetupAppForm, OnboardingSetupHeader } from '../../../components';
import { useGradient, useThemeStore, usePinAuth, useBiometricStore } from '../../../hooks';
import { ONBOARDING_SETUP_TEXT, validationOnboardingApp as validationSchema } from '../../../config';
import type { OnboardingSetupNavProps } from '../../../types';


export const OnboardingSetupApp: React.FC<OnboardingSetupNavProps> = ({ navigation }) => {
    const { currentTheme } = useThemeStore();
    const { themeGradient } = useGradient();
    const { createPin, setPinEnabled } = usePinAuth();
    const { sensorStatus } = useBiometricStore();

    const formik = useFormik({
        initialValues: {
            theme: currentTheme || 'dark',
            isTouchIdEnabled: true,
            isPinEnabled: false,
            pin: '',
            confirmPin: '',
        },
        validationSchema,
        onSubmit: async ({ isPinEnabled, pin }) => {
            if (sensorStatus?.available === false || isPinEnabled) {
                await setPinEnabled(true);
                await createPin(pin);
            }
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
