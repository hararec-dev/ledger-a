import { useMemo, useState } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardStackNavigation } from './DashboardStackNavigation';
import { TransactionsStackNavigation } from './TransactionsStackNavigation';
import { AccountsStackNavigation } from './AccountsStackNavigation';
import { ReportsStackNavigation } from './ReportsStackNavigation';
import { SettingsStackNavigation } from './SettingsStackNavigation';
import { CustomIcon, CustomText } from '../components';
import type { MainBottomTabParamList, MainBottomTabRoute } from '../types';

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

export const MainBottomTabNavigation: React.FC = () => {
  const [gradientColors] = useState<string[]>(['#38BDF8', '#A855F7', '#F472B6' ]);
  const tabRoutes = useMemo<MainBottomTabRoute[]>(() => ([
    {
      name: "DashboardTab",
      component: DashboardStackNavigation,
      options: {
        title: 'Inicio',
        tabBarIcon: ({ color, focused }) => (
          <CustomIcon
            name={focused ? "home" : "home-outline"}
            color={color}
            size={25}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
        tabBarLabel: ({ color, focused }) => (
          <CustomText
            text='Inicio'
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
        tabBarIcon: ({ color, focused }) => (
          <CustomIcon
            name={focused ? "bank" : "bank-outline"}
            color={color}
            size={25}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
        tabBarLabel: ({ color, focused }) => (
          <CustomText
            text='Cuentas'
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
        tabBarIcon: ({ color, focused }) => (
          <CustomIcon
            name={focused ? "swap-horizontal-circle" : "swap-horizontal-circle-outline"}
            color={color}
            size={25}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
        tabBarLabel: ({ color, focused }) => (
          <CustomText
            text='Transacciones'
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
        tabBarIcon: ({ color, focused }) => (
          <CustomIcon
            name={focused ? "chart-bar" : "chart-bar-stacked"}
            color={color}
            size={25}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
        tabBarLabel: ({ color, focused }) => (
          <CustomText
            text='Reportes'
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
        tabBarIcon: ({ color, focused }) => (
          <CustomIcon
            name={focused ? "cog" : "cog-outline"}
            color={color}
            size={25}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
        tabBarLabel: ({ color, focused }) => (
          <CustomText
            text='Configuración'
            color={!focused ? color : undefined}
            gradientColors={focused ? gradientColors : undefined}
          />
        ),
      },
    },
  ]), []);

  return (
    <Tab.Navigator
      screenOptions={({ theme }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          height: 55,
        },
        tabBarLabelStyle: {
          color: theme.colors.primary,
        }
        /* tabBarBadge: '1',
        tabBarBadgeStyle: {
          backgroundColor: theme.colors.notification,
        }, */
      })}
    >
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