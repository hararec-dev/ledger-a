import type { Currency } from '../config';
import type {
    AccountsStackParamList,
    DashboardStackParamList,
    MainBottomTabParamList,
    ReportsStackParamList,
    RootStackParamList,
    SettingsStackParamList,
    TransactionsStackParamList,
} from '../navigation';

export type AppRouteName =
    | keyof AccountsStackParamList
    | keyof DashboardStackParamList
    | keyof MainBottomTabParamList
    | keyof ReportsStackParamList
    | keyof RootStackParamList
    | keyof SettingsStackParamList
    | keyof TransactionsStackParamList;

export interface LastActivity {
    path: AppRouteName;
    timestamp: number;
    params?: { [key: string]: string | number | boolean };
    details?: any;
}

export interface CurrentStatusAppState {
    biometricEnabled: boolean | null;
    hasOnboarded: boolean | null;
    lastActivity: LastActivity | null;
    legalConditionsAreAccepted: boolean;
    pinEnabled: boolean | null;
    userCurrency: Currency | null;
    loadStoredData: () => Promise<void>;
    setBiometricEnabled: (enabled: boolean) => Promise<void>;
    setHasOnboarded: (value: boolean) => Promise<void>;
    setLastActivity: (activity: LastActivity) => Promise<void>;
    setLegalConditionsAreAccepted: (activity: boolean) => Promise<void>;
    setPinEnabled: (enabled: boolean) => Promise<void>;
    setUserCurrency: (currency: Currency) => Promise<void>;
}
