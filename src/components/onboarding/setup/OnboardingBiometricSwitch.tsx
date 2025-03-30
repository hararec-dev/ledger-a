import { Text, View } from 'react-native';
import { FormSetupGroup, GradientSwitch, IonIcon } from '../../../components';
import { useStyles } from '../../../hooks';
import { ONBOARDING_SETUP_TEXT } from '../../../config';
import type { OnboardingFormProps } from '../../../types';


export const OnboardingBiometricSwitch: React.FC<OnboardingFormProps> = ({ formik, gradientColors }) => {
    const styles = useStyles(({ colors, isDark }) => ({
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
        ionIcon: {
            color: isDark ? colors.coolGray[50] : colors.coolGray[900],
            size: 30,

        },
    }));

    return (
        <FormSetupGroup
            label={ONBOARDING_SETUP_TEXT.biometricAuthLabel || 'Autenticación biométrica'}
            error={formik.errors.biometricAuth}
            touched={formik.touched.biometricAuth}
        >
            <View style={styles.switchContainer}>
                <IonIcon
                    name={'finger-print'}
                    size={styles.ionIcon.size}
                    color={styles.ionIcon.color}
                />
                <View style={styles.switchAndText}>
                    <GradientSwitch
                        value={formik.values.biometricAuth}
                        onValueChange={(value) => formik.setFieldValue('biometricAuth', value)}
                        gradientColors={gradientColors}
                    />
                    <Text style={styles.switchText}>
                        {formik.values.biometricAuth ? 'Si' : 'No'}
                    </Text>
                </View>
            </View>
        </FormSetupGroup>
    );
};
