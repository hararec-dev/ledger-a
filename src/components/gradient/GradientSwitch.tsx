import { Platform, StyleSheet, Switch, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useThemeStore } from '../../hooks';
import type { GradientSwitchProps } from '../../types';


export const GradientSwitch: React.FC<GradientSwitchProps> = ({ value, onValueChange, gradientLight }) => {
    const { colors, isDark } = useThemeStore();

    const styles = StyleSheet.create({
        gradientTrack: {
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            height: Platform.OS === 'ios' ? 30 : 25,
            width: 51,
        },
        gradientBackground: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (
        <View style={[styles.gradientTrack, { borderRadius: 15 }]}>
            <LinearGradient
                colors={gradientLight}
                style={styles.gradientBackground}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Switch
                    value={value}
                    onValueChange={onValueChange}
                    trackColor={{ false: 'transparent', true: 'transparent' }}
                    thumbColor={isDark ? colors.coolGray[50] : colors.purple[200]}
                    ios_backgroundColor="transparent"
                />
            </LinearGradient>
        </View>
    );
};
