import { useState, useEffect } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import type {
    DraggablePosition,
    UseDraggableGridProps,
    UseDraggableGridReturn,
} from '@types';

export const useDraggableGrid = ({
    items,
    numColumns,
    itemSize,
}: UseDraggableGridProps): UseDraggableGridReturn => {
    const [order, setOrder] = useState(items.map((it) => it.key));

    // Precalcula las posiciones iniciales estáticas (JS)
    const initialPositions: DraggablePosition[] = items.map((_, index) => ({
        x: (index % numColumns) * itemSize,
        y: Math.floor(index / numColumns) * itemSize,
    }));

    // Array de valores compartidos para las posiciones finales de reposo (compatible con worklet)
    const positions = useSharedValue<DraggablePosition[]>(initialPositions);

    // Función auxiliar para obtener el índice de cuadrícula más cercano (worklet)
    const getIndexFromPosition = (x: number, y: number) => {
        'worklet';
        const col = Math.round(x / itemSize);
        const row = Math.round(y / itemSize);
        const maxRow = Math.floor((items.length - 1) / numColumns);
        const c = Math.max(0, Math.min(col, numColumns - 1));
        const r = Math.max(0, Math.min(row, maxRow));
        return r * numColumns + c;
    };

    const onDrop = (key: string, newIndex: number) => {
        setOrder((prev) => {
            const oldIndex = prev.findIndex((k) => k === key);
            if (oldIndex === newIndex) {return prev;}
            const next = [...prev];
            const temp = next[newIndex];
            next[newIndex] = key;
            next[oldIndex] = temp;
            return next;
        });
    };

    // Cuando cambia el orden, actualiza las posiciones compartidas en un worklet
    useEffect(() => {
        positions.value = order.map((_, idx) => ({
            x: (idx % numColumns) * itemSize,
            y: Math.floor(idx / numColumns) * itemSize,
        }));
    }, [order, numColumns, itemSize]);

    return {
        order,
        positions,
        initialPositions,
        getIndexFromPosition,
        onDrop,
    };
};
