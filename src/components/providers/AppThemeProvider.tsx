import { useMemo } from 'react';
import { Platform, StatusBar } from 'react-native';
import { createTheme, ThemeProvider } from '@rneui/themed';
import { useAsyncStorageLoad } from '../../hooks';
import type { AppThemeProviderProps } from '../../types';


export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const {
    isLoaded,
    isDark,
    colors,
    currentTheme,
    lastActivity,
    rneuiDarkColors,
    rneuiLightColors,
  } = useAsyncStorageLoad();

  const theme = useMemo(() => createTheme({
    lightColors: {
      ...Platform.select({
        android: rneuiLightColors,
        ios: rneuiLightColors,
      }),
    },
    darkColors: {
      ...Platform.select({
        android: rneuiDarkColors,
        ios: rneuiDarkColors,
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
  }), [currentTheme, rneuiDarkColors, rneuiLightColors]);

  const statusBarBackgroundColor = useMemo(() =>
    lastActivity?.path === 'OnboardingSlides'
      ? colors.violet[200]
      : isDark ? colors.warmGray[900] : colors.coolGray[50],
    [lastActivity?.path, isDark, colors]
  );

  return !isLoaded
    ? null
    : (
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={isDark ? 'light-content' : 'dark-content'}
          backgroundColor={statusBarBackgroundColor}
        />
        {children}
      </ThemeProvider>
    );
};
