import { StyleSheet, Text, View, TextStyle, ViewStyle } from 'react-native';
import { Divider } from '@rneui/themed';
import type { LegalInfoSectionProps, LegalItem, LegalItemProps, LegalSubItemProps } from '../../types';


const LegalSubItem: React.FC<LegalSubItemProps> = ({ subitem }) => (
    <Text style={styles.subitemText}>- {subitem}</Text>
);

const LegalItem: React.FC<LegalItemProps> = ({ item }) => (
    <View style={styles.subtitleContainer}>
        {item.text && <Text style={styles.subtitle}>⁕ {item.text}</Text>}
        {item.subitems?.map((subitem, index) => (
            <LegalSubItem key={`subitem-${index}`} subitem={subitem} />
        ))}
    </View>
);

export const LegalInfoSection: React.FC<LegalInfoSectionProps> = ({ section, index }) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>{index + 1}. {section.subtitle}</Text>
        {section.items.map((item: LegalItem, idx: number) => (
            <LegalItem key={`item-${idx}`} item={item} />
        ))}
        <Divider />
    </View>
);

interface Styles {
    section: ViewStyle;
    sectionTitle: TextStyle;
    subtitleContainer: ViewStyle;
    subtitle: TextStyle;
    subitemText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    section: {
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        fontFamily: 'Quicksand-Regular',
    },
    subtitleContainer: {
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
        color: '#444',
        fontFamily: 'Nunito-Regular',
    },
    subitemText: {
        fontSize: 13,
        marginLeft: 15,
        color: 'black',
        lineHeight: 20,
        fontFamily: 'Nunito-Regular',
    },
});
