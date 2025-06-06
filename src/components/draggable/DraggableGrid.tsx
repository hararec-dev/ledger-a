import { View, StyleSheet } from 'react-native';
import { useDraggableGrid } from '@hooks';
import { DraggableGridItem } from '@components/draggable/DraggableGridItem';
import type { DraggableGridProps } from '@types';


export const DraggableGrid: React.FC<DraggableGridProps> = ({
    items,
    numColumns,
    itemSize,
    containerStyle,
}) => {
    const {
        order,
        positions,
        initialPositions,
        getIndexFromPosition,
        onDrop,
    } = useDraggableGrid({ items, numColumns, itemSize });

    return (
        <View
            style={[
                styles.container,
                containerStyle,
                { width: numColumns * itemSize, height: Math.ceil(items.length / numColumns) * itemSize },
            ]}
        >
            {items.map((item, idx) => {
                const key = item.key;
                return (
                    <DraggableGridItem
                        key={key}
                        idx={idx}
                        keyProp={key}
                        initialPosition={initialPositions[idx]}
                        order={order}
                        positions={positions}
                        getIndexFromPosition={getIndexFromPosition}
                        onDrop={onDrop}
                        itemSize={itemSize}
                        component={item.component}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'relative',
    },
});
