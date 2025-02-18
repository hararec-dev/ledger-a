export type SettingsStackParamList = {
    Settings: undefined;
    Categories: undefined;
    EditCategory: { categoryId: string };
    ExportBackup: undefined;
    Premium: undefined;
    BankSync: undefined;
    Subscription: undefined;
    CloudSync: undefined;
    AIAutomation: undefined;
    Collaborative: undefined;
    Crypto: undefined;
};

export type SettingsStackRoute = {
    name: keyof SettingsStackParamList;
    component: React.ComponentType<any>;
    options: {
        title: string;
        headerShown: boolean;
    };
};