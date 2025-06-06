import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { CURRENT_STATUS_APP_KEYS } from '@config';
import type { Currency, CurrentStatusAppState, LastActivity } from '@types';


export const useCurrentStatusAppStore = create<CurrentStatusAppState>((set) => ({
    hasOnboarded: null,
    isBalanceVisibleOnDashboard: null,
    isLoadingData: null,
    isLoadingLastActivity: null,
    lastActivity: null,
    legalConditionsAreAccepted: false,
    pinEnabled: null,
    selectedColor: null,
    userCurrency: null,
    loadStoredData: async () => {
        set({ isLoadingData: true });
        try {
            const storedData = await AsyncStorage.multiGet([
                CURRENT_STATUS_APP_KEYS.HAS_ONBOARDED,
                CURRENT_STATUS_APP_KEYS.LAST_ACTIVITY,
                CURRENT_STATUS_APP_KEYS.LEGAL_CONDITIONS,
                CURRENT_STATUS_APP_KEYS.PIN_ENABLED,
                CURRENT_STATUS_APP_KEYS.USER_CURRENCY,
                CURRENT_STATUS_APP_KEYS.IS_BALANCE_VISIBLE_ON_DASHBOARD,
                CURRENT_STATUS_APP_KEYS.SELECTED_COLOR,
            ]);
            const [
                onboarded,
                lastActivity,
                legal,
                pin,
                userCurrency,
                balanceVisible,
                selectedColor,
            ] = storedData;
            set({
                hasOnboarded: onboarded[1] === 'true',
                lastActivity: lastActivity[1] ? JSON.parse(lastActivity[1]) as LastActivity : null,
                legalConditionsAreAccepted: legal[1] === 'true',
                pinEnabled: pin[1] === 'true',
                userCurrency: userCurrency[1] ? userCurrency[1] as Currency : null,
                isBalanceVisibleOnDashboard: balanceVisible[1] === 'true',
                selectedColor: selectedColor[1] || null,
            });
        } catch (error) { }
        finally {
            set({ isLoadingData: false });
        }
    },
    setHasOnboarded: async (value: boolean) => {
        set({ isLoadingData: true });
        try {
            await AsyncStorage.setItem(CURRENT_STATUS_APP_KEYS.HAS_ONBOARDED, String(value));
            set({ hasOnboarded: value });
        } catch (error) { }
        finally {
            set({ isLoadingData: false });
        }
    },
    setUserCurrency: async (currency: Currency) => {
        set({ isLoadingData: true });
        try {
            await AsyncStorage.setItem(CURRENT_STATUS_APP_KEYS.USER_CURRENCY, currency);
            set({ userCurrency: currency });
        } catch (error) { }
        finally {
            set({ isLoadingData: false });
        }
    },
    setLegalConditionsAreAccepted: async (isAccepted: boolean) => {
        set({ isLoadingData: true });
        try {
            await AsyncStorage.setItem(CURRENT_STATUS_APP_KEYS.LEGAL_CONDITIONS, String(isAccepted));
            set({ legalConditionsAreAccepted: isAccepted });
        } catch (error) { }
        finally {
            set({ isLoadingData: false });
        }
    },
    setLastActivity: async (activity: LastActivity) => {
        set({ isLoadingLastActivity: true });
        try {
            await AsyncStorage.setItem(CURRENT_STATUS_APP_KEYS.LAST_ACTIVITY, JSON.stringify(activity));
            set({ lastActivity: activity });
        } catch (error) { }
        finally {
            set({ isLoadingLastActivity: false });
        }
    },
    setPinEnabled: async (enabled: boolean) => {
        set({ isLoadingData: true });
        try {
            await AsyncStorage.setItem(CURRENT_STATUS_APP_KEYS.PIN_ENABLED, String(enabled));
            set({ pinEnabled: enabled });
        } catch (error) { }
        finally {
            set({ isLoadingData: false });
        }
    },
    setIsBalanceVisibleOnDashboard: async (isVisible: boolean) => {
        set({ isLoadingData: true });
        try {
            await AsyncStorage.setItem(
                CURRENT_STATUS_APP_KEYS.IS_BALANCE_VISIBLE_ON_DASHBOARD, String(isVisible)
            );
            set({ isBalanceVisibleOnDashboard: isVisible });
        } catch (error) { }
        finally {
            set({ isLoadingData: false });
        }
    },
    setSelectedColor: async (color: string) => {
        set({ isLoadingData: true });
        try {
            await AsyncStorage.setItem(CURRENT_STATUS_APP_KEYS.SELECTED_COLOR, color);
            set({ selectedColor: color });
        } catch (error) { }
        finally {
            set({ isLoadingData: false });
        }
    },
}));
