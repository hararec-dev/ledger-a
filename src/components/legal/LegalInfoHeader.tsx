import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useGradient } from "../../hooks";
import { CustomIcon, CustomText } from "../custom";
import type { LegalInfoHeaderProps } from "../../types";


export const LegalInfoHeader: React.FC<LegalInfoHeaderProps> = ({ navigation, title, lastUpdate }) => {
    const { gradientLight } = useGradient();

    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            >
                <CustomIcon name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
            <CustomText
                text={title}
                fontSize={22}
                gradientColors={gradientLight}
                fontWeight='black'
                style={{ textAlign: 'center' }}
            />
            <Text style={styles.subtitle}>{lastUpdate}</Text>
        </View>
    );
}

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
        fontFamily: 'Quicksand-Regular',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
        color: '#444',
        fontFamily: 'Nunito-Regular',
    }
});