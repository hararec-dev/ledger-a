import { Text, View } from 'react-native';
import { FormSetupGroup, GradientSwitch, IonIcon } from '../../../components';
import { useStyles, useThemeStore } from '../../../hooks';
import { ONBOARDING_SETUP_TEXT } from '../../../config';
import type { OnboardingFormProps } from '../../../types';


export const OnboardingThemeSwitch: React.FC<OnboardingFormProps> = ({ formik, gradientColors }) => {
    const { setTheme, isDark: isDarkTheme } = useThemeStore();
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

        },
    }));

    return (
        <FormSetupGroup
            label={ONBOARDING_SETUP_TEXT.themeLabel || 'Tema'}
            error={formik.errors.theme}
            touched={formik.touched.theme}
        >
            <View style={styles.switchContainer}>
                <IonIcon
                    name={isDarkTheme ? 'moon' : 'sunny'}
                    size={30}
                    color={styles.ionIcon.color}
                />
                <View style={styles.switchAndText}>
                    <GradientSwitch
                        value={formik.values.theme === 'dark'}
                        onValueChange={(value) => {
                            formik.setFieldValue('theme', value ? 'dark' : 'light');
                            setTheme(value ? 'dark' : 'light');
                        }}
                        gradientColors={gradientColors}
                    />
                    <Text style={styles.switchText}>
                        {formik.values.theme === 'dark' ? 'dark' : 'light'}
                    </Text>
                </View>
            </View>
        </FormSetupGroup>
    );
};
