import { useEffect, useRef, useMemo } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { OnboardingSetupAccount, OnboardingSetupApp } from '../../components';
import { colorPalette } from '../../config';
import type { OnboardingSetupProps } from '../../types';
import { useThemeStore } from '../../hooks';


export const OnboardingSetupScreen: React.FC<OnboardingSetupProps> = ({ navigation, route }) => {
  const { setTheme, currentTheme, isDark } = useThemeStore();
  const animations = useRef({
    glow: new Animated.Value(0),
    scale: new Animated.Value(1)
  }).current;

  const startAnimation = () => {
    const { glow, scale } = animations;
    glow.setValue(0);
    scale.setValue(1);

    const createParallelAnimation = (glowValue: number, scaleValue: number) =>
      Animated.parallel([
        Animated.timing(glow, {
          toValue: glowValue,
          duration: 700,
          useNativeDriver: false,
        }),
        Animated.timing(scale, {
          toValue: scaleValue,
          duration: 700,
          useNativeDriver: false,
        }),
      ]);

    Animated.sequence([
      Animated.delay(200),
      createParallelAnimation(1, 2),
      Animated.delay(200),
      createParallelAnimation(0, 1),
    ]).start();
  };

  useEffect(() => {
    startAnimation();
  }, [route.params.typeSetup]);

  const glowStyle = useMemo(() => ({
    textShadowColor: colorPalette.coolGray[50],
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: animations.glow.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 50]
    }),
    opacity: animations.glow.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.7, 1, 0.7]
    }),
    transform: [{ scale: animations.scale }]
  }), [animations]);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 15,
      backgroundColor: isDark ? colorPalette.coolGray[900]: colorPalette.coolGray[50],
    },
    pageIndicator: {
      marginBottom: 30,
    },
    pageNumber: {
      color: isDark ? colorPalette.coolGray[50] : colorPalette.coolGray[900],
      fontSize: 16,
      fontFamily: 'Nunito-Regular',
    }
  });
  
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

