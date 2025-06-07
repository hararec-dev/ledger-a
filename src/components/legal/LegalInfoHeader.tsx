import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GradientText, Icon } from '@components';
import { useGradient, useStyles } from '@hooks';
import type { LegalInfoHeaderProps } from '@types';


export const LegalInfoHeader: React.FC<LegalInfoHeaderProps> = memo(({ navigation, title, lastUpdate }) => {
  const styles = useStyles(({ colors, isDark, fonts }) => ({
    header: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: isDark ? colors.coolGray[50] : colors.coolGray[900],
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 8,
      color: isDark ? colors.coolGray[100] : colors.coolGray[600],
      fontFamily: fonts.nunito.regular,
    },
    backButton: {
      marginBottom: 15,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
      fontFamily: fonts.quicksand.regular,
      textAlign: 'center',
    },
    gradientText: {
      textAlign: 'center',
    },
  }));
  const { themeGradient } = useGradient();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.navigate('OnboardingSlides')}
        style={styles.backButton}
      >
        <Icon name="arrow-back" size={24} color={styles.header.borderBottomColor} />
      </TouchableOpacity>
      <GradientText
        text={title}
        fontSize={22}
        gradientColors={themeGradient}
        fontWeight="black"
        style={styles.gradientText}
      />
      <Text style={styles.subtitle}>{lastUpdate}</Text>
    </View>
  );
});

