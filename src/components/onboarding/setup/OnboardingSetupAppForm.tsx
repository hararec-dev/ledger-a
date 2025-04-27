import { useEffect } from 'react';
import { Text, View } from 'react-native';
import {
    FormSetupGroup,
    GradientButton,
    GradientSwitch,
    Icon,
    OnboardingBiometricSwitch,
    OnboardingPinSetup,
    OnboardingThemeSwitch,
} from '../../../components';
import { useBiometricStore, useStyles } from '../../../hooks';
import { ONBOARDING_SETUP_TEXT } from '../../../config';
import type { OnboardingFormProps } from '../../../types';


export const OnboardingSetupAppForm: React.FC<OnboardingFormProps> = ({ formik, gradientColors }) => {
    const { sensorStatus } = useBiometricStore();
    const styles = useStyles(({ colors, isDark }) => ({
        formContainer: {
            rowGap: 10,
            width: '100%',
        },
        buttonText: {
            color: colors.coolGray[50],
            fontSize: 18,
            fontWeight: '700',
            fontFamily: 'Quicksand-Regular',
        },
        button: {
            marginTop: 30,
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
        Icon: {
            color: isDark ? colors.coolGray[50] : colors.coolGray[900],
            fontSize: 30,
        },
    }));

    useEffect(() => {
        if (sensorStatus?.available === false) {
            formik.setFieldValue('isPinEnabled', true);
            formik.setFieldTouched('isPinEnabled', true, false);
        }
    }, [sensorStatus?.available]);

    return (
        <View style={styles.formContainer}>
            <OnboardingBiometricSwitch
                formik={formik}
                gradientColors={gradientColors}
            />
            <FormSetupGroup
                label={ONBOARDING_SETUP_TEXT.createPinLabel || 'Crear PIN de seguridad'}
                error={formik.errors.isPinEnabled}
                touched={formik.touched.isPinEnabled}
            >
                <View style={styles.switchContainer}>
                    <Icon
                        name={'keypad'}
                        size={styles.Icon.fontSize}
                        color={styles.Icon.color}
                    />
                    <View style={styles.switchAndText}>
                        <GradientSwitch
                            value={!(sensorStatus?.available) ? true : formik.values.isPinEnabled}
                            onValueChange={(value: boolean) => {
                                formik.setFieldValue('isPinEnabled', value);
                                formik.setFieldTouched('isPinEnabled', true, false);
                            }}
                            disabled={!(sensorStatus?.available)}
                        />
                        <Text style={styles.switchText}>
                            {(!(sensorStatus?.available) ? true : formik.values.isPinEnabled) ? 'Si' : 'No'}
                        </Text>
                    </View>
                </View>
            </FormSetupGroup>

            {
                (!(sensorStatus?.available) ? true : formik.values.isPinEnabled)
                && <OnboardingPinSetup formik={formik} gradientColors={gradientColors} />
            }

            <OnboardingThemeSwitch formik={formik} gradientColors={gradientColors} />
            <GradientButton
                onPress={formik.handleSubmit}
                gradientColors={gradientColors}
                style={styles.button}
                disabled={
                    (formik.values.isPinEnabled && !formik.isValid) ||
                    Object.keys(formik.errors).length > 0
                }
                disabledStyle={styles.disabledButton}
            >
                <Text style={styles.buttonText}>{ONBOARDING_SETUP_TEXT.app.submitButton}</Text>
            </GradientButton>
        </View>
    );
};
