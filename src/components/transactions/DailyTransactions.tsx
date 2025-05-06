import { View, Text } from 'react-native';
import { Icon } from '../../components';

export const DailyTransactions: React.FC = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No hay datos disponibles</Text>
        <Icon name="person-outline" size={50} />
    </View>
);
