import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useGradient, useStyles } from '../../hooks';
import type { GradientBorderProps } from '../../types';

export const GradientBorder: React.FC<GradientBorderProps> = ({ children, gradientColors, style }) => {
    const themeStyles = useStyles(({ colors, isDark }) => ({
        innerContainer: {
            borderRadius: 6,
            backgroundColor: isDark ? colors.gray[50] : colors.gray[900],
            overflow: 'hidden',
        },
    }));
    const { themeGradient } = useGradient();

    return (
        <View style={styles.gradientContainer}>
            <LinearGradient
                colors={gradientColors ? gradientColors : themeGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={StyleSheet.absoluteFill}
            />
            <View style={[themeStyles.innerContainer, style]}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gradientContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        padding: 2,
    },
});
