import { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/material-design-icons';
import { DashboardStackNavigation } from './DashboardStackNavigation';
import { TransactionsStackNavigation } from './TransactionsStackNavigation';
import { AccountsStackNavigation } from './AccountsStackNavigation';
import { ReportsStackNavigation } from './ReportsStackNavigation';
import { SettingsStackNavigation } from './SettingsStackNavigation';
import { MainBottomTabParamList, MainBottomTabRoute } from '../types';

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

export const MainBottomTabNavigation: React.FC = () => {
  const tabRoutes = useMemo<MainBottomTabRoute[]>(() => ([
    {
      name: "DashboardTab",
      component: DashboardStackNavigation,
      options: {
        title: 'Inicio',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      },
    },
    {
      name: "AccountsTab",
      component: AccountsStackNavigation,
      options: {
        title: 'Cuentas',
        tabBarIcon: ({ color, size }) => (
          <Icon name="bank" color={color} size={size} />
        ),
      },
    },
    {
      name: "TransactionsTab",
      component: TransactionsStackNavigation,
      options: {
        title: 'Transacciones',
        tabBarIcon: ({ color, size }) => (
          <Icon name="swap-horizontal" color={color} size={size} />
        ),
      },
    },
    {
      name: "ReportsTab",
      component: ReportsStackNavigation,
      options: {
        title: 'Reportes',
        tabBarIcon: ({ color, size }) => (
          <Icon name="chart-bar" color={color} size={size} />
        ),
      },
    },
    {
      name: "SettingsTab",
      component: SettingsStackNavigation,
      options: {
        title: 'Configuración',
        tabBarIcon: ({ color, size }) => (
          <Icon name="cog" color={color} size={size} />
        ),
      },
    },
  ]), []);

  return (
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
  );
};