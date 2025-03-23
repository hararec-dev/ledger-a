import { StyleSheet, Text, View } from "react-native";
import { colorPalette, ONBOARDING_SETUP_TEXT } from "../../../config";
import { CustomText } from "../../../components";
import type { OnboardingSetupHeaderProps } from "../../../types";


export const OnboardingSetupHeader: React.FC<OnboardingSetupHeaderProps> = ({ gradientDark }) => (
  <View style={styles.header}>
    <CustomText
      text={ONBOARDING_SETUP_TEXT.title}
      fontSize={30}
      fontWeight='bold'
      gradientColors={gradientDark}
      style={styles.text}
    />
    <Text style={styles.subtitle}>{ONBOARDING_SETUP_TEXT.subtitle}</Text>
  </View>
);

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
    color: colorPalette.coolGray[50],
  },
  text: {
    textAlign: 'center',
    lineHeight: 40
  }
});