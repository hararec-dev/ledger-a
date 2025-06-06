import { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransactionsTopTapNavigation } from '@navigation/TransactionsTopTapNavigation';
import { AddTransactionScreen, TransactionDetailsScreen } from '@screens';
import type { RootTransactionsStackParamList, RootTransactionsStackRoute } from '@types';

const RootTransactionsStack = createStackNavigator<RootTransactionsStackParamList>();

export const RootTransactionsStackNavigation: React.FC = () => {
    const stackRoutes = useMemo<RootTransactionsStackRoute[]>(() => ([
        {
            name: 'TransactionList',
            component: TransactionsTopTapNavigation,
            options: {
                title: 'Transacciones',
                headerShown: true,
            },
        },
        {
            name: 'AddTransaction',
            component: AddTransactionScreen,
            options: {
                title: 'Nueva Transacción',
                headerShown: true,
            },
        },
        {
            name: 'TransactionDetails',
            component: TransactionDetailsScreen,
            options: {
                title: 'Detalle de Transacción',
                headerShown: true,
            },
        },
    ]), []);

    return (
        <RootTransactionsStack.Navigator>
            {stackRoutes.map((route) => (
                <RootTransactionsStack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                        ...route.options,
                        headerShown: false,
                    }}
                />
            ))}
        </RootTransactionsStack.Navigator>
    );
};
