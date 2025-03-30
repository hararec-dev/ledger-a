import { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReportScreen, BudgetScreen, SearchScreen } from '../screens';
import type { ReportsStackParamList, ReportsStackRoute } from '../types';

const ReportsStack = createStackNavigator<ReportsStackParamList>();

export const ReportsStackNavigation: React.FC = () => {
    const stackRoutes = useMemo<ReportsStackRoute[]>(() => ([
        {
            name: 'Reports',
            component: ReportScreen,
            options: {
                title: 'Reportes',
                headerShown: true,
            },
        },
        {
            name: 'Budget',
            component: BudgetScreen,
            options: {
                title: 'Presupuestos',
                headerShown: true,
            },
        },
        {
            name: 'Search',
            component: SearchScreen,
            options: {
                title: 'Búsqueda Avanzada',
                headerShown: true,
            },
        },
    ]), []);

    return (
        <ReportsStack.Navigator>
            {stackRoutes.map((route) => (
                <ReportsStack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                        ...route.options,
                        headerShown: false,
                    }}
                />
            ))}
        </ReportsStack.Navigator>
    );
};
