import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView, Platform } from 'react-native';
import { DraggableGrid } from '../../components';
import type { DraggableItem } from '../../types';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const numColumns = 2;
const spacing = 16;
const itemSize = (screenWidth - spacing * (numColumns + 1)) / numColumns;

import Illustration from '../../assets/images/add-notes.svg';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#7c4dff',
        paddingTop: 48,
        paddingBottom: 32,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        minHeight: 170,
    },
    headerTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 6,
        marginTop: 8,
    },
    headerSubtitle: {
        color: '#e0d7fb',
        fontSize: 16,
        fontWeight: '400',
    },
    headerImage: {
        width: 110,
        height: 110,
        marginLeft: 8,
        marginTop: -10,
    },
    gridScroll: {
        padding: spacing,
        paddingBottom: 120,
    },
    gridContainer: {
        alignSelf: 'center',
    },
    noteCard: {
        borderRadius: 18,
        padding: 18,
        margin: spacing / 2,
        width: itemSize,
        minHeight: itemSize * 1.25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 4,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderWidth: 0,
    },
    ideaCard: {
        backgroundColor: '#fff',
        borderColor: '#ececec',
        borderWidth: 1,
    },
    ideaCardAlt: {
        backgroundColor: '#f5f2fa',
        borderColor: '#e5d8fa',
        borderWidth: 1,
    },
    noteTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#222',
        letterSpacing: 0.1,
    },
    noteText: {
        fontSize: 15,
        color: '#444',
        marginBottom: 10,
        lineHeight: 20,
    },
    noteImage: {
        width: '100%',
        height: 80,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#eaeaea',
    },
    noteFooter: {
        marginTop: 'auto',
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        paddingVertical: 8,
        alignItems: 'center',
    },
    noteFooterAlt: {
        backgroundColor: '#7c4dff',
    },
    noteFooterList: {
        marginTop: 'auto',
        backgroundColor: '#ffe082',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingVertical: 8,
        alignItems: 'center',
    },
    noteFooterListAlt: {
        marginTop: 'auto',
        backgroundColor: '#fffde7',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingVertical: 8,
        alignItems: 'center',
    },
    noteFooterText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#7c4dff',
        letterSpacing: 0.1,
    },
    noteFooterTextAlt: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        letterSpacing: 0.1,
    },
    listCard: {
        backgroundColor: '#fffde7',
        borderColor: '#ffe082',
        borderWidth: 1,
    },
    listCardAlt: {
        backgroundColor: '#fffde7',
        borderColor: '#fffde7',
        borderWidth: 1,
    },
    listItems: {
        marginVertical: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 6,
        borderWidth: 1.5,
        borderColor: '#bbb',
        marginRight: 10,
        backgroundColor: '#fff',
    },
    listItemText: {
        fontSize: 15,
        color: '#444',
    },
    fab: {
        position: 'absolute',
        bottom: 32,
        alignSelf: 'center',
        backgroundColor: '#7c4dff',
        width: 72,
        height: 72,
        borderRadius: 36,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.22,
        shadowRadius: 12,
        elevation: 8,
        zIndex: 10,
    },
    fabText: {
        color: '#fff',
        fontSize: 44,
        fontWeight: 'bold',
        marginTop: -2,
    },
});

const notesMock: DraggableItem[] = [
    {
        key: '1',
        component: (
            <View style={[styles.noteCard, styles.ideaCard]}>
                <Text style={styles.noteTitle}>💡 New Product{'\n'}Idea Design</Text>
                <Text style={styles.noteText}>
                    Create a mobile app UI Kit that provide a basic notes functionality but with some improvement.
                    {'\n\n'}
                    There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.
                </Text>
                <View style={styles.noteFooter}>
                    <Text style={styles.noteFooterText}>Interesting Idea</Text>
                </View>
            </View>
        ),
    },
    {
        key: '2',
        component: (
            <View style={[styles.noteCard, styles.ideaCardAlt]}>
                <Text style={styles.noteTitle}>💡 New Product{'\n'}Idea Design</Text>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80' }}
                    style={styles.noteImage}
                />
                <Text style={styles.noteText}>
                    Create a mobile app UI Kit that provide a basic notes functionality but with some improvement.
                </Text>
                <View style={[styles.noteFooter, styles.noteFooterAlt]}>
                    <Text style={styles.noteFooterTextAlt}>Interesting Idea</Text>
                </View>
            </View>
        ),
    },
    {
        key: '3',
        component: (
            <View style={[styles.noteCard, styles.listCard]}>
                <Text style={styles.noteTitle}>🛒 Monthly Buy{'\n'}List</Text>
                <View style={styles.listItems}>
                    <View style={styles.listItem}><View style={styles.checkbox} /><Text style={styles.listItemText}>Item 1</Text></View>
                    <View style={styles.listItem}><View style={styles.checkbox} /><Text style={styles.listItemText}>Item 2</Text></View>
                    <View style={styles.listItem}><View style={styles.checkbox} /><Text style={styles.listItemText}>Item 3</Text></View>
                    <View style={styles.listItem}><View style={styles.checkbox} /><Text style={styles.listItemText}>Item 4</Text></View>
                </View>
                <View style={styles.noteFooterList}>
                    <Text style={styles.noteFooterText}>Interesting Idea</Text>
                </View>
            </View>
        ),
    },
    {
        key: '4',
        component: (
            <View style={[styles.noteCard, styles.listCardAlt]}>
                <Text style={styles.noteTitle}>🛒 Monthly Buy{'\n'}List</Text>
                <View style={styles.listItems}>
                    <View style={styles.listItem}><View style={styles.checkbox} /><Text style={styles.listItemText}>Item 1</Text></View>
                    <View style={styles.listItem}><View style={styles.checkbox} /><Text style={styles.listItemText}>Sub item 1</Text></View>
                    <View style={styles.listItem}><View style={styles.checkbox} /><Text style={styles.listItemText}>Sub item 2</Text></View>
                    <View style={styles.listItem}><View style={styles.checkbox} /><Text style={styles.listItemText}>Item 2</Text></View>
                </View>
                <View style={styles.noteFooterListAlt}>
                    <Text style={styles.noteFooterText}>Interesting Idea</Text>
                </View>
            </View>
        ),
    },
];

export const NotesListScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTitle}>Amazing Journey!</Text>
                    <Text style={styles.headerSubtitle}>You have successfully{'\n'}finished 5 notes</Text>
                </View>
                <Illustration
                    style={styles.headerImage}
                    width={screenWidth * 0.25}
                    height={screenHeight * 0.18}
                />
            </View>
            <ScrollView contentContainerStyle={styles.gridScroll}>
                <DraggableGrid
                    items={notesMock}
                    numColumns={numColumns}
                    itemSize={itemSize}
                    containerStyle={styles.gridContainer}
                />
            </ScrollView>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('AddNote' as never)}
                activeOpacity={0.8}
            >
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

