import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Modal, Platform, Text, TouchableOpacity, View } from 'react-native';
import { GradientBorder } from '../../components';
import { useStyles } from '../../hooks';
import type { OptionItem, OptionPickerProps } from '../../types';


export const OptionPicker = <T extends OptionItem>({
    value,
    options,
    onValueChange,
    placeholder = 'Seleccionar opción',
    selectedOption,
}: OptionPickerProps<T>) => {
    const [showPicker, setShowPicker] = useState(false);
    const styles = useStyles(({ colors, Platform: platform, isDark }) => ({
        pickerContainer: {
            backgroundColor: colors.gray[50],
        },
        picker: {
            backgroundColor: platform.OS === 'ios' ? colors.gray[50] : 'transparent',
            ...(platform.OS === 'android' && {
                height: 50,
                color: colors.warmGray[900],
            }),
        },
        pickerButton: {
            padding: 12,
            backgroundColor: colors.gray[50],
        },
        pickerButtonText: {
            fontSize: 16,
            color: colors.warmGray[900],
        },
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.5)',
        },
        content: {
            backgroundColor: colors.gray[50],
            width: '100%',
            height: '35%',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: colors.gray[200],
        },
        pickerItem: {
            color: colors.coolGray[900],
            ...(platform.OS === 'ios' && {
                fontSize: 18,
                height: 150,
                fontWeight: '500',
                justifyContent: 'center',
            }),
            ...(platform.OS === 'android' && {
                fontSize: 16,
                width: '100%',
                fontFamily: 'Nunito-Regular',
                backgroundColor: colors.coolGray[50],
            }),
        },
        pickerItemColor: {
            color: platform.OS === 'ios'
                ? colors.coolGray[900]
                : undefined,
        },
        dropdownIconColor: {
            color: colors.warmGray[900],
        },
        doneButton: {
            color: isDark ? colors.orange[500] : colors.purple[700],
            fontSize: 16,
            fontWeight: '600',
        },
    }));

    const renderPickerItems = () => (
        options.map((option: T) => (
            <Picker.Item
                key={option.code}
                label={`${option.code} - ${option.description}`}
                value={option.code}
                color={styles.pickerItemColor.color}
                style={Platform.OS === 'android' ? styles.pickerItem : undefined}
            />
        ))
    );

    return Platform.OS === 'android'
        ? (
            <GradientBorder>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={value}
                        onValueChange={onValueChange}
                        style={styles.picker}
                        dropdownIconColor={styles.dropdownIconColor.color}
                    >
                        {renderPickerItems()}
                    </Picker>
                </View>
            </GradientBorder>
        ) : (
            <>
                <GradientBorder>
                    <TouchableOpacity
                        style={styles.pickerButton}
                        onPress={() => setShowPicker(true)}
                    >
                        <Text style={styles.pickerButtonText}>
                            {selectedOption
                                ? `${selectedOption.code} - ${selectedOption.description}`
                                : placeholder}
                        </Text>
                    </TouchableOpacity>
                </GradientBorder>

                <Modal
                    visible={showPicker}
                    transparent
                    animationType="slide"
                    onRequestClose={() => setShowPicker(false)}
                >
                    <TouchableOpacity
                        style={styles.container}
                        activeOpacity={1}
                        onPress={() => setShowPicker(false)}
                    >
                        <View
                            style={styles.content}
                            onStartShouldSetResponder={() => true}
                            onTouchEnd={(e) => e.stopPropagation()}
                        >
                            <View style={styles.header}>
                                <TouchableOpacity onPress={() => setShowPicker(false)}>
                                    <Text style={styles.doneButton}>Listo</Text>
                                </TouchableOpacity>
                            </View>
                            <Picker
                                selectedValue={value}
                                onValueChange={onValueChange}
                                itemStyle={styles.pickerItem}
                                style={styles.picker}
                            >
                                {renderPickerItems()}
                            </Picker>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </>
        );
};