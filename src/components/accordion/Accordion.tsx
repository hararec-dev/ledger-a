import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Icon } from '../icon/Icon';
import type { AccordionItem, AccordionProps } from '../../types';

export const Accordion: React.FC<AccordionProps> = ({
    sections,
    activeSection,
    onSectionPress,
}) => {
    const renderItem = ({ item, index }: AccordionItem) => (
        <View key={item.key} style={styles.sectionContainer}>
            <TouchableOpacity
                style={styles.header}
                onPress={() => {
                    if (activeSection === index) {
                        onSectionPress(null);
                    } else {
                        onSectionPress(index);
                    }
                }}
                activeOpacity={0.8}
            >
                <Text style={styles.headerText}>{item.title}</Text>
                <Icon
                    name={activeSection === index ? 'chevron-up-outline' : 'chevron-down-outline'}
                    size={22}
                    color="#90caf9"
                    style={styles.icon}
                />
            </TouchableOpacity>
            {activeSection === index && (
                <View style={styles.content}>
                    {item.content ? (
                        item.content
                    ) : (
                        <Text style={styles.emptyText}>Esta pestaña está vacía.</Text>
                    )}
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={sections}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                extraData={activeSection}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#23262b',
        margin: 16,
    },
    sectionContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 18,
        backgroundColor: '#23262b',
    },
    headerText: {
        color: '#fff',
        fontSize: 16,
    },
    icon: {
        marginLeft: 8,
    },
    content: {
        padding: 18,
        backgroundColor: '#23262b',
    },
    emptyText: {
        color: '#90caf9',
        fontStyle: 'italic',
    },
});
