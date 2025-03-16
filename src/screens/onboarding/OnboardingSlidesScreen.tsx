import { useCallback, useRef, useState } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, useWindowDimensions, View } from "react-native";
import { OnboardingButtons, PaginationDots, SlideItem } from "../../components";
import { useOnboardingSlides, useThemeStore } from "../../hooks";
import type { OnboardingSlidesProps, Slide } from "../../types";

export const OnboardingSlidesScreen: React.FC<OnboardingSlidesProps> = ({ navigation }) => {
    const { colors } = useThemeStore();
    const { width, height } = useWindowDimensions();
    const { slides } = useOnboardingSlides({ width: width * 0.7, height: height * 0.5 });
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const flatListRef = useRef<FlatList<Slide>>(null);
    const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
        setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
    }, []);
    const scrollToSlide = useCallback((index: number) => {
        flatListRef.current?.scrollToIndex({
            index,
            animated: true,
        });
    }, []);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.violet[200],
        }}>
            <FlatList
                ref={flatListRef}
                data={slides}
                keyExtractor={item => item.title}
                renderItem={({ item }) =>
                    <SlideItem {...item} />
                }
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
            />
            <PaginationDots
                currentIndex={currentSlideIndex}
                numberOfIndexes={slides.length}
            />
            <OnboardingButtons
                currentIndex={currentSlideIndex}
                onNext={scrollToSlide}
                onNavigate={navigation.navigate}
            />
        </View>
    );
};
