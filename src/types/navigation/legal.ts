import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from './root';


export interface LegalInfoProps {
    route: RouteProp<RootStackParamList, 'LegalInfo'>;
    navigation: StackNavigationProp<RootStackParamList, 'LegalInfo'>;
}
