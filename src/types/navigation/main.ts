import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export type MainBottomTabParamList = {
  DashboardTab: undefined;
  TransactionsTab: undefined;
  AccountsTab: undefined;
  ChartsTab: undefined;
  SettingsTab: undefined;
};

export type MainBottomTabRoute = {
  name: keyof MainBottomTabParamList;
  component: React.ComponentType<any>;
  options: BottomTabNavigationOptions;
};

export type TabBarItemProps = {
  focused: boolean;
  color: string;
}
