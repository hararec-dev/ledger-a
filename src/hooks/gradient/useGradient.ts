import { useMemo } from 'react';
import { useThemeStore } from '../store';

export const useGradient = () => {
    const { colors, isDark } = useThemeStore();
    const gradientDark = useMemo<string[]>(() => [
        colors.yellow[300],
        colors.orange[400],
        colors.pink[400],
    ], [colors]);
    const gradientLight = useMemo<string[]>(() => [
        colors.blue[500],
        colors.purple[500],
        colors.rose[500],
    ], [colors]);
    const themeGradient = useMemo<string[]>(() => isDark
        ? gradientDark
        : gradientLight,
        [isDark, gradientDark, gradientLight]);

    return {
        gradientDark,
        gradientLight,
        themeGradient,
    };
};
