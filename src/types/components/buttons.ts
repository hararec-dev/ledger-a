import type { StyleProp, ViewStyle } from "react-native";

export type CustomIconProps = {
    name: string;
    size?: number;
    color?: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
};