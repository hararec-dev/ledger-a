import { View, StyleSheet, Platform } from "react-native";
import { LegalAcceptanceFooter } from "./LegalAcceptanceFooter";
import { PaginationFAB } from "./PaginationFAB";
import { useCurrentStatusAppStore, useThemeStore } from "../../hooks";
import { PAGINATION_BUTTONS_CONFIG } from "../../config";
import type { PaginationButtonsProps } from "../../types";


export const PaginationButtons: React.FC<PaginationButtonsProps> = ({
    currentIndex,
    numberOfIndexes,
    style,
    onNext,
    onNavigate
}) => {
    const isLastPage = currentIndex === numberOfIndexes - 1;
    const { colors } = useThemeStore();
    const { legalConditionsAreAccepted } = useCurrentStatusAppStore();

    const renderFinishButton = () => (
        <View style={[
            Platform.OS === 'android' && styles.androidShadow,
            styles.finishButtonContainer
        ]}>
            <View style={styles.finishButtonWrapper}>
                <PaginationFAB
                    icon={PAGINATION_BUTTONS_CONFIG.ICONS.START}
                    title={PAGINATION_BUTTONS_CONFIG.BUTTON_TITLES.START}
                    onPress={() => onNavigate(PAGINATION_BUTTONS_CONFIG.NAVIGATION.SETUP)}
                    colors={colors}
                    disabled={!legalConditionsAreAccepted}
                    disabledStyle={[{ backgroundColor: colors.fuchsia[300] }, styles.fabButton]}
                    disabledTitleStyle={[{ color: colors.coolGray[200] }, styles.fabTitle]}
                />
            </View>
            <LegalAcceptanceFooter />
        </View>
    );

    const renderNavigationButtons = () => (
        <>
            {currentIndex > 0 && (
                <View style={[
                    styles.buttonContainer,
                    Platform.OS === 'android' && styles.androidShadow
                ]}>
                    <PaginationFAB
                        icon={PAGINATION_BUTTONS_CONFIG.ICONS.PREVIOUS}
                        title={PAGINATION_BUTTONS_CONFIG.BUTTON_TITLES.PREVIOUS}
                        onPress={() => onNext(currentIndex - 1)}
                        colors={colors}
                    />
                </View>
            )}
            <View style={styles.spacer} />
            <View style={[
                styles.buttonContainer,
                Platform.OS === 'android' && styles.androidShadow
            ]}>
                <PaginationFAB
                    icon={PAGINATION_BUTTONS_CONFIG.ICONS.NEXT}
                    title={PAGINATION_BUTTONS_CONFIG.BUTTON_TITLES.NEXT}
                    onPress={() => onNext(currentIndex + 1)}
                    colors={colors}
                />
            </View>
        </>
    );

    return (
        <View style={[
            styles.container,
            isLastPage ? styles.centeredContainer : styles.spacedContainer,
            style
        ]}>
            {isLastPage ? renderFinishButton() : renderNavigationButtons()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
    },
    centeredContainer: {
        justifyContent: 'center',
    },
    spacedContainer: {
        justifyContent: 'space-between',
    },
    spacer: {
        flex: 1,
    },
    buttonContainer: {
        borderRadius: 50,
        overflow: 'hidden',
        height: '80%',
    },
    androidShadow: {
        shadowColor: '#000',
    },
    fabButton: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fabTitle: {
        marginTop: 0,
        lineHeight: Platform.OS === 'ios' ? 0 : undefined,
    },
    finishButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    finishButtonWrapper: {
        overflow: 'hidden',
        height: '80%',
        borderRadius: 50,
    }
});