import Animated from 'react-native-reanimated';
import { GestureDetector } from 'react-native-gesture-handler';
import { useDraggableGridItem } from '../../hooks';
import type { UseDraggableGridItemProps } from '../../types';


export const DraggableGridItem: React.FC<UseDraggableGridItemProps & { component: React.ReactNode }> = ({
    component,
    ...props
}) => {
    const { panGesture, animatedStyle } = useDraggableGridItem(props);
    return (
        <GestureDetector gesture={panGesture}>
            <Animated.View style={animatedStyle}>{component}</Animated.View>
        </GestureDetector>
    );
};
