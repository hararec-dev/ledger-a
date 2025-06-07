import { View, Text, StyleSheet } from 'react-native';
import type { TransactionSummaryHeaderProps } from '@types';


export const TransactionSummaryHeader: React.FC<TransactionSummaryHeaderProps> = ({
    income,
    expenses,
    balance,
}) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerItem}>
                <Text style={styles.headerLabel}>Ingresos</Text>
                <Text style={[styles.headerValue, { color: '#2196f3' }]}>
                    {income.toFixed(2)}
                </Text>
            </View>
            <View style={styles.headerItem}>
                <Text style={styles.headerLabel}>Gastos</Text>
                <Text style={[styles.headerValue, { color: '#f44336' }]}>
                    {expenses.toFixed(2)}
                </Text>
            </View>
            <View style={styles.headerItem}>
                <Text style={styles.headerLabel}>Balance</Text>
                <Text style={styles.headerValue}>{balance.toFixed(2)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
        backgroundColor: '#222',
    },
    headerItem: {
        alignItems: 'center',
    },
    headerLabel: {
        color: '#fff',
        fontSize: 14,
    },
    headerValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});
