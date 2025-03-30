import { TouchableOpacity } from 'react-native';
import { GradientBackground } from '../../components';
import { useGradient, useStyles } from '../../hooks';
import type { GradientButtonProps } from '../../types';


export const GradientButton = ({
    onPress,
    children,
    style,
    gradientColors,
    disabled = false,
    disabledStyle,
}: GradientButtonProps) => {
    const { themeGradient } = useGradient();
    const styles = useStyles(({ Platform }) => ({
        button: {
            ...(Platform.OS === 'ios' && { height: 50 }),
            borderRadius: 10,
            padding: Platform.OS === 'ios' ? 0 : 15,
            alignItems: 'center',
            justifyContent: 'center',
        },
    }));

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[style, disabled && disabledStyle]}
        >
            <GradientBackground
                gradient={gradientColors ? gradientColors : themeGradient}
                style={styles.button}
            >
                {children}
            </GradientBackground>
        </TouchableOpacity>
    );
};
