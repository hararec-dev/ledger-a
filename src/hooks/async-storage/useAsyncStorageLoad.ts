import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { useBiometricStore, useCurrentStatusAppStore, useThemeStore } from '../../hooks';

export const useAsyncStorageLoad = () => {
    const colorScheme = useColorScheme();
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
        lastActivity,
        legalConditionsAreAccepted,
        loadStoredData,
        pinEnabled,
        setHasOnboarded,
        setLastActivity,
        setLegalConditionsAreAccepted,
        setPinEnabled,
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
    }, [loadStoredData]);

    useEffect(() => {
        const initTheme = async () => {
            await loadTheme();
            setIsThemeLoaded(true);
        };

        initTheme();
    }, [colorScheme, loadTheme]);

    useEffect(() => {
        if (hasOnboarded !== null) {
            setHasOnboarded(hasOnboarded);
        }
    }, [hasOnboarded, setHasOnboarded]);

    useEffect(() => {
        if (userCurrency !== null) {
            setUserCurrency(userCurrency);
        }
    }, [userCurrency, setUserCurrency]);

    useEffect(() => {
        setLegalConditionsAreAccepted(legalConditionsAreAccepted);
    }, [legalConditionsAreAccepted, setLegalConditionsAreAccepted]);

    useEffect(() => {
        if (lastActivity !== null) {
            setLastActivity(lastActivity);
        }
    }, [lastActivity, setLastActivity]);

    useEffect(() => {
        if (pinEnabled !== null) {
            setPinEnabled(pinEnabled);
        }
    }, [pinEnabled, setPinEnabled]);

    useEffect(() => {
        setAllowBiometricAuth(allowBiometricAuth);
    }, [allowBiometricAuth, setAllowBiometricAuth]);

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
