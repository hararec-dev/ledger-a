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

export interface CustomFontProps {
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: 'normal' | 'bold' | 'black' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
}
export interface CustomTextProps extends CustomFontProps {
    text: string;
    color?: string;
    gradientColors?: string[];
}