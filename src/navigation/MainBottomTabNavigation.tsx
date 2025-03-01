import { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardStackNavigation } from './DashboardStackNavigation';
import { TransactionsStackNavigation } from './TransactionsStackNavigation';
import { AccountsStackNavigation } from './AccountsStackNavigation';
import { ReportsStackNavigation } from './ReportsStackNavigation';
import { SettingsStackNavigation } from './SettingsStackNavigation';
import { CustomIcon, CustomTabBarButton } from '../components';
import type { MainBottomTabParamList, MainBottomTabRoute } from '../types';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

export const MainBottomTabNavigation: React.FC = () => {
  const tabRoutes = useMemo<MainBottomTabRoute[]>(() => ([
    {
      name: "DashboardTab",
      component: DashboardStackNavigation,
      options: {
        title: 'Inicio',
        tabBarIcon: ({ color, focused }) => (
          <CustomIcon name={focused ? "home" : "home-outline"} color={color} size={25} />
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarLabel: ({ color }) => (
          <Text style={{ color, fontSize: 9, fontWeight: 'bold' }}>
            Inicio
          </Text>
        ),
      },
    },
    {
      name: "AccountsTab",
      component: AccountsStackNavigation,
      options: {
        title: 'Cuentas',
        tabBarIcon: ({ color, focused }) => (
          <CustomIcon name={focused ? "bank" : "bank-outline"} color={color} size={25} />
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarLabel: ({ color }) => (
          <Text style={{ color, fontSize: 9, fontWeight: 'bold' }}>
            Cuentas
          </Text>
        ),
      },
    },
    {
      name: "TransactionsTab",
      component: TransactionsStackNavigation,
      options: {
        title: 'Transacciones',
        tabBarIcon: ({ color, focused }) => (
          <CustomIcon name={focused ? "swap-horizontal-circle" : "swap-horizontal-circle-outline"} color={color} size={25} />
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarLabel: ({ color }) => (
          <Text style={{ color, fontSize: 9, fontWeight: 'bold' }}>
            Transacciones
          </Text>
        ),
      },
    },
    {
      name: "ReportsTab",
      component: ReportsStackNavigation,
      options: {
        title: 'Reportes',
        tabBarIcon: ({ color, focused }) => (
          <CustomIcon name={focused ? "chart-bar" : "chart-bar-stacked"} color={color} size={25} />
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarLabel: ({ color }) => (
          <Text style={{ color, fontSize: 9, fontWeight: 'bold' }}>
            Reportes
          </Text>
        ),
      },
    },
    {
      name: "SettingsTab",
      component: SettingsStackNavigation,
      options: {
        title: 'Configuración',
        tabBarIcon: ({ color, focused }) => (
          <CustomIcon name={focused ? "cog" : "cog-outline"} color={color} size={25} />
        ),
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarLabel: ({ color }) => (
          <Text style={{ color, fontSize: 9, fontWeight: 'bold' }}>
            Configuración
          </Text>
        ),
      },
    },
  ]), []);

  return (
    <Tab.Navigator
      safeAreaInsets={{ bottom: 10 }}
      screenOptions={({ theme }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          height: 50,
        },
        tabBarIconStyle: {
          marginTop: 10,
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