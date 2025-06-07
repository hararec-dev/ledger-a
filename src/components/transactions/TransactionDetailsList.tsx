import { View, Text, StyleSheet, FlatList } from 'react-native';
import type { TransactionDetailsListProps, Transaction } from '@types';

export const TransactionDetailsList: React.FC<TransactionDetailsListProps> = ({
    transactions,
    selectedDate,
}) => {
    const renderItem = ({ item }: { item: Transaction }) => (
        <View key={item.id} style={styles.transactionItem}>
            <Text style={styles.transactionDesc}>{item.description}</Text>
            <Text
                style={[
                    styles.transactionAmount,
                    { color: item.type === 'income' ? '#2196f3' : '#f44336' },
                ]}
            >
                {item.type === 'income' ? '+' : '-'}${item.amount.toFixed(2)}
            </Text>
        </View>
    );

    const renderEmptyList = () => (
        <Text style={styles.noTransactions}>Sin transacciones</Text>
    );

    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.detailsDate}>
                {selectedDate.split('-').reverse().join('/')}
            </Text>
            <FlatList
                data={transactions}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={renderEmptyList}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        backgroundColor: '#222',
        padding: 16,
        borderRadius: 16,
        minWidth: 280,
        maxWidth: '100%',
    },
    listContent: {
        flexGrow: 1,
    },
    detailsDate: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 8,
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#333',
    },
    transactionDesc: {
        color: '#fff',
        fontSize: 16,
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    noTransactions: {
        color: '#888',
        textAlign: 'center',
        marginTop: 16,
    },
});
