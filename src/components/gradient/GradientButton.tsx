import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { GradientBackground } from './GradientBackground';
import type { GradientButtonProps } from '../../types';


export const GradientButton = ({
    onPress,
    children,
    gradientColors,
    style,
    disabled = false,
    disabledStyle,
}: GradientButtonProps) => (
    <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[style, disabled && disabledStyle]}
    >
        <GradientBackground
            gradient={gradientColors}
            style={styles.button}
        >
            {children}
        </GradientBackground>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        ...(Platform.OS === 'ios' && { height: 50 }),
        borderRadius: 10,
        padding: Platform.OS === 'ios' ? 0 : 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
