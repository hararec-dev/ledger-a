import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationOptions } from '@react-navigation/stack';

export type TransactionsStackParamList = {
    TransactionList: undefined;
    AddTransaction: undefined;
    TransactionDetails: {
        transactionId: string;
    };
};

export type TransactionDetailsProps = {
    route: RouteProp<TransactionsStackParamList, 'TransactionDetails'>;
};

export interface TransactionsStackRoute {
    name: keyof TransactionsStackParamList;
    component: React.ComponentType<any>;
    options: StackNavigationOptions;
}
