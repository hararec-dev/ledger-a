import { useEffect } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming, withSequence, withDelay } from 'react-native-reanimated';

export const useChartAnimation = () => {
    const chartOpacity = useSharedValue(0);
    const chartScale = useSharedValue(0.5);
    const chartProgress = useSharedValue(0);

    const animatedChartStyle = useAnimatedStyle(() => {
        return {
            opacity: chartOpacity.value,
            transform: [{ scale: chartScale.value }],
        };
    });

    const animatedLineStyle = useAnimatedStyle(() => {
        return {
            width: `${chartProgress.value * 100}%`,
            overflow: 'hidden',
        };
    });

    useEffect(() => {
        chartOpacity.value = withDelay(300, withTiming(1, { duration: 400 }));
        chartScale.value = withDelay(300, withTiming(1, { duration: 400 }));

        chartProgress.value = withDelay(300, withSequence(
            withTiming(0.05, { duration: 100 }),
            withTiming(1, { duration: 1200 })
        ));
    }, []);

    return {
        animatedChartStyle,
        animatedLineStyle,
        chartProgress,
    };
};
