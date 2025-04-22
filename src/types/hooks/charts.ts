import type { DraggablePosition } from '../components';

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

export interface UseDraggableGridItemProps {
    keyProp: string;
    idx: number;
    initialPosition: DraggablePosition;
    order: string[];
    positions: import('react-native-reanimated').SharedValue<DraggablePosition[]>;
    getIndexFromPosition: (x: number, y: number) => number;
    onDrop: (key: string, newIndex: number) => void;
    itemSize: number;
}
