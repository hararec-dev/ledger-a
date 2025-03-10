import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useCurrentStatusAppStore, useThemeStore } from '../../hooks';
import { DarkNavigationTheme, LightNavigationTheme } from '../../config';
import type { NavigationProviderProps } from '../../types';

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const { isDark } = useThemeStore();
  const [isStoredDataLoaded, setIsStoredDataLoaded] = useState(false);
  const {
    loadStoredData,
    biometricEnabled,
    hasOnboarded,
    lastActivity,
    pinCode,
    userCurrency,
  } = useCurrentStatusAppStore();

  useEffect(() => {
    const initStoredData = async () => {
      await loadStoredData();
      setIsStoredDataLoaded(true);
    };

    initStoredData();
  }, [biometricEnabled, hasOnboarded, lastActivity, pinCode, userCurrency]);

  return !isStoredDataLoaded
    ? null
    : (
      <NavigationContainer theme={isDark ? DarkNavigationTheme : LightNavigationTheme}>
        {children}
      </NavigationContainer>
    );
}
