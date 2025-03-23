import { StyleSheet, TextInput } from "react-native";
import { CustomGradientBorder } from "./CustomGradientBorder";
import { colorPalette } from "../../config";
import type { CustomInputProps } from "../../types";


export const CustomInput: React.FC<CustomInputProps> = ({ 
    value, 
    onChangeText, 
    onBlur, 
    placeholder, 
    gradientLight, 
    keyboardType = 'default',
    maxLength 
}) => (
    <CustomGradientBorder gradientColors={gradientLight}>
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
    </CustomGradientBorder>
);

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: colorPalette.gray[50],
    },
});