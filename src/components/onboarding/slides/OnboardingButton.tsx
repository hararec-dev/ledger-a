import { Text, View } from 'react-native';
import { GradientButton, Icon } from '@components';
import { useCurrentStatusAppStore, useGradient, useStyles } from '@hooks';
import { PAGINATION_BUTTONS_CONFIG } from '@config';
import type { OnboardingButtonProps } from '@types';


export const OnboardingButton: React.FC<OnboardingButtonProps> = ({ onNavigate }) => {
    const { legalConditionsAreAccepted } = useCurrentStatusAppStore();
    const { gradientLight } = useGradient();
    const styles = useStyles(({ colors, Platform, screenWidth, fonts }) => ({
        buttonText: {
            color: colors.coolGray[50],
            fontSize: 18,
            fontFamily: fonts.quicksand.bold,
        },
        disabledButton: {
            opacity: 0.4,
            backgroundColor: colors.coolGray[300],
            borderColor: colors.coolGray[400],
        },
        horizontalContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            columnGap: 10,
            ...(Platform.OS === 'ios' && { paddingHorizontal: 20 }),
        },
        gradientButton: {
            width: screenWidth * 0.7,
        },
    }));

    return (
        <GradientButton
            onPress={() => onNavigate()}
            gradientColors={gradientLight}
            disabled={!legalConditionsAreAccepted}
            disabledStyle={styles.disabledButton}
            style={styles.gradientButton}
        >
            <View style={styles.horizontalContainer}>
                <Icon name="golf-outline" size={24} color={styles.buttonText.color} />
                <Text style={styles.buttonText}>{PAGINATION_BUTTONS_CONFIG.BUTTON_TITLES.START}</Text>
            </View>
        </GradientButton >
    );
};
