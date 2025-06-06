import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useStyles } from '@hooks';
import { DashboardTransactionItem } from './DashboardTransactionItem';
import type { DashboardTransactionsListProps } from '@types';


export const DashboardTransactionsList: React.FC<DashboardTransactionsListProps> = ({ transactions }) => {
    const styles = useStyles(({ isDark, colors, fonts }) => ({
        container: {
            flex: 1,
            backgroundColor: isDark ? colors.coolGray[700] : colors.coolGray[200],
            borderRadius: 16,
            padding: 5,
            marginBottom: 35,
        },
        list: {
            flex: 1,
        },
        listContent: {
            paddingBottom: 32,
        },
        transactionsHeaderRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 8,
            paddingHorizontal: 10,
        },
        transactionsTitle: {
            fontSize: 18,
            fontFamily: fonts.quicksand.bold,
            color: isDark ? colors.coolGray[50] : colors.coolGray[900],
            marginBottom: 5,
        },
        seeAllText: {
            color: isDark ? colors.coolGray[50] : colors.coolGray[900],
            fontSize: 15,
            opacity: 0.7,
            fontFamily: fonts.nunito.regular,
            textDecorationLine: 'underline',
        },
    }));

    return (
        <View style={styles.container}>
            <View style={styles.transactionsHeaderRow}>
                <Text style={styles.transactionsTitle}>Movimientos Recientes</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAllText}>Ver todo</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={transactions}
                renderItem={({ item }) => <DashboardTransactionItem transaction={item} />}
                keyExtractor={(item) => item.name}
                contentContainerStyle={styles.listContent}
                style={styles.list}
            />
        </View>
    );
};
