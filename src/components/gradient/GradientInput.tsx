import { StyleSheet, TextInput } from 'react-native';
import { GradientBorder } from './GradientBorder';
import { colorPalette } from '../../config';
import type { GradientInputProps } from '../../types';


export const GradientInput: React.FC<GradientInputProps> = ({
    value,
    onChangeText,
    onBlur,
    placeholder,
    gradientLight,
    keyboardType = 'default',
    maxLength,
}) => (
    <GradientBorder gradientColors={gradientLight}>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            placeholder={placeholder}
            placeholderTextColor={colorPalette.gray[400]}
            keyboardType={keyboardType}
            maxLength={maxLength}
        />
    </GradientBorder>
);

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: colorPalette.gray[50],
    },
});
