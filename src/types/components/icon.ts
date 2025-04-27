import type { StyleProp, ViewStyle } from 'react-native';

export type IconType = 'ion_icon' | 'material_community_icon';

export type IconProps = {
    name: string;
    size?: number;
    color?: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
    gradientColors?: string[];
    iconType?: IconType;
};
