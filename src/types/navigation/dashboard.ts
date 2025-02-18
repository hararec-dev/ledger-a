import type { StackNavigationOptions } from "@react-navigation/stack";

export type DashboardStackParamList = {
  Dashboard: undefined;
  QuickAdd: undefined;
};

export type DashboardStackRoute = {
  name: keyof DashboardStackParamList;
  component: React.ComponentType<any>;
  options: StackNavigationOptions;
};