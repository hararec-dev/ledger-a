import { useCallback, useMemo } from 'react';
import { Platform, type ViewStyle } from 'react-native';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import {
    AccountsStackNavigation,
    DashboardStackNavigation,
    ChartsStackNavigation,
    SettingsStackNavigation,
    RootTransactionsStackNavigation,
} from '../../navigation';
import { Icon, GradientText } from '../../components';
import { useGradient } from '../../hooks';
import type { MainBottomTabRoute, TabBarItemProps } from '../../types';


export const useMainBottomTabNavigation = (): {
    screenOptions: (props: { theme: ReactNavigation.Theme }) => BottomTabNavigationOptions;
    tabRoutes: MainBottomTabRoute[];
} => {
    const { themeGradient } = useGradient();
    const getIconStyle = useCallback<(focused: boolean) => ViewStyle>(
        (focused: boolean) => ({ marginBottom: focused ? 0 : -4 }),
        []);
    const screenOptions = useCallback((props: {
        theme: ReactNavigation.Theme;
    }): BottomTabNavigationOptions => ({
        headerShown: false,
        tabBarActiveTintColor: props.theme.colors.primary,
        tabBarInactiveTintColor: props.theme.colors.text,
        tabBarStyle: {
            backgroundColor: props.theme.colors.background,
            height: Platform.OS === 'android' ? 60 : 65,
        },
        tabBarLabelStyle: {
            color: props.theme.colors.primary,
        },
    }), []);

    const tabRoutes = useMemo<MainBottomTabRoute[]>(() => [
        {
            name: 'DashboardTab',
            component: DashboardStackNavigation,
            options: {
                tabBarIcon: ({ color, focused }: TabBarItemProps) => (
                    <Icon
                        name={focused ? 'home' : 'home-outline'}
                        color={color}
                        size={26}
                        style={getIconStyle(focused)}
                        gradientColors={focused ? themeGradient : undefined}
                    />
                ),
                tabBarLabel: ({ color, focused }: TabBarItemProps) => (
                    <GradientText
                        text={'Inicio'}
                        color={!focused ? color : undefined}
                        gradientColors={focused ? themeGradient : undefined}
                    />
                ),
            },
        },
        {
            name: 'AccountsTab',
            component: AccountsStackNavigation,
            options: {
                tabBarIcon: ({ color, focused }: TabBarItemProps) => (
                    <Icon
                        name={focused ? 'notebook' : 'notebook-outline'}
                        color={color}
                        size={26}
                        style={getIconStyle(focused)}
                        gradientColors={focused ? themeGradient : undefined}
                        iconType="material_community_icon"
                    />
                ),
                tabBarLabel: ({ color, focused }: TabBarItemProps) => (
                    <GradientText
                        text={'Cuentas'}
                        color={!focused ? color : undefined}
                        gradientColors={focused ? themeGradient : undefined}
                    />
                ),
            },
        },
        {
            name: 'TransactionsTab',
            component: RootTransactionsStackNavigation,
            options: {
                tabBarIcon: ({ color, focused }: TabBarItemProps) => (
                    <Icon
                        name={focused ? 'add-circle' : 'add-circle-outline'}
                        color={color}
                        size={30}
                        style={getIconStyle(focused)}
                        gradientColors={focused ? themeGradient : undefined}
                    />
                ),
                tabBarLabel: ({ color, focused }: TabBarItemProps) => (
                    <GradientText
                        text={'Transacciones'}
                        color={!focused ? color : undefined}
                        gradientColors={focused ? themeGradient : undefined}
                    />
                ),
            },
        },
        {
            name: 'ChartsTab',
            component: ChartsStackNavigation,
            options: {
                tabBarIcon: ({ color, focused }: TabBarItemProps) => (
                    <Icon
                        name={focused ? 'bar-chart' : 'bar-chart-outline'}
                        color={color}
                        size={26}
                        style={getIconStyle(focused)}
                        gradientColors={focused ? themeGradient : undefined}
                    />
                ),
                tabBarLabel: ({ color, focused }: TabBarItemProps) => (
                    <GradientText
                        text={'Gráficas'}
                        color={!focused ? color : undefined}
                        gradientColors={focused ? themeGradient : undefined}
                    />
                ),
            },
        },
        {
            name: 'SettingsTab',
            component: SettingsStackNavigation,
            options: {
                tabBarIcon: ({ color, focused }: TabBarItemProps) => (
                    <Icon
                        name={focused ? 'dots-horizontal-circle' : 'dots-horizontal-circle-outline'}
                        color={color}
                        size={26}
                        style={getIconStyle(focused)}
                        gradientColors={focused ? themeGradient : undefined}
                        iconType="material_community_icon"
                    />
                ),
                tabBarLabel: ({ color, focused }: TabBarItemProps) => (
                    <GradientText
                        text={'Más'}
                        color={!focused ? color : undefined}
                        gradientColors={focused ? themeGradient : undefined}
                    />
                ),
            },
        },
    ], [themeGradient, getIconStyle]);

    return {
        screenOptions,
        tabRoutes,
    };
};
