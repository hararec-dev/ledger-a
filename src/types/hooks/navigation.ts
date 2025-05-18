import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type {
    RootStackParamList,
    AccountsStackParamList,
    ChartsStackParamList,
    DashboardStackParamList,
    MainBottomTabParamList,
    NotesStackParamList,
    SettingsStackParamList,
    RootTransactionsStackParamList,
    UtilityStackParamList,
} from '../../types';

export type AllRoutes =
    | keyof AccountsStackParamList
    | keyof ChartsStackParamList
    | keyof DashboardStackParamList
    | keyof MainBottomTabParamList
    | keyof NotesStackParamList
    | keyof RootStackParamList
    | keyof SettingsStackParamList
    | keyof RootTransactionsStackParamList
    | keyof UtilityStackParamList;

export type NavigationHierarchy =
    CompositeNavigationProp<
        StackNavigationProp<RootStackParamList>,
        CompositeNavigationProp<
            StackNavigationProp<UtilityStackParamList>,
            CompositeNavigationProp<
                StackNavigationProp<MainBottomTabParamList>,
                CompositeNavigationProp<
                    StackNavigationProp<AccountsStackParamList>,
                    CompositeNavigationProp<
                        StackNavigationProp<ChartsStackParamList>,
                        CompositeNavigationProp<
                            StackNavigationProp<DashboardStackParamList>,
                            CompositeNavigationProp<
                                StackNavigationProp<NotesStackParamList>,
                                CompositeNavigationProp<
                                    StackNavigationProp<SettingsStackParamList>,
                                    StackNavigationProp<RootTransactionsStackParamList>
                                >
                            >
                        >
                    >
                >
            >
        >
    >;

export type RouteParams<RouteName extends AllRoutes> =
    RouteName extends keyof RootStackParamList ? RootStackParamList[RouteName] :
    RouteName extends keyof AccountsStackParamList ? AccountsStackParamList[RouteName] :
    RouteName extends keyof ChartsStackParamList ? ChartsStackParamList[RouteName] :
    RouteName extends keyof DashboardStackParamList ? DashboardStackParamList[RouteName] :
    RouteName extends keyof NotesStackParamList ? NotesStackParamList[RouteName] :
    RouteName extends keyof SettingsStackParamList ? SettingsStackParamList[RouteName] :
    RouteName extends keyof RootTransactionsStackParamList ? RootTransactionsStackParamList[RouteName] :
    RouteName extends keyof UtilityStackParamList ? UtilityStackParamList[RouteName] :
    RouteName extends keyof MainBottomTabParamList ? MainBottomTabParamList[RouteName] :
    undefined;
