import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useAppTheme } from '../../hooks';
import type { NavigationProviderProps } from '../../types';

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const { isDark } = useAppTheme();

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationContainer>
  );
}
