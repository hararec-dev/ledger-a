import type { Transaction } from '@types';

export const getMarkedDates = (transactions: Transaction[]): Record<string, any> => {
    const marked: Record<string, any> = {};
    transactions.forEach(tx => {
        marked[tx.date] = {
            marked: true,
            dotColor: tx.type === 'income' ? '#2196f3' : '#f44336',
        };
    });
    return marked;
};

export const calculateTransactionSummary = (transactions: Transaction[]) => {
    const income = transactions
        .filter(tx => tx.type === 'income')
        .reduce((sum, tx) => sum + tx.amount, 0);

    const expenses = transactions
        .filter(tx => tx.type === 'expense')
        .reduce((sum, tx) => sum + tx.amount, 0);

    const balance = income - expenses;

    return { income, expenses, balance };
};
