import type { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';

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
