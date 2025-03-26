import { StyleSheet, Text, View } from 'react-native';
import { GradientInput, FormSetupGroup, GradientButton, IonIcon, GradientSwitch } from '../../../components';
import { useGradient, useThemeStore } from '../../../hooks';
import { ONBOARDING_SETUP_TEXT } from '../../../config';
import type { OnboardingAppFormProps, OnboardingFormProps } from '../../../types';


const ThemeSwitch: React.FC<OnboardingFormProps> = ({ formik }) => {
    const { isDark, colors, setTheme } = useThemeStore();
    const { gradientDark, gradientLight } = useGradient();

    const styles = StyleSheet.create({
        switchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingTop: 5,
        },
        switchAndText: {
            flexDirection: 'row',
            alignItems: 'center',
            width: 50,
        },
        switchText: {
            marginLeft: 10,
            fontSize: 16,
            color: isDark ? colors.coolGray[50] : colors.coolGray[900],
            fontFamily: 'Quicksand-Regular',
        },
    });

    return (
        <FormSetupGroup
            label={ONBOARDING_SETUP_TEXT.themeLabel || 'Tema'}
            error={formik.errors.theme}
            touched={formik.touched.theme}
        >
            <View style={styles.switchContainer}>
                <IonIcon name={'moon'} size={30} color={isDark
                    ? colors.coolGray[50]
                    : colors.coolGray[900]
                } />
                <View style={styles.switchAndText}>
                    <GradientSwitch
                        value={formik.values.theme === 'dark'}
                        onValueChange={(value) => {
                            formik.setFieldValue('theme', value ? 'dark' : 'light');
                            setTheme(value ? 'dark' : 'light');
                        }}
                        gradientLight={isDark ? gradientDark : gradientLight}
                    />
                    <Text style={styles.switchText}>
                        {formik.values.theme === 'dark' ? 'dark' : 'light'}
                    </Text>
                </View>
            </View>
        </FormSetupGroup>
    );
};

const BiometricSwitch: React.FC<OnboardingFormProps> = ({ formik }) => {
    const { isDark, colors } = useThemeStore();
    const { gradientDark, gradientLight } = useGradient();

    const styles = StyleSheet.create({
        switchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingTop: 5,
        },
        switchAndText: {
            flexDirection: 'row',
            alignItems: 'center',
            width: 50,
        },
        switchText: {
            marginLeft: 10,
            fontSize: 16,
            color: isDark ? colors.coolGray[50] : colors.coolGray[900],
            fontFamily: 'Quicksand-Regular',
        },
    });

    return (
        <FormSetupGroup
            label={ONBOARDING_SETUP_TEXT.biometricAuthLabel || 'Autenticación biométrica'}
            error={formik.errors.biometricAuth}
            touched={formik.touched.biometricAuth}
        >
            <View style={styles.switchContainer}>
                <IonIcon name={'finger-print'} size={30} color={isDark
                    ? colors.coolGray[50]
                    : colors.coolGray[900]
                } />
                <View style={styles.switchAndText}>
                    <GradientSwitch
                        value={formik.values.biometricAuth}
                        onValueChange={(value) => formik.setFieldValue('biometricAuth', value)}
                        gradientLight={isDark ? gradientDark : gradientLight}
                    />
                    <Text style={styles.switchText}>
                        {formik.values.biometricAuth ? 'Si' : 'No'}
                    </Text>
                </View>
            </View>
        </FormSetupGroup>
    );
};

const PinInput: React.FC<{
    label: string;
    value: string;
    fieldName: string;
    placeholder: string;
    formik: any;
    gradientLight: string[];
}> = ({ label, value, fieldName, placeholder, formik }) => {
    const { isDark } = useThemeStore();
    const { gradientDark, gradientLight } = useGradient();
    return (
        <FormSetupGroup
            label={label}
            error={formik.errors[fieldName]}
            touched={formik.touched[fieldName]}
        >
            <GradientInput
                value={value}
                onChangeText={formik.handleChange(fieldName)}
                onBlur={() => formik.handleBlur(fieldName)}
                placeholder={placeholder}
                gradientLight={isDark ? gradientDark : gradientLight}
                keyboardType="numeric"
                maxLength={4}
            />
        </FormSetupGroup>
    );
};

