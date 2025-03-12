import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "./root";

export type AuthenticationScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Authentication'
>;

export type AuthenticationProps = {
    navigation: AuthenticationScreenNavigationProp;
};