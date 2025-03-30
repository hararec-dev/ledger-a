import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GradientText, IonIcon } from '../../components';
import { useGradient, useStyles } from '../../hooks';
import type { LegalInfoHeaderProps } from '../../types';


export const LegalInfoHeader: React.FC<LegalInfoHeaderProps> = ({ navigation, title, lastUpdate }) => {
    const themeStyles = useStyles(({ colors, isDark }) => ({
        header: {
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: isDark ? colors.coolGray[50] : colors.coolGray[900],
        },
        subtitle: {
            fontSize: 16,
            fontWeight: '500',
            marginBottom: 8,
            color: isDark ? colors.coolGray[100] : colors.coolGray[600],
            fontFamily: 'Nunito-Regular',
        },
    }));
    const { themeGradient } = useGradient();

    return (
        <View style={themeStyles.header}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            >
                <IonIcon name="arrow-back" size={24} color={themeStyles.header.borderBottomColor} />
            </TouchableOpacity>
            <GradientText
                text={title}
                fontSize={22}
                gradientColors={themeGradient}
                fontWeight="black"
                style={styles.gradientText}
            />
            <Text style={themeStyles.subtitle}>{lastUpdate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
    gradientText: {
        textAlign: 'center',
    },
});
