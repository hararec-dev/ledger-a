import { useCallback, useMemo } from 'react';
import { Platform } from 'react-native';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import {
    AccountsStackNavigation,
    DashboardStackNavigation,
    ReportsStackNavigation,
    SettingsStackNavigation,
    TransactionsStackNavigation,
} from '../../navigation';
import { IonIcon, GradientText } from '../../components';
import { useGradient, useThemeStore } from '../../hooks';
import type { MainBottomTabRoute } from '../../types';


export const useMainBottomTabNavigation = (): {
    screenOptions: (props: { theme: ReactNavigation.Theme }) => BottomTabNavigationOptions;
    tabRoutes: MainBottomTabRoute[];
} => {
    const { isDark } = useThemeStore();
    const { gradientDark, gradientLight } = useGradient();
    const gradientColors = useMemo<string[]>(() => isDark
        ? gradientDark
        : gradientLight,
        [gradientDark, gradientLight, isDark]);
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
                title: 'Inicio',
                tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                    <IonIcon
                        name={focused ? 'home' : 'home-outline'}
                        color={color}
                        size={26}
                        style={{ marginBottom: focused ? 0 : -4 }}
                        gradientColors={focused ? gradientColors : undefined}
                    />
                ),
                tabBarLabel: ({ color, focused }: { color: string; focused: boolean }) => (
                    <GradientText
                        text={'Inicio'}
                        color={!focused ? color : undefined}
                        gradientColors={focused ? gradientColors : undefined}
                    />
                ),
            },
        },
        {
            name: 'AccountsTab',
            component: AccountsStackNavigation,
            options: {
                title: 'Cuentas',
                tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                    <IonIcon
                        name={focused ? 'wallet' : 'wallet-outline'}
                        color={color}
                        size={26}
                        style={{ marginBottom: focused ? 0 : -4 }}
                        gradientColors={focused ? gradientColors : undefined}
                    />
                ),
                tabBarLabel: ({ color, focused }: { color: string; focused: boolean }) => (
                    <GradientText
                        text={'Cuentas'}
                        color={!focused ? color : undefined}
                        gradientColors={focused ? gradientColors : undefined}
                    />
                ),
            },
        },
        {
            name: 'TransactionsTab',
            component: TransactionsStackNavigation,
            options: {
                title: 'Transacciones',
                tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                    <IonIcon
                        name={focused ? 'arrow-redo' : 'arrow-redo-outline'}
                        color={color}
                        size={26}
                        style={{ marginBottom: focused ? 0 : -4 }}
                        gradientColors={focused ? gradientColors : undefined}
                    />
                ),
                tabBarLabel: ({ color, focused }: { color: string; focused: boolean }) => (
                    <GradientText
                        text={'Transacciones'}
                        color={!focused ? color : undefined}
                        gradientColors={focused ? gradientColors : undefined}
                    />
                ),
            },
        },
        {
            name: 'ReportsTab',
            component: ReportsStackNavigation,
            options: {
                title: 'Reportes',
                tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                    <IonIcon
                        name={focused ? 'document-text' : 'document-text-outline'}
                        color={color}
                        size={26}
                        style={{ marginBottom: focused ? 0 : -4 }}
                        gradientColors={focused ? gradientColors : undefined}
                    />
                ),
                tabBarLabel: ({ color, focused }: { color: string; focused: boolean }) => (
                    <GradientText
                        text={'Reportes'}
                        color={!focused ? color : undefined}
                        gradientColors={focused ? gradientColors : undefined}
                    />
                ),
            },
        },
        {
            name: 'SettingsTab',
            component: SettingsStackNavigation,
            options: {
                title: 'Más',
                tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
                    <IonIcon
                        name={focused ? 'ellipsis-vertical-circle-sharp' : 'ellipsis-vertical-circle-outline'}
                        color={color}
                        size={26}
                        style={{ marginBottom: focused ? 0 : -4 }}
                        gradientColors={focused ? gradientColors : undefined}
                    />
                ),
                tabBarLabel: ({ color, focused }: { color: string; focused: boolean }) => (
                    <GradientText
                        text={'Más'}
                        color={!focused ? color : undefined}
                        gradientColors={focused ? gradientColors : undefined}
                    />
                ),
            },
        },
    ], [gradientColors, isDark]);

    return {
        screenOptions,
        tabRoutes,
    };
};
