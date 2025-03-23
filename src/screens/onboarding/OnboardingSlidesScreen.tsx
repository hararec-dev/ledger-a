import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, useWindowDimensions, View, StyleSheet } from 'react-native';
import { LegalAcceptanceFooter, OnboardingButton, PaginationDots, SlideItem } from '../../components';
import { useOnboardingSlides, useThemeStore } from '../../hooks';
import { SLIDE_INTERVAL_MS } from '../../config';
import type { OnboardingSlidesProps, Slide } from '../../types';


export const OnboardingSlidesScreen: React.FC<OnboardingSlidesProps> = ({ navigation }) => {
    const { colors } = useThemeStore();
    const { width, height } = useWindowDimensions();
    const slidesDimensions = { width: width * 0.7, height: height * 0.5 };
    const { slides } = useOnboardingSlides(slidesDimensions);
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

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.violet[200],
        },
        controlsContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            rowGap: 40,
            height: height * 0.3,
        },
        paginationButtonsStyle: {
            flex: 1,
            paddingHorizontal: width * 0.3,
            paddingBottom: height * 0.05,
        }
    });

    const renderSlideItem = useCallback(({ item }: { item: Slide }) => (
        <SlideItem {...item} />
    ), []);

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={slides}
                keyExtractor={item => item.title}
                renderItem={renderSlideItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
            />
            <View style={styles.controlsContainer}>
                <PaginationDots
                    currentIndex={currentSlideIndex}
                    numberOfIndexes={slides.length}
                />
                <OnboardingButton
                    currentIndex={currentSlideIndex}
                    numberOfIndexes={slides.length}
                    onNext={handleSlideNavigation}
                    onNavigate={navigation.navigate}
                    style={styles.paginationButtonsStyle}
                />
                <LegalAcceptanceFooter />
            </View>
        </View>
    );
};
