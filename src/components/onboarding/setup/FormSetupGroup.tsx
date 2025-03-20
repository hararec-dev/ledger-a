import { StyleSheet, Text, View } from "react-native";
import type { FormSetupGroupProps } from "../../../types";
import { colorPalette } from "../../../config";


export const FormSetupGroup: React.FC<FormSetupGroupProps> = ({ label, error, touched, children }) => (
  <View style={styles.formGroup}>
    <Text style={styles.label}>{label}</Text>
    {children}
    {error && touched && (
      <Text style={styles.errorText}>{error}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  formGroup: {
    /* marginBottom: 5, */
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: colorPalette.coolGray[50],
    fontFamily: 'Quicksand-Regular',
  },
  errorText: {
    color: colorPalette.red[500],
    fontSize: 14,
    marginTop: 5,
    fontWeight: '500',
    fontFamily: 'Nunito-Regular',
  }
});