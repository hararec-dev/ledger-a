import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';

export type GradientBorderProps = PropsWithChildren<{ gradientColors: string[] }>;

export type GradientBackgroundProps = PropsWithChildren<{
    gradient: string[];
    style?: ViewStyle;
}>;

export interface GradientInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onBlur: () => void;
    placeholder: string;
    gradientLight: string[];
    keyboardType?: 'numeric' | 'default';
    maxLength?: number;
}

export interface GradientSwitchProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
    gradientLight: string[];
}
