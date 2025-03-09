import type{ Currency } from "../config";

export interface LastActivity {
    type: 'transaction' | 'budget' | 'report' | 'settings';
    timestamp: number;
    details?: string;
}

export interface CurrentStatusAppState {
    hasOnboarded: boolean | null;
    biometricEnabled: boolean | null;
    userCurrency: Currency | null;
    lastActivity: LastActivity | null;
    loadStoredData: () => Promise<void>;
    setHasOnboarded: (value: boolean) => Promise<void>;
    setUserCurrency: (currency: Currency) => Promise<void>;
    setBiometricEnabled: (enabled: boolean) => Promise<void>;
    setLastActivity: (activity: LastActivity) => Promise<void>;
}