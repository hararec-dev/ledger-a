import type { StackNavigationOptions } from "@react-navigation/stack";

export type AccountsStackParamList = {
    Accounts: undefined;
    AccountDetails: {
        accountId: string;
    };
    Transfer: {
        fromAccountId?: string;
    };
};

export type AccountsStackRoute = {
    name: keyof AccountsStackParamList;
    component: React.ComponentType<any>;
    options: StackNavigationOptions;
};