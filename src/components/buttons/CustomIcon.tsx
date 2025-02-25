import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { CustomIconProps } from '../../types';


export const CustomIcon = ({
    name,
    size = 24,
    color = 'black',
    onPress,
    style,
    disabled = false,
}: CustomIconProps) => {
    const IconComponent = (
        <Icon
            name={name}
            size={size}
            color={disabled ? '#ccc' : color}
            style={style}
        />
    );

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
