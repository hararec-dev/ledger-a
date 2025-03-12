import { useMemo } from 'react';
import { Platform, StatusBar } from 'react-native';
import { createTheme, darkColors, lightColors, ThemeProvider } from '@rneui/themed';
import { useAsyncStorageLoad } from '../../hooks';
import type { AppThemeProviderProps } from '../../types';


export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const { isLoaded, isDark, colors, currentTheme } = useAsyncStorageLoad();
  const theme = useMemo(() => createTheme({
    lightColors: {
        ...Platform.select({
            android: lightColors.platform.android,
            ios: lightColors.platform.ios,
        }),
    },
    darkColors: {
        ...Platform.select({
            android: darkColors.platform.android,
            ios: darkColors.platform.ios,
        }),
    },
    components: {
        Button: {
            titleStyle: {
                color: 'red',
            },
        },
    },
    mode: currentTheme || 'light',
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 40,
    },
}), [currentTheme]);

  return !isLoaded
    ? null
    : (
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={isDark ? 'light-content' : 'dark-content'}
          backgroundColor={isDark ? colors.warmGray[900] : colors.coolGray[50]}
        />
        {children}
      </ThemeProvider>
    );
};