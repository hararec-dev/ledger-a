export interface DayTransactionItem {
    id: string;
    description: string;
    type: 'income' | 'expense' | 'transfer';
    amount: number;
    category: string;
    method: string;
}

export interface DayTransaction {
    date: string;
    income: number;
    expense: number;
    transactions: DayTransactionItem[];
}