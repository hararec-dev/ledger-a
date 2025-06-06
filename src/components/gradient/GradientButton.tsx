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
    gradientStyle,
}: GradientButtonProps) => {
    const { themeGradient } = useGradient();
    const styles = useStyles(({ Platform }) => ({
        gradient: {
            ...(Platform.OS === 'ios' && { height: 50 }),
            borderRadius: 10,
            padding: Platform.OS === 'ios' ? 0 : 15,
            alignItems: 'center',
            justifyContent: 'center',
            ...(gradientStyle ? gradientStyle : {}),
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
                style={styles.gradient}
            >
                {children}
            </GradientBackground>
        </TouchableOpacity>
    );
};
