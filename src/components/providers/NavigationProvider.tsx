import { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import type { NavigationProviderProps } from '../../types';
import { useThemeStore } from '../../hooks';

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const { isDark } = useThemeStore();
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationContainer>
  );
}
