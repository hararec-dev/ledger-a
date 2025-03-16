import { View, StyleSheet, Platform } from "react-native";
import { FAB } from "@rneui/themed";
import { useThemeStore } from "../../hooks";
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

    const renderFinishButton = () => (
        <View style={[
            styles.buttonContainer,
            Platform.OS === 'android' && styles.androidShadow
        ]}>
            <FAB
                icon={{
                    name: PAGINATION_BUTTONS_CONFIG.ICONS.START,
                    type: PAGINATION_BUTTONS_CONFIG.ICON_TYPE,
                    color: PAGINATION_BUTTONS_CONFIG.ICON_COLOR,
                }}
                title={PAGINATION_BUTTONS_CONFIG.BUTTON_TITLES.START}
                size={PAGINATION_BUTTONS_CONFIG.ICON_SIZE}
                color={colors.fuchsia[600]}
                onPress={() => onNavigate(PAGINATION_BUTTONS_CONFIG.NAVIGATION.SETUP)}
                buttonStyle={styles.fabButton}
                titleStyle={styles.fabTitle}
            />
        </View>
    );

    const renderNavigationButtons = () => (
        <>
            {currentIndex > 0 && (
                <View style={[
                    styles.buttonContainer,
                    Platform.OS === 'android' && styles.androidShadow
                ]}>
                    <FAB
                        icon={{
                            name: PAGINATION_BUTTONS_CONFIG.ICONS.PREVIOUS,
                            type: PAGINATION_BUTTONS_CONFIG.ICON_TYPE,
                            color: PAGINATION_BUTTONS_CONFIG.ICON_COLOR,
                        }}
                        size={PAGINATION_BUTTONS_CONFIG.ICON_SIZE}
                        title={PAGINATION_BUTTONS_CONFIG.BUTTON_TITLES.PREVIOUS}
                        color={colors.fuchsia[600]}
                        onPress={() => onNext(currentIndex - 1)}
                        buttonStyle={styles.fabButton}
                        titleStyle={styles.fabTitle}
                    />
                </View>
            )}
            <View style={styles.spacer} />
            <View style={[
                styles.buttonContainer,
                Platform.OS === 'android' && styles.androidShadow
            ]}>
                <FAB
                    icon={{
                        name: PAGINATION_BUTTONS_CONFIG.ICONS.NEXT,
                        type: PAGINATION_BUTTONS_CONFIG.ICON_TYPE,
                        color: PAGINATION_BUTTONS_CONFIG.ICON_COLOR,
                    }}
                    size={PAGINATION_BUTTONS_CONFIG.ICON_SIZE}
                    title={PAGINATION_BUTTONS_CONFIG.BUTTON_TITLES.NEXT}
                    color={colors.fuchsia[600]}
                    onPress={() => onNext(currentIndex + 1)}
                    buttonStyle={styles.fabButton}
                    titleStyle={styles.fabTitle}
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
    }
});