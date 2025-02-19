import type { ThemeColors } from "../config";

export type ThemeColor = 'light' | 'dark';

export type ThemeState = {
    currentTheme: ThemeColor;
    isDark: boolean;
    colors: ThemeColors;
    loadTheme: () => Promise<void>;
    setTheme: (theme: ThemeColor) => Promise<void>;
};

export interface UseThemeReturn {
    currentTheme: ThemeColor;
    isDark: boolean;
    colors: ThemeColors;
    setTheme: (theme: ThemeColor) => Promise<void>;
}