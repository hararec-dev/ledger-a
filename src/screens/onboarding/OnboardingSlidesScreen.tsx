import { View, FlatList } from 'react-native';
import { LegalAcceptanceFooter, OnboardingButton, PaginationDots } from '../../components';
import { useCustomNavigation, useLastActivity, useOnboardingSlideLogic, useOnboardingSlides, useStyles } from '../../hooks';


export const OnboardingSlidesScreen = () => {
    const { slides } = useOnboardingSlides();
    const { goToSetup } = useCustomNavigation();
    const {
        flatListRef,
        currentSlideIndex,
        handleScroll,
        renderSlideItem,
    } = useOnboardingSlideLogic(slides);
    const styles = useStyles(({ colors, screenHeight }) => ({
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
            height: screenHeight * 0.3,
        },
        paginationButtonsStyle: {
            paddingBottom: screenHeight * 0.05,
        },
    }));

    useLastActivity(() => ({
        path: 'OnboardingSlides',
    }), []);


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
