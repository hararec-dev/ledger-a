import { Platform, StyleSheet, Text, View } from "react-native";
import { CustomGradientButton, CustomIcon } from "../../custom";
import { useCurrentStatusAppStore, useGradient } from "../../../hooks";
import { colorPalette, PAGINATION_BUTTONS_CONFIG } from "../../../config";
import type { OnboardingButtonProps } from "../../../types";


export const OnboardingButton: React.FC<OnboardingButtonProps> = ({
    onNavigate
}) => {
    const { legalConditionsAreAccepted } = useCurrentStatusAppStore();
    const { gradientLight } = useGradient();

    return (
        <CustomGradientButton
            onPress={() => onNavigate(PAGINATION_BUTTONS_CONFIG.NAVIGATION.SETUP)}
            gradientColors={gradientLight}
            disabled={!legalConditionsAreAccepted}
            disabledStyle={styles.disabledButton}
        >
            <View style={styles.horizontalContainer}>
                <CustomIcon name="golf-outline" size={24} color={colorPalette.coolGray[50]} />
                <Text style={styles.buttonText}>{PAGINATION_BUTTONS_CONFIG.BUTTON_TITLES.START}</Text>
            </View>
        </CustomGradientButton >
    );
};

const styles = StyleSheet.create({
    formContainer: {
        rowGap: 15,
        width: '90%',
    },
    buttonText: {
        color: colorPalette.coolGray[50],
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Quicksand-Regular',
    },
    disabledButton: {
        opacity: 0.4,
        backgroundColor: colorPalette.coolGray[300],
        borderColor: colorPalette.coolGray[400],
        borderRadius: 10,
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        ...(Platform.OS === 'ios' && { paddingHorizontal: 20 }),
    }
});