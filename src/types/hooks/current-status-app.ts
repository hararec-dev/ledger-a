import type { Currency } from '../config';
import type {
    AccountsStackParamList,
    DashboardStackParamList,
    MainBottomTabParamList,
    ChartsStackParamList,
    RootStackParamList,
    SettingsStackParamList,
    RootTransactionsStackParamList,
} from '../navigation';

export type AppRouteName =
    | keyof AccountsStackParamList
    | keyof DashboardStackParamList
    | keyof MainBottomTabParamList
    | keyof ChartsStackParamList
    | keyof RootStackParamList
    | keyof SettingsStackParamList
    | keyof RootTransactionsStackParamList;

export interface LastActivityProps {
    path: AppRouteName;
    params?: { [key: string]: string | number | boolean };
    details?: any;
}

export interface LastActivity extends LastActivityProps {
    timestamp: number;
}

export interface CurrentStatusAppState {
    hasOnboarded: boolean | null;
    isLoadingData: boolean | null;
    isLoadingLastActivity: boolean | null;
    lastActivity: LastActivity | null;
    legalConditionsAreAccepted: boolean;
    pinEnabled: boolean | null;
    userCurrency: Currency | null;
    isBalanceVisibleOnDashboard: boolean | null;
    selectedColor: string | null;
    loadStoredData: () => Promise<void>;
    setHasOnboarded: (value: boolean) => Promise<void>;
    setLastActivity: (activity: LastActivity) => Promise<void>;
    setLegalConditionsAreAccepted: (activity: boolean) => Promise<void>;
    setPinEnabled: (enabled: boolean) => Promise<void>;
    setUserCurrency: (currency: Currency) => Promise<void>;
    setIsBalanceVisibleOnDashboard: (isVisible: boolean) => Promise<void>;
    setSelectedColor: (color: string) => Promise<void>;
}
