export type ReportsStackParamList = {
    Reports: undefined;
    Budget: undefined;
    Search: undefined;
};

export type ReportsStackRoute = {
    name: keyof ReportsStackParamList;
    component: React.ComponentType<any>;
    options: {
        title: string;
        headerShown: boolean;
    };
};
