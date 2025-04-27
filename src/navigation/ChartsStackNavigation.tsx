import { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChartsScreen, BudgetScreen, SearchScreen } from '../screens';
import type { ChartsStackParamList, ChartsStackRoute } from '../types';

const ChartsStack = createStackNavigator<ChartsStackParamList>();

export const ChartsStackNavigation: React.FC = () => {
    const stackRoutes = useMemo<ChartsStackRoute[]>(() => ([
        {
            name: 'Charts',
            component: ChartsScreen,
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
        <ChartsStack.Navigator>
            {stackRoutes.map((route) => (
                <ChartsStack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                        ...route.options,
                        headerShown: false,
                    }}
                />
            ))}
        </ChartsStack.Navigator>
    );
};
