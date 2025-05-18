export type TransactionType = 'income' | 'expense' | 'transfer';

export interface Transaction {
    id: string;
    date: string; // formato 'YYYY-MM-DD'
    type: TransactionType;
    amount: number;
    description: string;
    category: string;
    method: string;
}

export interface TransactionCalendarProps {
    transactions?: Transaction[];
}
