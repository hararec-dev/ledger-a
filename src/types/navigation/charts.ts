export type ChartsStackParamList = {
    Charts: undefined;
    Budget: undefined;
    Search: undefined;
};

export type ChartsStackRoute = {
    name: keyof ChartsStackParamList;
    component: React.ComponentType<any>;
    options: {
        title: string;
        headerShown: boolean;
    };
};
