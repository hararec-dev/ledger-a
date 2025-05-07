import { Text, View } from 'react-native';
import { Icon, TransactionChart } from '../../components';
import { useTransactionItemStyles } from '../../hooks';
import type { DashboardTransactionItemProps } from '../../types';

export const DashboardTransactionItem: React.FC<DashboardTransactionItemProps> = ({ transaction }) => {
    const styles = useTransactionItemStyles();

    return (
        <View style={styles.transactionRow}>
            <View style={styles.transactionIcon}>
                <Icon
                    name={transaction.icon.name}
                    iconType={transaction.icon.iconType}
                    size={25}
                    color={styles.transactionIcon.color}
                />
            </View>
            <View style={styles.transactionInfo}>
                <Text style={styles.transactionName}>{transaction.name}</Text>
                <Text style={styles.transactionSymbol}>{transaction.symbol}</Text>
            </View>
            <TransactionChart
                chartData={transaction.chartData}
                chartColor={transaction.chartColor}
            />
            <View style={styles.valueContainer}>
                <Text style={styles.transactionValue}>{transaction.value}</Text>
                <Text style={styles.transactionAmount}>{transaction.amount}</Text>
            </View>
        </View>
    );
};
