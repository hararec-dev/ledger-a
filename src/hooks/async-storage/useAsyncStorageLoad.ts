import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { useCurrentStatusAppStore, useThemeStore } from "../store";

export const useAsyncStorageLoad = () => {
    const colorScheme = useColorScheme();
    const { loadTheme, currentTheme, isDark, colors } = useThemeStore();
    const [isThemeLoaded, setIsThemeLoaded] = useState(false);
    const [isStoredDataLoaded, setIsStoredDataLoaded] = useState(false);
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
    }, [biometricEnabled, hasOnboarded, lastActivity, pinCode, userCurrency]);

    useEffect(() => {
        const initTheme = async () => {
            await loadTheme();
            setIsThemeLoaded(true);
        };

        initTheme();
    }, [colorScheme]);

    return {
        isLoaded: isThemeLoaded && isStoredDataLoaded,
        isDark,
        colors,
        currentTheme,
    };
};
