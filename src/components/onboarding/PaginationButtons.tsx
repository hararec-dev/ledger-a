import { View, StyleSheet } from "react-native";
import { FAB } from "@rneui/themed";
import type { PaginationButtonsProps } from "../../types";
import { useThemeStore } from "../../hooks";
import { Platform } from "react-native";


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
                    name: 'golf-outline',
                    type: 'ionicon',
                    color: 'white',
                }}
                title="Empezar"
                size='large'
                color={colors.fuchsia[600]}
                onPress={() => onNavigate('OnboardingSetup')}
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
                            name: 'arrow-back-circle-outline',
                            type: 'ionicon',
                            color: 'white',
                        }}
                        size='large'
                        color={colors.fuchsia[600]}
                        onPress={() => onNext(currentIndex - 1)}
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
                        name: 'arrow-forward-circle-outline',
                        type: 'ionicon',
                        color: 'white',
                    }}
                    size='large'
                    color={colors.fuchsia[600]}
                    onPress={() => onNext(currentIndex + 1)}
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
    },
    androidShadow: {
        shadowColor: '#000',
    }
});