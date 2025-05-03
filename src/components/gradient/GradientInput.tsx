import { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { GradientBorder, Icon } from '../../components';
import { useStyles } from '../../hooks';
import type { GradientInputProps } from '../../types';


export const GradientInput: React.FC<GradientInputProps> = ({
    autoFocus,
    gradientColors,
    isSecureTextEntry = false,
    keyboardType = 'default',
    maxLength,
    onBlur,
    onChangeText,
    placeholder,
    value,
}) => {
    const styles = useStyles(({ colors, isDark }) => ({
        input: {
            padding: 8,
            fontSize: 16,
            backgroundColor: colors.gray[50],
            color: colors.gray[900],
            ...(isSecureTextEntry && { flex: 4 }),
        },
        placeholder: {
            color: colors.gray[400],
        },
        inputContainer: {
            ...(isSecureTextEntry && {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                backgroundColor: 'transparent',
            }),
        },
        icon: {
            color: isDark ? colors.coolGray[50] : colors.coolGray[900],
            size: 24,
        },
        eyeContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
    }));
    const [showPassword, setShowPassword] = useState(false);

    return (
        <GradientBorder
            gradientColors={gradientColors}
            style={styles.inputContainer}
        >
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                placeholder={placeholder}
                placeholderTextColor={styles.placeholder.color}
                keyboardType={keyboardType}
                maxLength={maxLength}
                secureTextEntry={isSecureTextEntry && !showPassword}
                autoFocus={autoFocus}
            />
            {isSecureTextEntry && (
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeContainer}
                >
                    <Icon
                        name={showPassword ? 'eye' : 'eye-off'}
                        size={styles.icon.size}
                        color={styles.icon.color}
                    />
                </TouchableOpacity>
            )}
        </GradientBorder>
    );
};
