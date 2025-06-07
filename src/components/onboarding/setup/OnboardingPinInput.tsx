import { useCallback } from 'react';
import { FormSetupGroup, GradientInput } from '@components';
import type { PinInputProps, ValidFormOnboardingAppFieldName } from '@types';

export const OnboardingPinInput: React.FC<PinInputProps> = ({
    autoFocus,
    fieldName,
    formik,
    gradientColors,
    label,
    placeholder,
    value,
}) => {
    const isFieldNameValid = useCallback((name: string): name is ValidFormOnboardingAppFieldName => {
        return name in formik.values;
    }, [formik.values]);

    return (
        <FormSetupGroup
            label={label}
            error={isFieldNameValid(fieldName) ? formik.errors[fieldName] : undefined}
            touched={isFieldNameValid(fieldName) ? formik.touched[fieldName] : undefined}
        >
            <GradientInput
                autoFocus={autoFocus}
                gradientColors={gradientColors}
                isSecureTextEntry
                keyboardType="numeric"
                maxLength={4}
                onBlur={() => formik.handleBlur(fieldName)}
                onChangeText={(e: string) => {
                    formik.handleChange(fieldName)(e);
                    formik.setFieldTouched(fieldName, true, false);
                }}
                placeholder={placeholder}
                value={value}
            />
        </FormSetupGroup>
    );
};
