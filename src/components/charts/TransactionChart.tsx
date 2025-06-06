import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Animated from 'react-native-reanimated';
import { useChartAnimation, useTransactionItemStyles } from '@hooks';
import type { TransactionChartProps } from '@types';

export const TransactionChart: React.FC<TransactionChartProps> = ({
    chartData,
    chartColor,
}) => {
    const styles = useTransactionItemStyles();
    const { animatedChartStyle, animatedLineStyle } = useChartAnimation();

    return (
        <View style={styles.chartContainer}>
            <Animated.View style={animatedChartStyle}>
                <Animated.View style={[styles.chart, animatedLineStyle]}>
                    <LineChart
                        data={{
                            labels: [],
                            datasets: [{ data: chartData }],
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
                            color: () => chartColor,
                            strokeWidth: 2,
                        }}
                        bezier
                        style={styles.chart}
                    />
                </Animated.View>
            </Animated.View>
        </View>
    );
};
