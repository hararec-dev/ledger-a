import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { CURRENT_STATUS_APP_KEYS } from '../../config';
import type { Currency, CurrentStatusAppState, LastActivity } from '../../types';


export const useCurrentStatusAppStore = create<CurrentStatusAppState>((set, get) => ({
    hasOnboarded: null,
    biometricEnabled: null,
    userCurrency: null,
    pinCode: null,
    lastActivity: null,
    loadStoredData: async () => {
        try {
            const storedData = await AsyncStorage.multiGet([
                CURRENT_STATUS_APP_KEYS.HAS_ONBOARDED,
                CURRENT_STATUS_APP_KEYS.BIOMETRIC_ENABLED,
                CURRENT_STATUS_APP_KEYS.USER_CURRENCY,
                CURRENT_STATUS_APP_KEYS.LAST_ACTIVITY,
            ]);
            const [onboarded, biometric, userCurrency, lastActivity] = storedData;
            set({
                hasOnboarded: onboarded[1] === 'true',
                biometricEnabled: biometric[1] === 'true',
                userCurrency: userCurrency[1] ? userCurrency[1] as Currency : null,
                lastActivity: lastActivity[1] ? JSON.parse(lastActivity[1]) as LastActivity : null,
            });
        } catch (error) { }
    },
    setHasOnboarded: async (value: boolean) => {
        try {
            await AsyncStorage.setItem(CURRENT_STATUS_APP_KEYS.HAS_ONBOARDED, String(value));
            set({ hasOnboarded: value });
        } catch (error) { }
    },
    setUserCurrency: async (currency: Currency) => {
        try {
            await AsyncStorage.setItem(CURRENT_STATUS_APP_KEYS.USER_CURRENCY, currency);
            set({ userCurrency: currency });
        } catch (error) { }
    },
    setBiometricEnabled: async (enabled: boolean) => {
        try {
            await AsyncStorage.setItem(CURRENT_STATUS_APP_KEYS.BIOMETRIC_ENABLED, String(enabled));
            set({ biometricEnabled: enabled });
        } catch (error) { }
    },
    setLastActivity: async (activity: LastActivity) => {
        try {
            await AsyncStorage.setItem(CURRENT_STATUS_APP_KEYS.LAST_ACTIVITY, JSON.stringify(activity));
            set({ lastActivity: activity });
        } catch (error) { }
    },
}));
