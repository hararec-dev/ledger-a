import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { SlideItem } from '../../components';
import { SLIDE_INTERVAL_MS } from '../../config';
import type { Slide } from '../../types';

export const useOnboardingSlideLogic = (slides: Slide[]) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const flatListRef = useRef<FlatList<Slide>>(null);

    const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
        setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
    }, []);

    const handleSlideNavigation = useCallback((index: number) => {
        flatListRef.current?.scrollToIndex({
            index,
            animated: true,
        });
        setCurrentSlideIndex(index);
    }, []);

    useEffect(() => {
        const autoPlayInterval = setInterval(() => {
            const nextIndex = (currentSlideIndex + 1) % slides.length;
            handleSlideNavigation(nextIndex);
        }, SLIDE_INTERVAL_MS);

        return () => clearInterval(autoPlayInterval);
    }, [currentSlideIndex, slides.length, handleSlideNavigation]);

    const renderSlideItem = useCallback(({ item }: { item: Slide }) => (
        <SlideItem {...item} />
    ), []);

    return {
        flatListRef,
        currentSlideIndex,
        handleScroll,
        handleSlideNavigation,
        renderSlideItem,
    };
};
