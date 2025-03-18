import type { RouteProp } from "@react-navigation/native";
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

export type TransferProps = {
    route: RouteProp<AccountsStackParamList, "Transfer">;
};

export type AccountDetailsProps = {
    route: RouteProp<AccountsStackParamList, "AccountDetails">;
};

export type AccountsStackRoute = {
    name: keyof AccountsStackParamList;
    component: React.ComponentType<any>;
    options: StackNavigationOptions;
};