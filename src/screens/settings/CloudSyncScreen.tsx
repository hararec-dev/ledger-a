import { StyleSheet, Text, View } from 'react-native';

export const CloudSyncScreen = () => {
    return (
        <View style={styles.container}>
            <Text>CloudSyncScreen</Text>
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