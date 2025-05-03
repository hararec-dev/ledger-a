import type { IconType } from './icon';

export interface QuickAction {
    iconName: string;
    label: string;
    iconType: IconType;
}

export interface BalanceCardProps {
    balance: string;
    percentChange: string;
    isPositive: boolean;
}

export interface DashboardTransaction {
    name: string;
    symbol: string;
    icon: {
        name: string;
        iconType: IconType;
    };
    color: string;
    value: string;
    amount: string;
    chartColor: string;
    chartData: number[];
}

export interface DashboardTransactionItemProps {
    transaction: DashboardTransaction;
}

export interface DashboardTransactionsListProps {
    transactions: DashboardTransaction[];
}
