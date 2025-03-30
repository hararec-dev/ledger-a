import { useCallback } from 'react';
import { FormSetupGroup, GradientInput } from '../../../components';
import type { PinInputProps, ValidFormOnboardingAppFieldName } from '../../../types';

export const OnboardingPinInput: React.FC<PinInputProps> = ({ label, value, fieldName, placeholder, formik, gradientColors }) => {
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
                value={value}
                onChangeText={(e: string) => {
                    formik.handleChange(fieldName)(e);
                    formik.setFieldTouched(fieldName, true, false);
                }}
                onBlur={() => formik.handleBlur(fieldName)}
                placeholder={placeholder}
                gradientColors={gradientColors}
                keyboardType="numeric"
                isSecureTextEntry
                maxLength={4}
            />
        </FormSetupGroup>
    );
};
