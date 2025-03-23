import type { PropsWithChildren } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import type { FormikProps } from 'formik';
import type { Currency, CurrencyInfo } from "../config";

export interface FormOnboardingSetupValues {
    currency: Currency;
    accountName: string;
    initialAmount: string;
}

export interface PaginationDotsProps {
    currentIndex: number;
    numberOfIndexes: number;
    style?: StyleProp<ViewStyle>;
}

export interface OnboardingButtonProps extends PaginationDotsProps {
    onNext: (index: number) => void;
    onNavigate: (screen: string) => void;
}

export interface CurrencyPickerProps {
    formik: FormikProps<FormOnboardingSetupValues>;
    selectedCurrency: CurrencyInfo | undefined;
}

export type FormSetupGroupProps = PropsWithChildren<{
    label: string;
    error: string | undefined;
    touched: boolean | undefined;
}>;

export interface OnboardingSetupHeaderProps {
    gradientDark: string[];
}

export type CustomGradientButtonProps = PropsWithChildren<{
    onPress?: () => void;
    gradientColors: string[];
    disabled?: boolean;
    disabledStyle?: ViewStyle | ViewStyle[];
}>;

export interface OnboardingSetupFormProps {
    formik: FormikProps<FormOnboardingSetupValues>;
    selectedCurrency: CurrencyInfo | undefined;
    gradientLight: string[];
    gradientOnboarding: string[];
}