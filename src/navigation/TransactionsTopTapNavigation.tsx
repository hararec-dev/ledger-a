import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    DailyTransactions,
    MonthlyTransactions,
    SpeedDialButton,
    TotalTransactions,
    TransactionCalendar,
} from '../components';
import type { TransactionsTabParamList, TransactionsTabRoute } from '../types';

const Tab = createMaterialTopTabNavigator<TransactionsTabParamList>();

export const TransactionsTopTapNavigation: React.FC = () => {
    const [open, setOpen] = useState(false);

    const tabRoutes = useMemo<TransactionsTabRoute[]>(() => ([
        {
            name: 'Daily',
            component: DailyTransactions,
            options: {
                title: 'Diario',
            },
        },
        {
            name: 'Calendar',
            component: TransactionCalendar,
            options: {
                title: 'Calendario',
            },
        },
        {
            name: 'Monthly',
            component: MonthlyTransactions,
            options: {
                title: 'Mensual',
            },
        },
        {
            name: 'Total',
            component: TotalTransactions,
            options: {
                title: 'Total',
            },
        },
    ]), []);

    return (
        <View style={styles.container}>
            <Tab.Navigator>
                {tabRoutes.map((route) => (
                    <Tab.Screen
                        key={route.name}
                        name={route.name}
                        component={route.component}
                        options={route.options}
                    />
                ))}
            </Tab.Navigator>
            <SpeedDialButton
                isOpen={open}
                toggleOpen={() => setOpen(!open)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
