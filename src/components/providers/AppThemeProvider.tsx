import { useEffect, useMemo, useState } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';
import { lightColors, createTheme, ThemeProvider, darkColors } from '@rneui/themed';
import { useThemeStore } from '../../hooks';
import type { AppThemeProviderProps } from '../../types';


export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const colorScheme = useColorScheme();
  const { loadTheme, currentTheme, isDark, colors } = useThemeStore();
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    const initTheme = async () => {
      await loadTheme();
      setIsThemeLoaded(true);
    };

    initTheme();
  }, [colorScheme]);

  const theme = useMemo(() => createTheme({
    lightColors: {
      ...Platform.select({
        default: lightColors.platform.android,
        ios: lightColors.platform.ios,
      }),
    },
    darkColors: {
      ...Platform.select({
        default: darkColors.platform.android,
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

  return !isThemeLoaded
    ? null
    : (
      <ThemeProvider theme={theme}>
        <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.cyan[500]}
      />
        {children}
      </ThemeProvider>
    );
};