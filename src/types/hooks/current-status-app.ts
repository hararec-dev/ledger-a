import type{ Currency } from '../config';

export interface LastActivity {
    type: 'transaction' | 'budget' | 'report' | 'settings';
    timestamp: number;
    details?: string;
}

export interface CurrentStatusAppState {
    biometricEnabled: boolean | null;
    hasOnboarded: boolean | null;
    lastActivity: LastActivity | null;
    legalConditionsAreAccepted: boolean;
    pinCode: string | null;
    userCurrency: Currency | null;
    loadStoredData: () => Promise<void>;
    setBiometricEnabled: (enabled: boolean) => Promise<void>;
    setHasOnboarded: (value: boolean) => Promise<void>;
    setLastActivity: (activity: LastActivity) => Promise<void>;
    setLegalConditionsAreAccepted: (activity: boolean) => Promise<void>;
    setUserCurrency: (currency: Currency) => Promise<void>;
}
