import { StyleSheet, Text, View } from 'react-native';
import type { FormSetupGroupProps } from '../../../types';
import { colorPalette } from '../../../config';
import { useThemeStore } from '../../../hooks';


export const FormSetupGroup: React.FC<FormSetupGroupProps> = ({ label, error, touched, children, style }) => {
  const { isDark } = useThemeStore();
  const styles = StyleSheet.create({
    label: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 8,
      color: isDark ? colorPalette.coolGray[50] : colorPalette.coolGray[900],
      fontFamily: 'Quicksand-Regular',
    },
    errorText: {
      color: colorPalette.red[500],
      fontSize: 14,
      marginTop: 5,
      fontWeight: '500',
      fontFamily: 'Nunito-Regular',
    },
  });

  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      {children}
      {error && touched && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
};
