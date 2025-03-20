import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colorPalette } from '../../config';
import type { CustomGradientBorderProps } from '../../types';

export const CustomGradientBorder: React.FC<CustomGradientBorderProps> = ({ children, gradientColors }) => {
    return (
        <View style={styles.gradientContainer}>
            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={StyleSheet.absoluteFill}
            />
            <View style={styles.innerContainer}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gradientContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        padding: 2,
    },
    innerContainer: {
        borderRadius: 6,
        backgroundColor: colorPalette.gray[50],
        overflow: 'hidden',
    },
});