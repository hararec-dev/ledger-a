import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colorPalette, rneuiDarkColors, rneuiLightColors } from '../../config';
import type { ThemeColor, ThemeState } from '../../types';

const THEME_STORAGE_KEY = 'app-theme';

export const useThemeStore = create<ThemeState>((set) => ({
    currentTheme: 'light',
    isDark: false,
    colors: colorPalette,
    rneuiDarkColors,
    rneuiLightColors,
    loadTheme: async () => {
        try {
            const storedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
            if (storedTheme === 'light' || storedTheme === 'dark') {
                set({
                    currentTheme: storedTheme,
                    isDark: storedTheme === 'dark',
                });
            } else {
                set({
                    currentTheme: 'light',
                    isDark: false,
                });
            }
        } catch (error) {
            set({
                currentTheme: 'dark',
                isDark: true,
            });
        }
    },
    setTheme: async (theme: ThemeColor) => {
        try {
            await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);
            set({
                currentTheme: theme,
                isDark: theme === 'dark',
            });
        } catch (error) {
            set({
                currentTheme: 'dark',
                isDark: true,
            });
        }
    },
}));
