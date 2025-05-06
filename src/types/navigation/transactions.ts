import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationOptions } from '@react-navigation/stack';
import type { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

export type RootTransactionsStackParamList = {
    TransactionList: undefined;
    AddTransaction: undefined;
    TransactionDetails: {
        transactionId: string;
    };
};

export type RootTransactionDetailsProps = {
    route: RouteProp<RootTransactionsStackParamList, 'TransactionDetails'>;
};

export interface RootTransactionsStackRoute {
    name: keyof RootTransactionsStackParamList;
    component: React.ComponentType<any>;
    options: StackNavigationOptions;
}

// Nuevos tipos para la navegación de pestañas
export type TransactionsTabParamList = {
    Daily: undefined;
    Calendar: undefined;
    Monthly: undefined;
    Total: undefined;
};

export interface TransactionsTabRoute {
    name: keyof TransactionsTabParamList;
    component: React.ComponentType<any>;
    options: MaterialTopTabNavigationOptions;
}
