import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { ContentDisplay } from '../../components';
import AddNotes from '../../assets/images/add-notes.svg';

export const TransactionListScreen = () => {
    const { width, height } = useWindowDimensions();
    return (
        <View style={styles.container}>
            <ContentDisplay>
                <AddNotes
                    width={width * 0.5}
                    height={height * 0.3}
                />
            </ContentDisplay>

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
