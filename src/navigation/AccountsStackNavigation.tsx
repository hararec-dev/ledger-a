import { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountDetailsScreen, AccountsScreen, TransferScreen } from '../screens';
import type { AccountsStackParamList, AccountsStackRoute } from '../types';

const AccountsStack = createStackNavigator<AccountsStackParamList>();

export const AccountsStackNavigation: React.FC = () => {
    const stackRoutes = useMemo<AccountsStackRoute[]>(() => ([
        {
            name: 'Accounts',
            component: AccountsScreen,
            options: {
                title: 'Cuentas',
                headerShown: true,
            },
        },
        {
            name: 'AccountDetails',
            component: AccountDetailsScreen,
            options: {
                title: 'Detalle de Cuenta',
                headerShown: true,
            },
        },
        {
            name: 'Transfer',
            component: TransferScreen,
            options: {
                title: 'Transferencia',
                headerShown: true,
            },
        },
    ]), []);

    return (
        <AccountsStack.Navigator>
            {stackRoutes.map((route) => (
                <AccountsStack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                        ...route.options,
                        headerShown: false,
                    }}
                />
            ))}
        </AccountsStack.Navigator>
    );
};
