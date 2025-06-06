import { useMemo } from 'react';
import { useThemeStore } from '@hooks/store';

export const useGradient = () => {
    const { colors, isDark } = useThemeStore();

    const gradientDark = useMemo<string[]>(() => [
        colors.cyan[500],
        colors.blue[500],
        colors.violet[500],
        colors.fuchsia[500],
    ], [colors]);

    const gradientLight = useMemo<string[]>(() => [
        colors.blue[500],
        colors.violet[500],
        colors.fuchsia[500],
        colors.rose[500],
    ], [colors]);

    const blackOrWhiteGradient = useMemo<string[]>(() => isDark ?
        [
            colors.cyan[200],
            colors.blue[200],
            colors.violet[200],
            colors.fuchsia[200],
        ]
        : [
            colors.blue[500],
            colors.violet[400],
            colors.fuchsia[400],
            colors.rose[200],
        ],
        [isDark, colors]);

    const themeGradient = useMemo<string[]>(() => isDark
        ? gradientDark
        : gradientLight,
        [isDark, gradientDark, gradientLight]);

    return {
        gradientDark,
        gradientLight,
        themeGradient,
        blackOrWhiteGradient,
    };
};
