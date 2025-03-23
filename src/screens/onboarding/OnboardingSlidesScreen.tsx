import { useWindowDimensions, View, StyleSheet, FlatList } from 'react-native';
import { LegalAcceptanceFooter, OnboardingButton, PaginationDots } from '../../components';
import { useCustomNavigation, useOnboardingSlideLogic, useOnboardingSlides, useThemeStore } from '../../hooks';

export const OnboardingSlidesScreen = () => {
    const { colors } = useThemeStore();
    const { width, height } = useWindowDimensions();
    const slidesDimensions = { width: width * 0.7, height: height * 0.5 };
    const { slides } = useOnboardingSlides(slidesDimensions);
    const { goToSetup } = useCustomNavigation();

    const {
        flatListRef,
        currentSlideIndex,
        handleScroll,
        renderSlideItem
    } = useOnboardingSlideLogic(slides);

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
            paddingBottom: height * 0.05,
        }
    });

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
                    onNavigate={() => goToSetup('setup')}
                    style={styles.paginationButtonsStyle}
                />
                <LegalAcceptanceFooter />
            </View>
        </View>
    );
};
