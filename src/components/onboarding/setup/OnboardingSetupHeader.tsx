import { Text, View } from 'react-native';
import { GradientText } from '@components';
import { useStyles } from '@hooks';
import type { OnboardingSetupHeaderProps } from '@types';


export const OnboardingSetupHeader: React.FC<OnboardingSetupHeaderProps> = ({
  gradientColors,
  title,
  subtitle,
  isAccount,
}) => {
  const styles = useStyles(({ isDark, colors, Platform, fonts }) => ({
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
      fontFamily: fonts.nunito.regular,
      color: isDark ? colors.coolGray[50] : colors.coolGray[900],
    },
    text: {
      textAlign: 'center',
      lineHeight: 40,
      ...(Platform.OS === 'android' && !isAccount && { lineHeight: 60 }),
    },
  }));

  return (
    <View style={styles.header}>
      <GradientText
        text={title}
        fontSize={30}
        fontWeight="bold"
        gradientColors={gradientColors}
        style={styles.text}
      />
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
