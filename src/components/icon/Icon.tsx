import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import type { IconProps } from '../../types';


export const Icon = ({
    name,
    size = 24,
    color = 'black',
    gradientColors,
    onPress,
    style,
    disabled = false,
    iconType = 'ion_icon',
}: IconProps) => {

    const IconComponent = iconType === 'ion_icon' ? Ionicons : MaterialIcons;

    const IconContent = (
        <IconComponent
            name={name}
            size={size}
            color={disabled ? '#ccc' : color}
            style={style}
        />
    );

    const GradientIconComponent = gradientColors ? (
        <MaskedView
            maskElement={IconContent}
        >
            <LinearGradient
                colors={gradientColors}
                style={styles.gradientContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <IconComponent
                    name={name}
                    size={size}
                    color="transparent"
                    style={style}
                />
            </LinearGradient>
        </MaskedView>
    ) : IconContent;

    return !onPress
        ? GradientIconComponent
        : (
            <TouchableOpacity
                onPress={onPress}
                style={[style, styles.touchableContainer]}
                disabled={disabled}
                activeOpacity={0.7}
            >
                {GradientIconComponent}
            </TouchableOpacity>
        );
};

const styles = StyleSheet.create({
    touchableContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
    },
    gradientContainer: {
        flex: 1,
    },
});
