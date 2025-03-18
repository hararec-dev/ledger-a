import { StyleSheet, Text, View } from 'react-native';
import type { TransferProps } from '../../types';

export const TransferScreen: React.FC<TransferProps> = ({ route }) => {
    return (
        <View style={styles.container}>
            <Text>TransferScreen - {route.params.fromAccountId}</Text>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    box1: {
        backgroundColor: '#5856D6',
        flex: 1,
    },
    box2: {
        backgroundColor: '#4240a2',
        flex: 2,
    },
    box3: {
        backgroundColor: '#2e2d71',
        flex: 3,
    },
});