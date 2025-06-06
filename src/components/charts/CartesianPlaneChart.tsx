import { useCallback } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import type { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import type { CartesianPlaneChartProps } from '@types';


const DEFAULT_CHART_CONFIG: AbstractChartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16,
    },
    propsForDots: {
        r: '6',
        strokeWidth: '2',
        stroke: '#ffa726',
    },
};

export const CartesianPlaneChart: React.FC<CartesianPlaneChartProps> = ({
    data,
    height = 220,
    yAxisLabel = '$',
    yAxisSuffix = 'k',
    title = 'Bezier Line Chart',
    chartConfig,
}) => {
    const transformChartData = useCallback((chartData: Array<{ label: string; value: number }>) => ({
        labels: chartData.map(point => point.label),
        datasets: [{
            data: chartData.map(point => point.value),
        }],
    }), []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <LineChart
                data={transformChartData(data)}
                width={Dimensions.get('window').width}
                height={height}
                yAxisLabel={yAxisLabel}
                yAxisSuffix={yAxisSuffix}
                yAxisInterval={1}
                chartConfig={{
                    ...DEFAULT_CHART_CONFIG,
                    ...chartConfig,
                }}
                bezier
                style={styles.lineChart}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    lineChart: {
        marginVertical: 8,
        borderRadius: 16,
    },
});
