import { Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { GradientButton, IonIcon } from '../../../components';
import { useCurrentStatusAppStore, useGradient } from '../../../hooks';
import { colorPalette, PAGINATION_BUTTONS_CONFIG } from '../../../config';
import type { OnboardingButtonProps } from '../../../types';


export const OnboardingButton: React.FC<OnboardingButtonProps> = ({ onNavigate }) => {
    const { legalConditionsAreAccepted } = useCurrentStatusAppStore();
    const { gradientLight } = useGradient();
    const { width } = useWindowDimensions();

    return (
        <GradientButton
            onPress={() => onNavigate()}
            gradientColors={gradientLight}
            disabled={!legalConditionsAreAccepted}
            disabledStyle={styles.disabledButton}
            style={{ width: width * 0.7 }}
        >
            <View style={styles.horizontalContainer}>
                <IonIcon name="golf-outline" size={24} color={colorPalette.coolGray[50]} />
                <Text style={styles.buttonText}>{PAGINATION_BUTTONS_CONFIG.BUTTON_TITLES.START}</Text>
            </View>
        </GradientButton >
    );
};

const styles = StyleSheet.create({
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
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        columnGap: 10,
        ...(Platform.OS === 'ios' && { paddingHorizontal: 20 }),
    },
});
