import { NavigationContainer } from '@react-navigation/native';
import { useThemeStore } from '../../hooks';
import { DarkNavigationTheme, LightNavigationTheme } from '../../config';
import type { NavigationProviderProps } from '../../types';

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const { isDark } = useThemeStore();
  return (
    <NavigationContainer theme={isDark ? DarkNavigationTheme : LightNavigationTheme}>
      {children}
    </NavigationContainer>
  );
}
