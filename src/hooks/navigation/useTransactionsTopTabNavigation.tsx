import { useCallback, useMemo } from 'react';
import { Text, TextStyle } from 'react-native';
import {
    Icon,
    TransactionCalendar,
    DailyTransactions,
    MonthlyTransactions,
    TransactionsSearch
} from '../../components';
import { useGradient, useStyles } from '../../hooks';
import type { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import type { TransactionsTabRoute } from '../../types';


export const useTransactionsTopTabNavigation = (): {
    screenOptions: (props: { theme: ReactNavigation.Theme }) => MaterialTopTabNavigationOptions;
    tabRoutes: TransactionsTabRoute[];
} => {
    const { themeGradient } = useGradient();
    const screenOptions = useCallback((props: {
        theme: ReactNavigation.Theme;
    }): MaterialTopTabNavigationOptions => ({
        tabBarStyle: {
            backgroundColor: props.theme.colors.card,
        },
        tabBarLabelStyle: {
            color: props.theme.colors.border,
            fontFamily: props.theme.fonts.bold.fontFamily,
        },
        tabBarIndicatorStyle: { backgroundColor: props.theme.colors.text },
    }), []);
    const styles = useStyles(({ fonts }) => ({
        tabBarLabel: {
            fontFamily: fonts.quicksand.bold,
        },
    }));
    const getTabBarLabelStyle = useCallback<(color: string) => TextStyle>(
        (color) => ({ color }),
        []);

    const tabRoutes = useMemo<TransactionsTabRoute[]>(() => ([
        {
            name: 'Daily',
            component: DailyTransactions,
            options: {
                tabBarIcon: ({ color, focused }) => (
                    <Icon
                        name={focused ? 'calendar' : 'calendar-outline'}
                        color={color}
                        size={24}
                        iconType="ion_icon"
                    />
                ),
                tabBarLabel: ({ color }) => (
                    <Text
                        style={[styles.tabBarLabel, getTabBarLabelStyle(color)]}>
                        {'Por día'}
                    </Text>
                ),
            },
        },
        {
            name: 'Monthly',
            component: MonthlyTransactions,
            options: {
                tabBarIcon: ({ color, focused }) => (
                    <Icon
                        name={focused ? 'calendar-number' : 'calendar-number-outline'}
                        color={color}
                        size={24}
                        iconType="ion_icon"
                    />
                ),
                tabBarLabel: ({ color }) => (
                    <Text
                        style={[styles.tabBarLabel, getTabBarLabelStyle(color)]}>
                        {'Por mes'}
                    </Text>
                ),
            },
        },
        {
            name: 'Calendar',
            component: TransactionCalendar,
            options: {
                tabBarIcon: ({ color, focused }) => (
                    <Icon
                        name={focused ? 'today' : 'today-outline'}
                        color={color}
                        size={24}
                        iconType="ion_icon"
                    />
                ),
                tabBarLabel: ({ color }) => (
                    <Text
                        style={[styles.tabBarLabel, getTabBarLabelStyle(color)]}>
                        {'Por fecha'}
                    </Text>
                ),
            },
        },
        {
            name: 'Search',
            component: TransactionsSearch,
            options: {
                tabBarIcon: ({ color, focused }) => (
                    <Icon
                        name={focused ? 'search' : 'search-sharp'}
                        color={color}
                        size={24}
                        iconType="ion_icon"
                    />
                ),
                tabBarLabel: ({ color }) => (
                    <Text
                        style={[styles.tabBarLabel, getTabBarLabelStyle(color)]}>
                        {'Búsqueda'}
                    </Text>
                ),
            },
        },
    ]), [themeGradient]);

    return {
        screenOptions,
        tabRoutes,
    };
};
