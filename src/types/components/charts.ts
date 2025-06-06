import type { TextStyle, ViewStyle } from 'react-native';
import type { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';
import type { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';

export interface DataPoint {
    value: number;
    label: string;
}

export interface CartesianPlaneChartProps {
    data: DataPoint[];
    height?: number;
    yAxisLabel?: string;
    yAxisSuffix?: string;
    title?: string;
    chartConfig?: Partial<ChartConfig>;
}

export interface CustomLineChartProps {
    data: LineChartData;
    chartConfig?: ChartConfig;
    width?: number;
    height?: number;
    style?: ViewStyle;
    legendStyle?: ViewStyle;
    legendItemStyle?: ViewStyle;
    legendTextStyle?: TextStyle;
    withShadow?: boolean;
    withInnerLines?: boolean;
    withOuterLines?: boolean;
    withVerticalLines?: boolean;
    bezier?: boolean;
    fromZero?: boolean;
    yLabelsOffset?: number;
    segments?: number;
    yAxisSuffix?: string;
    yAxisInterval?: number;
    renderLegendItem?: (label: string, color: string, index: number) => React.ReactNode;
}

export interface PieChartData {
    name: string;
    amount: number;
    color: string;
    legendFontColor: string;
    legendFontSize: number;
}

export interface PieFinancialChartProps {
    data: PieChartData[];
    total: number;
    currency?: string;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    amountStyle?: TextStyle;
    legendContainerStyle?: ViewStyle;
    legendItemStyle?: ViewStyle;
    legendTextStyle?: TextStyle;
    chartConfig?: Partial<ChartConfig>;
    showCenterText?: boolean;
    centerTextPosition?: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    };
}

export interface CenterTextProps {
    styles: {
        centeredTextContainer: ViewStyle;
        centeredTitle: TextStyle;
        centeredAmount: TextStyle;
    };
    showCenterText: boolean;
    centerPosition: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    };
    titleStyle?: TextStyle;
    amountStyle?: TextStyle;
    currency: string;
    total: number;
}

export interface LegendItemProps {
    item: PieChartData;
    styles: {
        legendItem: ViewStyle;
        legendColor: ViewStyle;
        legendText: TextStyle;
    };
    legendItemStyle?: ViewStyle;
    legendTextStyle?: TextStyle;
}
