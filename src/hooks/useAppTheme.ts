import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useThemeStore } from './store';
import type { UseThemeReturn } from '../types';

export const useAppTheme = (): UseThemeReturn => {
    const colorScheme = useColorScheme();
    const { currentTheme, isDark, colors, loadTheme, setTheme } = useThemeStore();

    useEffect(() => {
        loadTheme();
    }, [colorScheme]);

    return {
        currentTheme,
        isDark,
        colors,
        setTheme,
    };
};