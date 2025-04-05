export type MainBottomTabParamList = {
  DashboardTab: undefined;
  TransactionsTab: undefined;
  AccountsTab: undefined;
  ReportsTab: undefined;
  SettingsTab: undefined;
};

export type MainBottomTabRoute = {
  name: keyof MainBottomTabParamList;
  component: React.ComponentType<any>;
  options: {
    title: string;
    tabBarIcon: (props: {
      color: string;
      size: number;
      focused: boolean;
    }) => React.ReactNode;
    tabBarLabel: (props: {
      focused: boolean;
      color: string;
    }) => React.ReactNode;
    tabBarButton?: (props: any) => React.ReactNode;
  };
};
