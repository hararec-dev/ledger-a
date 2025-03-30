import type { PropsWithChildren } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { FormikProps } from 'formik';
import type { Currency, CurrencyInfo } from '../config';
import type { ThemeColor } from '../hooks';

export interface FormOnboardingSetupValues {
    currency: Currency;
    accountName: string;
    initialAmount: string;
}

export interface FormOnboardingAppValues {
    theme: ThemeColor;
    biometricAuth: boolean;
    createPin: boolean;
    pin: string;
    confirmPin: string;
}

export interface PaginationDotsProps {
    currentIndex: number;
    numberOfIndexes: number;
    style?: StyleProp<ViewStyle>;
}

export interface OnboardingButtonProps {
    onNavigate: () => void;
    style?: StyleProp<ViewStyle>;
}

export interface CurrencyPickerProps {
    formik: FormikProps<FormOnboardingSetupValues>;
    selectedCurrency: CurrencyInfo | undefined;
}

export type FormSetupGroupProps = PropsWithChildren<{
    label: string;
    error: string | undefined;
    touched: boolean | undefined;
    style?: ViewStyle | ViewStyle[];
}>;

export interface OnboardingSetupHeaderProps {
    gradientColors: string[];
}

export type GradientButtonProps = PropsWithChildren<{
    onPress?: () => void;
    gradientColors?: string[];
    disabled?: boolean;
    disabledStyle?: ViewStyle | ViewStyle[];
    style?: ViewStyle | ViewStyle[];
}>;

export interface OnboardingSetupFormProps {
    formik: FormikProps<FormOnboardingSetupValues>;
    selectedCurrency: CurrencyInfo | undefined;
    gradientColors: string[];
}

export interface OnboardingFormProps {
    formik: FormikProps<FormOnboardingAppValues>;
    gradientColors?: string[];
}

export interface PinInputProps extends OnboardingFormProps {
    label: string;
    value: string;
    fieldName: string;
    placeholder: string;
}

export interface OnboardingSetupHeaderProps {
    gradientColors: string[];
    title: string;
    subtitle: string;
    isAccount: boolean;
}

export type ValidFormOnboardingAppFieldName = keyof FormOnboardingAppValues;

