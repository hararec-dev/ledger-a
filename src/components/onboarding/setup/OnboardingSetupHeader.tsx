import { Platform, StyleSheet, Text, View } from "react-native";
import { CustomText } from "../../../components";
import { colorPalette } from "../../../config";
import type { OnboardingSetupHeaderProps } from "../../../types";
import { useThemeStore } from "../../../hooks";


export const OnboardingSetupHeader: React.FC<OnboardingSetupHeaderProps> = ({
  gradientDark,
  title,
  subtitle,
  isAccount,
}) => {
  const { isDark, colors } = useThemeStore();
  const styles = StyleSheet.create({
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 10,
      width: '100%',
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: '500',
      fontFamily: 'Nunito-Regular',
      color: isDark ? colorPalette.coolGray[50] : colorPalette.coolGray[900],
    },
    text: {
      textAlign: 'center',
      lineHeight: 40
    }
  });

  return (
    <View style={styles.header}>
      <CustomText
        text={title}
        fontSize={30}
        fontWeight='bold'
        gradientColors={gradientDark}
        style={[
          styles.text,
          Platform.OS === 'android' && !isAccount && { lineHeight: 60 }
        ]}
      />
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
