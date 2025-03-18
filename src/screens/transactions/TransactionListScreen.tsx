import { StyleSheet, Text, View } from 'react-native';
import { TimelineExample } from '../../components';

export const TransactionListScreen = () => {
    return (
        <View style={styles.container}>
            <TimelineExample />

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
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