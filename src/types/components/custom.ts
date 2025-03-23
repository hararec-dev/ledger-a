import type { PropsWithChildren } from "react";
import type { ViewStyle } from "react-native";

export type CustomGradientBorderProps = PropsWithChildren<{ gradientColors: string[] }>;

export type CustomGradientBackgroundProps = PropsWithChildren<{
    gradient: string[];
    style?: ViewStyle;
}>;

export interface CustomInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onBlur: () => void;
    placeholder: string;
    gradientLight: string[];
    keyboardType?: 'numeric' | 'default';
}