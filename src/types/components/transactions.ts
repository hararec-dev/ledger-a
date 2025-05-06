import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface SpeedDialButtonProps {
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
}
export type SpeedDialButtonActions = Array<{
    icon: string;
    title: string;
    onPress: () => void;
}>;
