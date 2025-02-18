import type { StackNavigationOptions } from "@react-navigation/stack";

export type TransactionsStackParamList = {
    TransactionList: undefined;
    AddTransaction: undefined;
    TransactionDetails: {
        transactionId: string;
    };
};

export interface TransactionsStackRoute {
    name: keyof TransactionsStackParamList;
    component: React.ComponentType<any>;
    options: StackNavigationOptions;
}
