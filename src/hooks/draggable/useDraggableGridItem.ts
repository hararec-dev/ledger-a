import { Gesture } from 'react-native-gesture-handler';
import {
    runOnJS,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import type { DraggablePosition, UseDraggableGridItemProps } from '@types';


export const useDraggableGridItem = ({
    keyProp,
    initialPosition,
    order,
    positions,
    getIndexFromPosition,
    onDrop,
    itemSize,
}: UseDraggableGridItemProps) => {
    const offset = useSharedValue<DraggablePosition>(initialPosition);
    const isDragging = useSharedValue<boolean>(false);

    useAnimatedReaction(
        () => {
            'worklet';
            const posIndex = order.findIndex((k) => k === keyProp);
            return positions.value[posIndex] || initialPosition;
        },
        (newPos: DraggablePosition) => {
            if (!isDragging.value) {
                offset.value = newPos;
            }
        }
    );

    const panGesture = Gesture.Pan()
        .onBegin(() => {
            isDragging.value = true;
        })
        .onUpdate((event) => {
            offset.value = {
                x: initialPosition.x + event.translationX,
                y: initialPosition.y + event.translationY,
            };
        })
        .onEnd(() => {
            const newIndex = getIndexFromPosition(offset.value.x, offset.value.y);
            runOnJS(onDrop)(keyProp, newIndex);
            isDragging.value = false;
        });

    const animatedStyle = useAnimatedStyle(() => {
        const { x, y } = offset.value;
        return {
            position: 'absolute',
            width: itemSize,
            height: itemSize,
            transform: [
                { translateX: withTiming(x) },
                { translateY: withTiming(y) },
            ],
            zIndex: isDragging.value ? 1 : 0,
        };
    });

    return { panGesture, animatedStyle };
};
