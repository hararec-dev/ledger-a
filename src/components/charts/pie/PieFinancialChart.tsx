import { PieChart } from 'react-native-chart-kit';
import { useStyles } from '../../../hooks';
import type { PieFinancialChartProps } from '../../../types';
import { View } from 'react-native';
import { LegendItem } from './LegendItem';
import { CenterText } from './CenterText';


export const PieFinancialChart: React.FC<PieFinancialChartProps> = ({
    data,
    total,
    currency = 'MXN',
    containerStyle,
    titleStyle,
    amountStyle,
    legendContainerStyle,
    legendItemStyle,
    legendTextStyle,
    chartConfig: customChartConfig,
    showCenterText = true,
    centerTextPosition = {},
}) => {
    const styles = useStyles(({ screenWidth, isDark, colors }) => ({
        pieChartWidth: { width: screenWidth - 32 },
        container: {
            backgroundColor: isDark ? colors.coolGray[900] : colors.coolGray[50],
            borderRadius: 16,
            padding: 16,
            alignItems: 'center',
            justifyContent: 'center',
        },
        centeredTextContainer: {
            position: 'absolute',
            top: 70,
            left: 0,
            right: 0,
            alignItems: 'center',
            zIndex: 1,
        },
        centeredTitle: {
            color: isDark ? colors.coolGray[100] : colors.coolGray[900],
            fontSize: 20,
            fontWeight: '400',
        },
        centeredAmount: {
            color: isDark ? colors.coolGray[100] : colors.coolGray[900],
            fontSize: 22,
            fontWeight: 'bold',
        },
        legendContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 16,
            justifyContent: 'center',
        },
        legendItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 16,
            marginBottom: 4,
        },
        legendColor: {
            width: 14,
            height: 14,
            borderRadius: 2,
            marginRight: 6,
        },
        legendText: {
            color: isDark ? colors.coolGray[100] : colors.coolGray[900],
            fontSize: 13,
        },
    }));

    const chartConfig = {
        color: () => styles.legendText.color,
        ...customChartConfig,
    };

    const centerPosition = {
        top: centerTextPosition.top ?? 70,
        left: centerTextPosition.left ?? 0,
        right: centerTextPosition.right ?? 0,
        bottom: centerTextPosition.bottom ?? 0,
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <PieChart
                data={data}
                width={styles.pieChartWidth.width}
                height={220}
                chartConfig={chartConfig}
                accessor="amount"
                backgroundColor="transparent"
                paddingLeft="0"
                center={[0, 0]}
                hasLegend={false}
                absolute
            />

            <CenterText
                styles={styles}
                showCenterText={showCenterText}
                centerPosition={centerPosition}
                titleStyle={titleStyle}
                amountStyle={amountStyle}
                currency={currency}
                total={total}
            />

            <View style={[styles.legendContainer, legendContainerStyle]}>
                {data.map(item => (
                    <LegendItem
                        key={item.name}
                        item={item}
                        styles={styles}
                        legendItemStyle={legendItemStyle}
                        legendTextStyle={legendTextStyle}
                    />
                ))}
            </View>
        </View>
    );
};
