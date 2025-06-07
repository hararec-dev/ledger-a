import { useEffect, useState } from 'react';
import { useBiometricStore, useCurrentStatusAppStore, useThemeStore } from '@hooks';

export const useAsyncStorageLoad = () => {
    const [isThemeLoaded, setIsThemeLoaded] = useState(false);
    const [isStoredDataLoaded, setIsStoredDataLoaded] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const {
        loadTheme,
        currentTheme,
        isDark,
        colors,
        rneuiDarkColors,
        rneuiLightColors,
    } = useThemeStore();
    const {
        hasOnboarded,
        isBalanceVisibleOnDashboard,
        lastActivity,
        legalConditionsAreAccepted,
        loadStoredData,
        pinEnabled,
        selectedColor,
        setHasOnboarded,
        setIsBalanceVisibleOnDashboard,
        setLastActivity,
        setLegalConditionsAreAccepted,
        setPinEnabled,
        setSelectedColor,
        setUserCurrency,
        userCurrency,
    } = useCurrentStatusAppStore();
    const {
        allowBiometricAuth,
        setAllowBiometricAuth,
    } = useBiometricStore();

    useEffect(() => {
        const initStoredData = async () => {
            await loadStoredData();
            setIsStoredDataLoaded(true);
        };

        initStoredData();
    }, []);

    useEffect(() => {
        const initTheme = async () => {
            await loadTheme();
            setIsThemeLoaded(true);
        };

        initTheme();
    }, []);

    useEffect(() => {
        if (hasOnboarded !== null) {
            setHasOnboarded(hasOnboarded);
        }
    }, []);

    useEffect(() => {
        if (userCurrency !== null) {
            setUserCurrency(userCurrency);
        }
    }, []);

    useEffect(() => {
        setLegalConditionsAreAccepted(legalConditionsAreAccepted);
    }, []);

    useEffect(() => {
        if (lastActivity !== null) {
            setLastActivity(lastActivity);
        }
    }, []);

    useEffect(() => {
        if (isBalanceVisibleOnDashboard !== null) {
            setIsBalanceVisibleOnDashboard(isBalanceVisibleOnDashboard);
        }
    }, []);

    useEffect(() => {
        if (pinEnabled !== null) {
            setPinEnabled(pinEnabled);
        }
    }, []);

    useEffect(() => {
        setAllowBiometricAuth(allowBiometricAuth);
    }, []);

    useEffect(() => {
        if (selectedColor !== null) {
            setSelectedColor(selectedColor);
        }
    }, []);

    useEffect(() => {
        if (isThemeLoaded && isStoredDataLoaded) {
            setIsLoaded(true);
        }
    }, [isThemeLoaded, isStoredDataLoaded]);

    return {
        colors,
        currentTheme,
        isDark,
        isLoaded,
        lastActivity,
        rneuiDarkColors,
        rneuiLightColors,
    };
};
