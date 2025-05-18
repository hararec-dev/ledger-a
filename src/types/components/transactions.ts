import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type TransactionType = 'income' | 'expense' | 'transfer';

export interface SpeedDialButtonProps {
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
}

export type SpeedDialButtonActions = Array<{
    icon: string;
    title: string;
    onPress: () => void;
}>;

export interface SpeedDialAction {
    icon: string;
    title: string;
    iconType: 'material-community' | 'ionicon';
    onPress: () => void;
}

export interface Transaction {
    id: string;
    date: string;
    type: TransactionType;
    amount: number;
    description: string;
    category: string;
    method: string;
}

export interface TransactionCalendarProps {
    transactions?: Transaction[];
}

export interface TransactionDetailsListProps {
    transactions: Transaction[];
    selectedDate: string;
}

export interface TransactionSummaryHeaderProps {
    income: number;
    expenses: number;
    balance: number;
}

export interface WeekTransaction {
    period: string;
    income: number;
    expense: number;
    balance?: number;
    highlighted?: boolean;
}

export interface MonthSection {
    month: string;
    range: string;
    income: number;
    expense: number;
    weeks: WeekTransaction[];
}
