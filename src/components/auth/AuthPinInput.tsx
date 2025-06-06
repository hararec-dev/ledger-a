import { FormSetupGroup, GradientInput } from '@components';
import type { AuthPinInputProps } from '@types';


export const AuthPinInput: React.FC<AuthPinInputProps> = ({
    label,
    value,
    error,
    placeholder,
    gradientColors,
    onChangeText,
}) => {
    return (
        <FormSetupGroup
            label={label}
            error={error}
            touched
        >
            <GradientInput
                autoFocus
                gradientColors={gradientColors}
                isSecureTextEntry
                keyboardType="numeric"
                maxLength={4}
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
            />
        </FormSetupGroup>
    );
};
