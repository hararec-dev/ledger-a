export interface ColorShades {
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

export type ColorShadesWithout50And100 = Omit<ColorShades, '50' | '100'>;

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
    teal: ColorShades;
    cyan: ColorShades;
    sky: ColorShades;
    blue: ColorShades;
    indigo: ColorShades;
    violet: ColorShades;
    purple: ColorShades;
    fuchsia: ColorShades;
    pink: ColorShades;
    rose: ColorShades;
}

export type FullColorPalleteWithout50And100 = {
    [K in keyof FullColorPallete]: ColorShadesWithout50And100;
};

export interface RneuiPlatformColors {
    primary: string;
    secondary: string;
    grey: string;
    searchBg: string;
    success: string;
    error: string;
    warning: string;
}

export interface AppFonts {
    quicksand: {
        regular: string;
        light: string;
        medium: string;
        bold: string;
    };
    nunito: {
        regular: string;
        medium: string;
        bold: string;
    };
    pacifico: {
        regular: string;
    };
}
