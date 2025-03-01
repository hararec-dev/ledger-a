import { ScrollView, StyleSheet, Text } from 'react-native';
import { useThemeStore } from '../../hooks';

export const AccountsScreen = () => {
    const { isDark } = useThemeStore();
    return (
        <ScrollView style={styles.container}>
            <Text style={{
                fontFamily: 'Pacifico-Regular', // Usa el nombre real de la fuente sin la extensión .ttf
                fontSize: 20,
                color: isDark ? 'white': 'black',
                backgroundColor: 'purple'
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            <Text style={{
                fontFamily: 'Nunito-Regular', // Usa el nombre real de la fuente sin la extensión .ttf
                fontSize: 20,
                color: isDark ? 'white': 'black',
                backgroundColor: 'blue'
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            <Text style={{
                fontFamily: 'Quicksand-Regular', // Usa el nombre real de la fuente sin la extensión .ttf
                fontSize: 20,
                color: isDark ? 'white': 'black',
                backgroundColor: 'green'
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </ScrollView>
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