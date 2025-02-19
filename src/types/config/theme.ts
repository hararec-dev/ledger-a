export interface ThemeColors {
    dominant: string;
    complementary: string;
    accent: string;
    background: string;
    foreground: string;
}

interface ColorShades {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}

export interface FullColorPallete {
    blueGray: ColorShades;
    coolGray: ColorShades;
    gray: ColorShades;
    trueGray: ColorShades;
    warmGray: ColorShades;
    red: ColorShades;
    orange: ColorShades;
    amber: ColorShades;
    yellow: ColorShades;
    lime: ColorShades;
    green: ColorShades;
    emerald: ColorShades;
}