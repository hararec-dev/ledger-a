import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';

export type GradientBorderProps = PropsWithChildren<{
    gradientColors?: string[];
    style?: ViewStyle | ViewStyle[];
}>;

export type GradientBackgroundProps = PropsWithChildren<{
    gradient: string[];
    style?: ViewStyle | ViewStyle[];
}>;

export interface GradientInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onBlur: () => void;
    placeholder: string;
    keyboardType?: 'numeric' | 'default';
    maxLength?: number;
    gradientColors?: string[];
    isSecureTextEntry?: boolean;
    autoFocus?: boolean;
}

export interface GradientSwitchProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
    gradientColors?: string[];
    disabled?: boolean;
}
