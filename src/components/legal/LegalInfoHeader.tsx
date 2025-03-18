import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomIcon } from "../custom";
import type { LegalInfoHeaderProps } from "../../types";


export const LegalInfoHeader: React.FC<LegalInfoHeaderProps> = ({ navigation, title, lastUpdate }) => (
    <View style={styles.header}>
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
        >
            <CustomIcon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{lastUpdate}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    backButton: {
        marginBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        fontFamily: 'Pacifico-Regular'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
        color: '#444',
        fontFamily: 'Nunito-Regular',
    }
});