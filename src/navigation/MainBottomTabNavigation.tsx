import { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* import Icon from '@react-native-vector-icons/material-design-icons'; */
import { DashboardStackNavigation } from './DashboardStackNavigation';
import { TransactionsStackNavigation } from './TransactionsStackNavigation';
import { AccountsStackNavigation } from './AccountsStackNavigation';
import { ReportsStackNavigation } from './ReportsStackNavigation';
import { SettingsStackNavigation } from './SettingsStackNavigation';
import { CustomTabBarButton } from '../components';
import { MainBottomTabParamList, MainBottomTabRoute } from '../types';


const Tab = createBottomTabNavigator<MainBottomTabParamList>();

export const MainBottomTabNavigation: React.FC = () => {

  const tabRoutes = useMemo<MainBottomTabRoute[]>(() => ([
    {
      name: "DashboardTab",
      component: DashboardStackNavigation,
      options: {
        title: 'Inicio',
        tabBarIcon: ({ color, size, focused }) => (
          {/* <Icon name={focused ? "home" : "home-outline"} color={color} size={size} /> */}
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      },
    },
    {
      name: "AccountsTab",
      component: AccountsStackNavigation,
      options: {
        title: 'Cuentas',
        tabBarIcon: ({ color, size, focused }) => (
          {/* <Icon name={focused ? "bank" : "bank-outline"} color={color} size={size} /> */}
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      },
    },
    {
      name: "TransactionsTab",
      component: TransactionsStackNavigation,
      options: {
        title: 'Transacciones',
        tabBarIcon: ({ color, size, focused }) => (
          {/* <Icon name={focused ? "swap-horizontal-circle" : "swap-horizontal-circle-outline"} color={color} size={size} /> */}
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      },
    },
    {
      name: "ReportsTab",
      component: ReportsStackNavigation,
      options: {
        title: 'Reportes',
        tabBarIcon: ({ color, size, focused }) => (
          {/* <Icon name={focused ? "chart-bar-stacked" : "chart-bar"} color={color} size={size} /> */}
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      },
    },
    {
      name: "SettingsTab",
      component: SettingsStackNavigation,
      options: {
        title: 'Configuración',
        tabBarIcon: ({ color, size, focused }) => (
          {/* <Icon name={focused ? "cog" : "cog-outline"} color={color} size={size} /> */}
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
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