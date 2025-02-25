import type { FullColorPallete } from "../config";

export type ThemeColor = 'light' | 'dark';

export type ThemeState = {
    currentTheme: ThemeColor;
    isDark: boolean;
    colors: FullColorPallete;
    loadTheme: () => Promise<void>;
    setTheme: (theme: ThemeColor) => Promise<void>;
};

export interface UseThemeReturn {
    currentTheme: ThemeColor;
    isDark: boolean;
    colors: FullColorPallete;
    setTheme: (theme: ThemeColor) => Promise<void>;
}