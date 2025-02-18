import { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
        title: 'Inicio'
      }
    },
    {
      name: "TransactionsTab",
      component: TransactionsStackNavigation,
      options: {
        title: 'Transacciones'
      }
    },
    {
      name: "AccountsTab",
      component: AccountsStackNavigation,
      options: {
        title: 'Cuentas'
      }
    },
    {
      name: "ReportsTab",
      component: ReportsStackNavigation,
      options: {
        title: 'Reportes'
      }
    },
    {
      name: "SettingsTab",
      component: SettingsStackNavigation,
      options: {
        title: 'Más'
      }
    }
  ]), []);

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};
