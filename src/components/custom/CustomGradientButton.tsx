import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { CustomGradientBackground } from "./CustomGradientBackground";
import type { CustomGradientButtonProps } from "../../types";


export const CustomGradientButton = ({
    onPress,
    children,
    gradientColors,
    style,
    disabled = false,
    disabledStyle
}: CustomGradientButtonProps) => (
    <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[style, disabled && disabledStyle]}
    >
        <CustomGradientBackground
            gradient={gradientColors}
            style={styles.button}
        >
            {children}
        </CustomGradientBackground>
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