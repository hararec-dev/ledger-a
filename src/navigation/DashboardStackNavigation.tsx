import { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen, QuickAddTransactionScreen } from '@screens';
import type { DashboardStackParamList, DashboardStackRoute } from '@types';

const DashboardStack = createStackNavigator<DashboardStackParamList>();

export const DashboardStackNavigation: React.FC = () => {
    const stackRoutes = useMemo<DashboardStackRoute[]>(() => ([
        {
            name: 'Dashboard',
            component: DashboardScreen,
            options: {
                title: 'Inicio',
                headerShown: true,
            },
        },
        {
            name: 'QuickAdd',
            component: QuickAddTransactionScreen,
            options: {
                title: 'Agregar Transacción',
                presentation: 'modal',
                headerShown: true,
            },
        },
    ]),[]);

    return (
        <DashboardStack.Navigator>
            {stackRoutes.map((route) => (
                <DashboardStack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                        ...route.options,
                        headerShown: false,
                    }}
                />
            ))}
        </DashboardStack.Navigator>
    );
};
