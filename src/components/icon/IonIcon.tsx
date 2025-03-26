import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import type { IonIconProps } from '../../types';

export const IonIcon = ({
    name,
    size = 24,
    color = 'black',
    gradientColors,
    onPress,
    style,
    disabled = false,
}: IonIconProps) => {
    const IconContent = (
        <Icon
            name={name}
            size={size}
            color={disabled ? '#ccc' : color}
            style={style}
        />
    );

    const IconComponent = gradientColors ? (
        <MaskedView
            maskElement={IconContent}
        >
            <LinearGradient
                colors={gradientColors}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Icon
                    name={name}
                    size={size}
                    color="transparent"
                    style={style}
                />
            </LinearGradient>
        </MaskedView>
    ) : IconContent;

    return !onPress
        ? IconComponent
        : (
            <TouchableOpacity
                onPress={onPress}
                style={[style, {
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 4,
                }]}
                disabled={disabled}
                activeOpacity={0.7}
            >
                {IconComponent}
            </TouchableOpacity>
        );
};
