import type { AppFonts, FullColorPallete, RneuiPlatformColors } from '../config';

export type ThemeColor = 'light' | 'dark';

export type ThemeState = {
    currentTheme: ThemeColor;
    isDark: boolean;
    colors: FullColorPallete;
    fonts: AppFonts;
    rneuiLightColors: RneuiPlatformColors;
    rneuiDarkColors: RneuiPlatformColors;
    loadTheme: () => Promise<void>;
    setTheme: (theme: ThemeColor) => Promise<void>;
    getAllColors: () => string[];
};
