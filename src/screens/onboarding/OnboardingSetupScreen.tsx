import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Platform, Modal } from 'react-native';
import { useFormik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import { useCurrentStatusAppStore } from '../../hooks';
import { currencies, ONBOARDING_SETUP_TEXT, validationOnboardingSetupSchema as validationSchema } from '../../config';
import type { CurrencyInfo, OnboardingSetupProps } from '../../types';


export const OnboardingSetupScreen: React.FC<OnboardingSetupProps> = ({ navigation }) => {
  const { setUserCurrency, userCurrency } = useCurrentStatusAppStore();
  const [showPicker, setShowPicker] = useState(false);

  const formik = useFormik({
    initialValues: {
      currency: userCurrency || 'MXN',
      accountName: 'Efectivo',
      initialAmount: '0',
    },
    validationSchema,
    onSubmit: ({ currency }) => {
      setUserCurrency(currency);
      navigation.navigate('OnboardingAuthSetup');
    },
  });

  const selectedCurrency = currencies.find(currency => currency.code === formik.values.currency);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{ONBOARDING_SETUP_TEXT.title}</Text>
          <Text style={styles.subtitle}>{ONBOARDING_SETUP_TEXT.subtitle}</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>{ONBOARDING_SETUP_TEXT.currencyLabel}</Text>
            {Platform.OS === 'ios' ? (
              <>
                <TouchableOpacity
                  style={styles.pickerButton}
                  onPress={() => setShowPicker(true)}
                >
                  <Text style={styles.pickerButtonText}>
                    {selectedCurrency ? `${selectedCurrency.code} - ${selectedCurrency.description}` : ONBOARDING_SETUP_TEXT.currencyPlaceholder}
                  </Text>
                </TouchableOpacity>

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
                      <View style={styles.pickerWrapper}>
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
                    </View>
                  </TouchableOpacity>
                </Modal>
              </>
            ) : (
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
            )}
            {formik.errors.currency && formik.touched.currency && (
              <Text style={styles.errorText}>{formik.errors.currency}</Text>
            )}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>{ONBOARDING_SETUP_TEXT.accountNameLabel}</Text>
            <TextInput
              style={styles.input}
              value={formik.values.accountName}
              onChangeText={formik.handleChange('accountName')}
              onBlur={formik.handleBlur('accountName')}
              placeholder={ONBOARDING_SETUP_TEXT.accountNamePlaceholder}
            />
            {formik.errors.accountName && formik.touched.accountName && (
              <Text style={styles.errorText}>{formik.errors.accountName}</Text>
            )}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>{ONBOARDING_SETUP_TEXT.initialAmountLabel}</Text>
            <TextInput
              style={styles.input}
              value={formik.values.initialAmount}
              onChangeText={formik.handleChange('initialAmount')}
              onBlur={formik.handleBlur('initialAmount')}
              placeholder={ONBOARDING_SETUP_TEXT.initialAmountPlaceholder}
              keyboardType="numeric"
            />
            {formik.errors.initialAmount && formik.touched.initialAmount && (
              <Text style={styles.errorText}>{formik.errors.initialAmount}</Text>
            )}
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => formik.handleSubmit()}
          >
            <Text style={styles.buttonText}>{ONBOARDING_SETUP_TEXT.submitButton}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fafafa',
  },
  picker: {
    height: 40,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#4a90e2',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  pickerButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fafafa',
  },
  pickerButtonText: {
    fontSize: 16,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  pickerModalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '35%',
  },
  pickerHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  doneButtonText: {
    color: '#2ecc71',
    fontSize: 16,
    fontWeight: '600',
  },
  pickerWrapper: {
    height: '40%',
    overflow: 'hidden',
  },
  pickerItem: {
    fontSize: 16,
    height: 150,
    color: '#333',
  },
  iosPicker: {
    height: '100%',
  },
});
