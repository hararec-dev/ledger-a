import { View, Animated } from 'react-native';
import { OnboardingSetupAccount, OnboardingSetupApp } from '../../components';
import { usePageIndicatorAnimation, useStyles } from '../../hooks';
import type { OnboardingSetupProps } from '../../types';


export const OnboardingSetupScreen: React.FC<OnboardingSetupProps> = ({ navigation, route }) => {
  const { glowStyle } = usePageIndicatorAnimation({ typeSetup: route.params.typeSetup });
  const styles = useStyles(({ colors, isDark }) => ({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 15,
      backgroundColor: isDark ? colors.coolGray[900] : colors.coolGray[50],
    },
    pageIndicator: {
      marginBottom: 30,
    },
    pageNumber: {
      color: isDark ? colors.coolGray[50] : colors.coolGray[900],
      fontSize: 16,
      fontFamily: 'Nunito-Regular',
    },
  }));

  return (
    <View style={styles.container}>
      {route.params.typeSetup === 'setup'
        ? (<OnboardingSetupApp navigation={navigation} />)
        : (<OnboardingSetupAccount navigation={navigation} />)
      }
      <View style={styles.pageIndicator}>
        <Animated.Text style={[styles.pageNumber, glowStyle]}>
          {route.params.typeSetup === 'setup' ? 1 : 2} / 2
        </Animated.Text>
      </View>
    </View>
  );
};