const PinSetup: React.FC<OnboardingFormProps> = ({ formik }) => {
    const { isDark } = useThemeStore();
    const { gradientDark, gradientLight } = useGradient();
    return (
        <>
            <PinInput
                label={ONBOARDING_SETUP_TEXT.pinLabel || 'Crear PIN'}
                value={formik.values.pin}
                fieldName="pin"
                placeholder={ONBOARDING_SETUP_TEXT.pinPlaceholder || 'Ingresa un PIN de 4 dígitos'}
                formik={formik}
                gradientLight={isDark ? gradientDark : gradientLight}
            />
            <PinInput
                label={ONBOARDING_SETUP_TEXT.confirmPinLabel || 'Confirmar PIN'}
                value={formik.values.confirmPin}
                fieldName="confirmPin"
                placeholder={ONBOARDING_SETUP_TEXT.confirmPinPlaceholder || 'Confirma tu PIN'}
                formik={formik}
                gradientLight={isDark ? gradientDark : gradientLight}
            />
        </>
    );
};

export const OnboardingSetupAppForm: React.FC<OnboardingAppFormProps> = ({
    formik,
    gradientOnboarding,
}) => {
    const { isDark, colors } = useThemeStore();
    const { gradientDark, gradientLight } = useGradient();

    const styles = StyleSheet.create({
        formContainer: {
            rowGap: 30,
            width: '100%',
        },
        buttonText: {
            color: colors.coolGray[50],
            fontSize: 18,
            fontWeight: '700',
            fontFamily: 'Quicksand-Regular',
        },
        button: {
            marginTop: 10,
        },
        disabledButton: {
            opacity: 0.4,
            backgroundColor: colors.coolGray[300],
            borderColor: colors.coolGray[400],
            borderRadius: 10,
        },
        switchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingTop: 5,
        },
        switchAndText: {
            flexDirection: 'row',
            alignItems: 'center',
            width: 50,
        },
        switchText: {
            marginLeft: 10,
            fontSize: 16,
            color: isDark ? colors.coolGray[50] : colors.coolGray[900],
            fontFamily: 'Quicksand-Regular',
        },
    });

    return (
        <View style={styles.formContainer}>
            <BiometricSwitch
                formik={formik}
                gradientLight={isDark ? gradientDark : gradientLight}
            />
            <FormSetupGroup
                label={ONBOARDING_SETUP_TEXT.createPinLabel || 'Crear PIN de seguridad'}
                error={formik.errors.createPin}
                touched={formik.touched.createPin}
            >
                <View style={styles.switchContainer}>
                    <IonIcon name={'keypad'} size={30} color={isDark
                        ? colors.coolGray[50]
                        : colors.coolGray[900]
                    } />
                    <View style={styles.switchAndText}>
                        <GradientSwitch
                            value={formik.values.createPin}
                            onValueChange={(value: boolean) => formik.setFieldValue('createPin', value)}
                            gradientLight={isDark ? gradientDark : gradientLight}
                        />
                        <Text style={styles.switchText}>
                            {formik.values.createPin ? 'Si' : 'No'}
                        </Text>
                    </View>
                </View>
            </FormSetupGroup>

            {formik.values.createPin && <PinSetup formik={formik} gradientLight={gradientLight} />}

            <ThemeSwitch formik={formik} gradientLight={gradientLight} />
            <GradientButton
                onPress={formik.handleSubmit}
                gradientColors={isDark ? gradientDark : gradientLight}
                style={styles.button}
                disabled={formik.values.createPin && !formik.isValid}
                disabledStyle={styles.disabledButton}
            >
                <Text style={styles.buttonText}>{ONBOARDING_SETUP_TEXT.app.submitButton}</Text>
            </GradientButton>
        </View>
    );
};
