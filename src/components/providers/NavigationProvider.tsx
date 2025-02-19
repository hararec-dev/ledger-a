import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useThemeStore } from '../../hooks';
import type { NavigationProviderProps } from '../../types';

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const colorScheme = useColorScheme();
  const { isDark, loadTheme } = useThemeStore();
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    const initTheme = async () => {
      await loadTheme();
      setIsThemeLoaded(true);
    };

    initTheme();
  }, [colorScheme]);

  return !isThemeLoaded
    ? null
    : (
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        {children}
      </NavigationContainer>
    );
}
