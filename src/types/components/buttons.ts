import type { StyleProp, ViewStyle } from "react-native";

export type CustomIconProps = {
    name: string;
    size?: number;
    color?: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
    gradientColors?: string[];
};

export interface CustomTextProps {
    text: string;
    color?: string;
    gradientColors?: string[];
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
}