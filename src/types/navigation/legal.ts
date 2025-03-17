import type { RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "./root";
import { StackNavigationProp } from "@react-navigation/stack";


export interface LegalInfoProps {
    route: RouteProp<RootStackParamList, "LegalInfo">;
    navigation: StackNavigationProp<RootStackParamList, 'LegalInfo'>;
};
