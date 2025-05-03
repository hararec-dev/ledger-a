import { Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Icon } from '../../components';
import { useStyles } from '../../hooks';
import type { DashboardTransactionItemProps } from '../../types';


export const DashboardTransactionItem: React.FC<DashboardTransactionItemProps> = ({ transaction }) => {
    const styles = useStyles(({ isDark, colors }) => ({
        transactionRow: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: isDark ? colors.gray[900] : colors.coolGray[50],
            borderRadius: 15,
            padding: 5,
            marginBottom: 10,
        },
        transactionIcon: {
            borderRadius: 12,
            backgroundColor: '#000',
            /* backgroundColor: transaction.color, */
            alignItems: 'center',
            justifyContent: 'center',
            padding: 7,
            color: '#fff',
        },
        transactionInfo: {
            flex: 1,
            marginLeft: 10,
        },
        transactionName: {
            color: isDark ? colors.coolGray[50] : colors.gray[900],
            fontFamily: 'Quicksand-Medium',
            fontSize: 16,
        },
        transactionSymbol: {
            color: isDark ? colors.coolGray[50] : colors.gray[900],
            fontFamily: 'Nunito-Regular',
            fontSize: 13,
            opacity: 0.7,
            marginTop: 2,
        },
        chartContainer: {
            width: 60,
            height: 32,
            justifyContent: 'center',
        },
        chart: {
            paddingRight: 0,
            paddingLeft: 0,
            color: isDark ? colors.gray[900] : colors.coolGray[50],
        },
        valueContainer: {
            alignItems: 'flex-end',
            marginLeft: 10,
        },
        transactionValue: {
            color: isDark ? colors.coolGray[50] : colors.gray[900],
            fontFamily: 'Quicksand-Bold',
            fontSize: 16,
        },
        transactionAmount: {
            color: isDark ? colors.coolGray[50] : colors.gray[900],
            fontFamily: 'Nunito-Regular',
            opacity: 0.8,
            fontSize: 12,
            marginTop: 2,
        },
    }));

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
            <View style={styles.chartContainer}>
                <LineChart
                    data={{
                        labels: [],
                        datasets: [{ data: transaction.chartData }],
                    }}
                    width={60}
                    height={32}
                    withDots={false}
                    withInnerLines={false}
                    withOuterLines={false}
                    withVerticalLabels={false}
                    withHorizontalLabels={false}
                    chartConfig={{
                        backgroundGradientFrom: styles.chart.color,
                        backgroundGradientTo: styles.chart.color,
                        color: () => transaction.chartColor,
                        strokeWidth: 2,
                    }}
                    bezier
                    style={styles.chart}
                />
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.transactionValue}>{transaction.value}</Text>
                <Text style={styles.transactionAmount}>{transaction.amount}</Text>
            </View>
        </View>
    );
};
