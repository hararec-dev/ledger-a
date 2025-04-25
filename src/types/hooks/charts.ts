export type DatasetConfig = {
    data: number[];
    color?: (opacity?: number) => string;
    strokeWidth?: number;
    withDots?: boolean;
    key?: string | number;
};

export interface ChartDataParams {
    labels: string[];
    datasets: DatasetConfig[];
    legends: string[];
}
