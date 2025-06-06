import { View, Text } from 'react-native';
import { GradientButton, Icon } from '../../components';
import { useGradient, useStyles } from '../../hooks';
import { AUTH_SCREEN_TEXTS } from '../../config';
import type { AuthButtonsProps } from '../../types';


export const AuthButtons: React.FC<AuthButtonsProps> = ({
    disabled,
    onPinAuth,
    onTouchIdAuth,
    pinEnabled,
    touchIdEnabled,
}) => {
    const { themeGradient } = useGradient();
    const styles = useStyles(({ colors, fonts }) => ({
        container: {
            marginBottom: 40,
        },
        buttonSpacing: {
            marginBottom: 15,
        },
        buttonText: {
            color: colors.coolGray[50],
            fontFamily: fonts.quicksand.bold,
            fontSize: 16,
        },
        buttonContent: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: 15,
        },
        icon: {
            color: colors.coolGray[50],
            fontSize: 25,
        },
        disabledButton: {
            opacity: 0.4,
            backgroundColor: colors.coolGray[300],
            borderColor: colors.coolGray[400],
        },
    }));

    return (
        <View style={styles.container}>
            {touchIdEnabled && (
                <GradientButton
                    onPress={onTouchIdAuth}
                    style={styles.buttonSpacing}
                    gradientColors={themeGradient}
                    disabled={disabled}
                    disabledStyle={styles.disabledButton}
                >
                    <View style={styles.buttonContent}>
                        <Icon
                            name="finger-print"
                            size={styles.icon.fontSize}
                            color={styles.icon.color}
                        />
                        <Text style={styles.buttonText}>{AUTH_SCREEN_TEXTS.touchId}</Text>
                    </View>
                </GradientButton>
            )}
            {pinEnabled && (
                <GradientButton
                    onPress={onPinAuth}
                    gradientColors={themeGradient}
                    disabled={disabled}
                    disabledStyle={styles.disabledButton}
                >
                    <View style={styles.buttonContent}>
                        <Icon
                            name="keypad"
                            size={styles.icon.fontSize}
                            color={styles.icon.color}
                        />
                        <Text style={styles.buttonText}>{AUTH_SCREEN_TEXTS.pin}</Text>
                    </View>
                </GradientButton>
            )}
        </View>
    );
};
