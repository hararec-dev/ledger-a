import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { useCurrentStatusAppStore, useThemeStore } from '../../hooks';

export const useAsyncStorageLoad = () => {
    const colorScheme = useColorScheme();
    const [isThemeLoaded, setIsThemeLoaded] = useState(false);
    const [isStoredDataLoaded, setIsStoredDataLoaded] = useState(false);
    const {
        loadTheme,
        currentTheme,
        isDark,
        colors,
        rneuiDarkColors,
        rneuiLightColors,
    } = useThemeStore();
    const {
        loadStoredData,
        biometricEnabled,
        hasOnboarded,
        lastActivity,
        pinCode,
        userCurrency,
    } = useCurrentStatusAppStore();

    useEffect(() => {
        const initStoredData = async () => {
            await loadStoredData();
            setIsStoredDataLoaded(true);
        };

        initStoredData();
    }, [
        biometricEnabled,
        hasOnboarded,
        lastActivity,
        pinCode,
        userCurrency,
        loadStoredData,
    ]);

    useEffect(() => {
        const initTheme = async () => {
            await loadTheme();
            setIsThemeLoaded(true);
        };

        initTheme();
    }, [colorScheme, loadTheme]);

    return {
        isLoaded: isThemeLoaded && isStoredDataLoaded,
        isDark,
        colors,
        currentTheme,
        rneuiDarkColors,
        rneuiLightColors,
    };
};
