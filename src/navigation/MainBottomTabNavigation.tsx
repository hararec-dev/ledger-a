import { useCallback, useMemo } from 'react';
import { Platform } from 'react-native';
import { type BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomIcon, CustomText } from '../components';
import { DashboardStackNavigation } from './DashboardStackNavigation';
import { TransactionsStackNavigation } from './TransactionsStackNavigation';
import { AccountsStackNavigation } from './AccountsStackNavigation';
import { ReportsStackNavigation } from './ReportsStackNavigation';
import { SettingsStackNavigation } from './SettingsStackNavigation';
import { useThemeStore } from '../hooks';
import type { MainBottomTabParamList, MainBottomTabRoute } from '../types';


const Tab = createBottomTabNavigator<MainBottomTabParamList>();

const useMainBottomTabNavigation = (): {
  screenOptions: (props: { theme: ReactNavigation.Theme }) => BottomTabNavigationOptions;
  tabRoutes: MainBottomTabRoute[];
} => {
  const { colors, isDark } = useThemeStore();
  const gradientColors = useMemo<string[]>(() => isDark 
  ? [
    colors.blue[400],
    colors.fuchsia[400],
    colors.rose[400],
  ]
  : [
    colors.blue[600],
    colors.fuchsia[600],
    colors.rose[600]
  ], [colors, isDark]);
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
    }
  }), []);
  const tabRoutes = useMemo<MainBottomTabRoute[]>(() => [
    {
      name: "DashboardTab",
      component: DashboardStackNavigation,
      options: {
        title: 'Inicio',
        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
          <CustomIcon
            name={'home-outline'}
            color={color}
            size={26}
            style={{ marginBottom: focused ? 0 : -4 }}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
        tabBarLabel: ({ color, focused }: { color: string; focused: boolean }) => (
          <CustomText
            text={'Inicio'}
            color={!focused ? color : undefined}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
      },
    },
    {
      name: "AccountsTab",
      component: AccountsStackNavigation,
      options: {
        title: 'Cuentas',
        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
          <CustomIcon
            name={'grid-outline'}
            color={color}
            size={26}
            style={{ marginBottom: focused ? 0 : -4 }}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
        tabBarLabel: ({ color, focused }: { color: string; focused: boolean }) => (
          <CustomText
            text={'Cuentas'}
            color={!focused ? color : undefined}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
      },
    },
    {
      name: "TransactionsTab",
      component: TransactionsStackNavigation,
      options: {
        title: 'Transacciones',
        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
          <CustomIcon
            name={'arrow-redo-outline'}
            color={color}
            size={26}
            style={{ marginBottom: focused ? 0 : -4 }}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
        tabBarLabel: ({ color, focused }: { color: string; focused: boolean }) => (
          <CustomText
            text={'Transacciones'}
            color={!focused ? color : undefined}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
      },
    },
    {
      name: "ReportsTab",
      component: ReportsStackNavigation,
      options: {
        title: 'Reportes',
        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
          <CustomIcon
            name={'stats-chart-outline'}
            color={color}
            size={26}
            style={{ marginBottom: focused ? 0 : -4 }}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
        tabBarLabel: ({ color, focused }: { color: string; focused: boolean }) => (
          <CustomText
            text={'Reportes'}
            color={!focused ? color : undefined}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
      },
    },
    {
      name: "SettingsTab",
      component: SettingsStackNavigation,
      options: {
        title: 'Configuración',
        tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
          <CustomIcon
            name={'settings-outline'}
            color={color}
            size={26}
            style={{ marginBottom: focused ? 0 : -4 }}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
        tabBarLabel: ({ color, focused }: { color: string; focused: boolean }) => (
          <CustomText
            text={'Configuración'}
            color={!focused ? color : undefined}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
      },
    },
  ], [gradientColors, isDark]);

  return {
    screenOptions,
    tabRoutes
  };
};


export const MainBottomTabNavigation: React.FC = () => {
  const { screenOptions, tabRoutes } = useMainBottomTabNavigation();

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabRoutes.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            ...route.options,
            lazy: true,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
