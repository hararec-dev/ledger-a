import { useEffect, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useThemeStore } from '../../hooks';

export const usePageIndicatorAnimation = ({ typeSetup }: { typeSetup: string }) => {
    const { colors } = useThemeStore();
    const animations = useRef({
        glow: new Animated.Value(0),
        scale: new Animated.Value(1),
    }).current;

    const startAnimation = () => {
        const { glow, scale } = animations;
        glow.setValue(0);
        scale.setValue(1);

        const createParallelAnimation = (glowValue: number, scaleValue: number) =>
            Animated.parallel([
                Animated.timing(glow, {
                    toValue: glowValue,
                    duration: 700,
                    useNativeDriver: false,
                }),
                Animated.timing(scale, {
                    toValue: scaleValue,
                    duration: 700,
                    useNativeDriver: false,
                }),
            ]);

        Animated.sequence([
            Animated.delay(200),
            createParallelAnimation(1, 2),
            Animated.delay(200),
            createParallelAnimation(0, 1),
        ]).start();
    };

    useEffect(() => {
        startAnimation();
    }, [typeSetup]);

    const glowStyle = useMemo(() => ({
        textShadowColor: colors.coolGray[50],
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: animations.glow.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 50],
        }),
        opacity: animations.glow.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.7, 1, 0.7],
        }),
        transform: [{ scale: animations.scale }],
    }), [animations]);

    return { glowStyle };
};
