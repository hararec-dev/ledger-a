import { Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useStyles } from '../../hooks';
import type { CustomLineChartProps } from '../../types';


export const LineFinancialChart: React.FC<CustomLineChartProps> = ({
    data,
    chartConfig,
    height = 220,
    style,
    legendStyle,
    legendItemStyle,
    legendTextStyle,
    withShadow = false,
    withInnerLines = true,
    withOuterLines = false,
    withVerticalLines = false,
    bezier = true,
    fromZero = true,
    yLabelsOffset = 10,
    segments = 4,
    yAxisSuffix = '',
    yAxisInterval = 1,
    renderLegendItem,
}) => {
    const styles = useStyles(({ screenWidth, isDark, colors }) => ({
        screenWidth: {
            width: screenWidth,
        },
        container: {
            backgroundColor: isDark ? colors.coolGray[100] : colors.coolGray[900],
            padding: 16,
            borderRadius: 12,
        },
        chart: {
            borderRadius: 12,
        },
        legendContainer: {
            flexDirection: 'row',
            marginTop: 8,
            flexWrap: 'wrap',
        },
        legendItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 16,
            marginBottom: 4,
        },
        legendText: {
            color: isDark ? colors.coolGray[900] : colors.coolGray[100],
            fontSize: 12,
        },
        legendview: {
            width: 12,
            height: 12,
            marginRight: 4,
            borderRadius: 2,
        },
        whiteText: {
            color: colors.coolGray[100],
        },
    }));

    return (
        <View style={[styles.container, style]}>
            <LineChart
                data={data}
                width={styles.screenWidth.width}
                height={height}
                chartConfig={chartConfig}
                withShadow={withShadow}
                withInnerLines={withInnerLines}
                withOuterLines={withOuterLines}
                withVerticalLines={withVerticalLines}
                bezier={bezier}
                style={styles.chart}
                fromZero={fromZero}
                yLabelsOffset={yLabelsOffset}
                segments={segments}
                yAxisSuffix={yAxisSuffix}
                yAxisInterval={yAxisInterval}
            />
            {data.legend && data.datasets && (
                <View style={[styles.legendContainer, legendStyle]}>
                    {data.legend.map((label, idx) => {
                        const color = data.datasets[idx]?.color?.(1) ?? styles.whiteText.color;
                        if (renderLegendItem) {
                            return renderLegendItem(label, color, idx);
                        }
                        return (
                            <View key={label} style={[styles.legendItem, legendItemStyle]}>
                                <View style={[styles.legendview, { backgroundColor: color }]} />
                                <Text style={[styles.legendText, legendTextStyle]}>{label}</Text>
                            </View>
                        );
                    })}
                </View>
            )}
        </View>
    );
};
