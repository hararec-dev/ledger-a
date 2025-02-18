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
    };
};