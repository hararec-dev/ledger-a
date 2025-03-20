import { useState, useMemo } from "react";
import { Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CustomGradientBorder } from "../../../components";
import { colorPalette, currencies, ONBOARDING_SETUP_TEXT } from "../../../config";
import { useThemeStore } from "../../../hooks";
import type { CurrencyInfo, CurrencyPickerProps } from "../../../types";

export const CurrencyPicker: React.FC<CurrencyPickerProps> = ({ formik, selectedCurrency }) => {
    const [showPicker, setShowPicker] = useState(false);
    const { colors } = useThemeStore();
    const gradientColors = useMemo<string[]>(() => [
        colors.blue[600],
        colors.purple[600],
        colors.rose[600],
    ], []);

    return (
        <>
            {Platform.OS === 'ios' ? (
                <>
                    <CustomGradientBorder gradientColors={gradientColors}>
                        <TouchableOpacity
                            style={styles.pickerButton}
                            onPress={() => setShowPicker(true)}
                        >
                            <Text style={styles.pickerButtonText}>
                                {selectedCurrency ? `${selectedCurrency.code} - ${selectedCurrency.description}` : ONBOARDING_SETUP_TEXT.currencyPlaceholder}
                            </Text>
                        </TouchableOpacity>
                    </CustomGradientBorder>

                    <Modal
                        visible={showPicker}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setShowPicker(false)}
                    >
                        <TouchableOpacity
                            style={styles.modalContainer}
                            activeOpacity={1}
                            onPress={() => setShowPicker(false)}
                        >
                            <View
                                style={styles.pickerModalContent}
                                onStartShouldSetResponder={() => true}
                                onTouchEnd={(e) => e.stopPropagation()}
                            >
                                <View style={styles.pickerHeader}>
                                    <TouchableOpacity onPress={() => setShowPicker(false)}>
                                        <Text style={styles.doneButtonText}>{ONBOARDING_SETUP_TEXT.doneButton}</Text>
                                    </TouchableOpacity>
                                </View>
                                <Picker
                                    selectedValue={formik.values.currency}
                                    onValueChange={(itemValue) => {
                                        formik.setFieldValue('currency', itemValue);
                                    }}
                                    itemStyle={styles.pickerItem}
                                >
                                    {currencies.map((currency: CurrencyInfo) => (
                                        <Picker.Item
                                            key={currency.code}
                                            label={`${currency.code} - ${currency.description}`}
                                            value={currency.code}
                                        />
                                    ))}
                                </Picker>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </>
            ) : (
                <CustomGradientBorder gradientColors={gradientColors}>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={formik.values.currency}
                            onValueChange={(itemValue) => formik.setFieldValue('currency', itemValue)}
                            style={styles.picker}
                        >
                            {currencies.map((currency: CurrencyInfo) => (
                                <Picker.Item
                                    key={currency.code}
                                    label={`${currency.code} - ${currency.description}`}
                                    value={currency.code}
                                />
                            ))}
                        </Picker>
                    </View>
                </CustomGradientBorder>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    pickerContainer: {
        backgroundColor: colorPalette.gray[50],
    },
    picker: {
        height: 50,
    },
    pickerButton: {
        padding: 12,
        backgroundColor: colorPalette.gray[50],
    },
    pickerButtonText: {
        fontSize: 16,
        color: colorPalette.warmGray[900],
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    pickerModalContent: {
        backgroundColor: colorPalette.gray[50],
        width: '100%',
        height: '35%',
    },
    pickerHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16,
    },
    doneButtonText: {
        color: colorPalette.green[500],
        fontSize: 16,
        fontWeight: '600',
    },
    pickerItem: {
        fontSize: 16,
        height: 150,
        color: colorPalette.warmGray[900],
    }
});