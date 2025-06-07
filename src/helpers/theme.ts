import type { FullColorPallete, FullColorPalleteWithout50And100 } from '@types';

export const removeShade50FromPalette = (palette: FullColorPallete): FullColorPalleteWithout50And100 => {
    const newPalette = {} as FullColorPalleteWithout50And100;

    for (const [key, colorShade] of Object.entries(palette)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { 50: _, 100: __, ...colorShadeWithout50And100 } = colorShade;
        newPalette[key as keyof FullColorPallete] = colorShadeWithout50And100;
    }

    return newPalette;
};

export const getAllColorValues = (palette: FullColorPalleteWithout50And100): string[] => {
    return Object.values(palette).flatMap(colorShade =>
        Object.values(colorShade)
    );
};
