import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colorPalette, rneuiDarkColors, rneuiLightColors, appFonts } from '../../config';
import type { ThemeColor, ThemeState } from '../../types';
import { getAllColorValues, removeShade50FromPalette } from '../../helpers';

const THEME_STORAGE_KEY = 'app-theme';

export const useThemeStore = create<ThemeState>((set, get) => ({
    colors: colorPalette,
    currentTheme: 'light',
    fonts: appFonts,
    isDark: false,
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
    getAllColors: () => {
        const { colors } = get();
        const colorsWithout50And100 = removeShade50FromPalette(colors);
        return getAllColorValues(colorsWithout50And100);
    },
}));
