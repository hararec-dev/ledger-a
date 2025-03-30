import { StyleSheet, Switch, View } from 'react-native';
import { GradientBackground } from '../../components';
import { useGradient, useStyles } from '../../hooks';
import type { GradientSwitchProps } from '../../types';


const SWITCH_DIMENSIONS = {
    ios: {
        height: 30,
        width: 51,
    },
    android: {
        height: 25,
        width: 51,
    },
};
const BORDER_RADIUS = 15;

export const GradientSwitch: React.FC<GradientSwitchProps> = ({ value, onValueChange, gradientColors }) => {
    const appStyles = useStyles(({ isDark, colors, Platform }) => ({
        thumbColor: { color: isDark ? colors.coolGray[50] : colors.purple[200] },
        gradientTrack: {
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            height: Platform.OS === 'ios'
                ? SWITCH_DIMENSIONS.ios.height
                : SWITCH_DIMENSIONS.android.height,
            width: SWITCH_DIMENSIONS.ios.width,
        },
    }));
    const { themeGradient } = useGradient();
    const switchTrackStyles = [
        appStyles.gradientTrack,
        { borderRadius: BORDER_RADIUS },
    ];

    return (
        <View style={switchTrackStyles}>
            <GradientBackground
                gradient={gradientColors ? gradientColors : themeGradient}
                style={styles.gradientBackground}
            >
                <Switch
                    value={value}
                    onValueChange={onValueChange}
                    trackColor={{ false: 'transparent', true: 'transparent' }}
                    thumbColor={appStyles.thumbColor.color}
                    ios_backgroundColor="transparent"
                />
            </GradientBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    gradientBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
