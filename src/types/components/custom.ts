import type { PropsWithChildren } from "react";
import type { ViewStyle } from "react-native";

export type CustomGradientBorderProps = PropsWithChildren<{ gradientColors: string[] }>;

export type CustomGradientBackgroundProps = PropsWithChildren<{
    gradient: string[];
    style?: ViewStyle;
}>;