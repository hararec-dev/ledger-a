import { NavigationContainer } from '@react-navigation/native';
import { useThemeStore } from '@hooks';
import { DarkNavigationTheme, LightNavigationTheme } from '@config';
import type { ProviderProps } from '@types';

export const NavigationProvider = ({ children }: ProviderProps) => {
  const { isDark } = useThemeStore();

  return (
    <NavigationContainer theme={isDark ? DarkNavigationTheme : LightNavigationTheme}>
      {children}
    </NavigationContainer>
  );
};
