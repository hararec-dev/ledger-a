import type { StyleProp, ViewStyle } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';

export type DraggableItem = {
    key: string;
    component: React.ReactElement
};

export type DraggablePosition = {
    x: number;
    y: number
};

export interface DraggableGridProps {
    items: DraggableItem[];
    numColumns: number;
    itemSize: number;
    containerStyle?: StyleProp<ViewStyle>;
}

export interface UseDraggableGridProps {
    items: DraggableItem[];
    numColumns: number;
    itemSize: number;
}

export interface UseDraggableGridReturn {
    order: string[];
    positions: SharedValue<DraggablePosition[]>;
    initialPositions: DraggablePosition[];
    getIndexFromPosition: (x: number, y: number) => number;
    onDrop: (key: string, newIndex: number) => void;
}

export interface UseDraggableGridItemProps {
    keyProp: string;
    idx: number;
    initialPosition: DraggablePosition;
    order: string[];
    positions: SharedValue<DraggablePosition[]>;
    getIndexFromPosition: (x: number, y: number) => number;
    onDrop: (key: string, newIndex: number) => void;
    itemSize: number;
}
