import { Text, View } from 'react-native';
import { useStyles } from '../../../hooks';
import type { FormSetupGroupProps } from '../../../types';


export const FormSetupGroup: React.FC<FormSetupGroupProps> = ({ label, error, touched, children, style }) => {
  const styles = useStyles(({ isDark, colors }) => ({
    label: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 8,
      color: isDark ? colors.coolGray[50] : colors.coolGray[900],
      fontFamily: 'Quicksand-Regular',
    },
    errorText: {
      color: isDark ? colors.red[300] : colors.red[500],
      fontSize: 14,
      marginTop: 5,
      fontWeight: '500',
      fontFamily: 'Nunito-Regular',
    },
  }));

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
