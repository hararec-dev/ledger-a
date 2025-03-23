import { useState } from "react";
import { Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CustomGradientBorder } from "../../../components";
import { colorPalette, currencies, ONBOARDING_SETUP_TEXT } from "../../../config";
import { useGradient } from "../../../hooks";
import type { CurrencyInfo, CurrencyPickerProps } from "../../../types";

export const CurrencyPicker: React.FC<CurrencyPickerProps> = ({ formik, selectedCurrency }) => {
    const [showPicker, setShowPicker] = useState(false);
    const { gradientLight } = useGradient();

    return (
        <>
            {Platform.OS === 'ios' ? (
                <>
                    <CustomGradientBorder gradientColors={gradientLight}>
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
                                    style={styles.pickerIOS}
                                >
                                    {currencies.map((currency: CurrencyInfo) => (
                                        <Picker.Item
                                            key={currency.code}
                                            label={`${currency.code} - ${currency.description}`}
                                            value={currency.code}
                                            color={colorPalette.warmGray[900]}
                                        />
                                    ))}
                                </Picker>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </>
            ) : (
                <CustomGradientBorder gradientColors={gradientLight}>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={formik.values.currency}
                            onValueChange={(itemValue) => formik.setFieldValue('currency', itemValue)}
                            style={styles.pickerAndroid}
                            dropdownIconColor={colorPalette.warmGray[900]}
                        >
                            {currencies.map((currency: CurrencyInfo) => (
                                <Picker.Item
                                    key={currency.code}
                                    label={`${currency.code} - ${currency.description}`}
                                    value={currency.code}
                                    style={styles.pickerItemAndroid}
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
        borderRadius: 8,
    },
    pickerAndroid: {
        height: 50,
        color: colorPalette.warmGray[900],
        backgroundColor: 'transparent',
    },
    pickerIOS: {
        backgroundColor: colorPalette.gray[50],
    },
    pickerButton: {
        padding: 12,
        backgroundColor: colorPalette.gray[50],
        borderRadius: 8,
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
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    pickerHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colorPalette.gray[200],
    },
    doneButtonText: {
        color: colorPalette.orange[500],
        fontSize: 16,
        fontWeight: '600',
    },
    pickerItem: {
        fontSize: 18,
        height: 150,
        color: colorPalette.warmGray[900],
        fontWeight: '500',
        justifyContent: 'center',
    },
    pickerItemAndroid: {
        fontSize: 16,
        width: '100%',
        color: colorPalette.warmGray[900],
        fontFamily: 'Nunito-Regular',
        backgroundColor: 'transparent',
    }
});