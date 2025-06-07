import { Text } from 'react-native';
import { GradientButton } from '@components/gradient';
import { useStyles } from '@hooks';
import type { ColorSelectionButtonProps } from '@types';

export const ColorSelectionButton: React.FC<ColorSelectionButtonProps> = ({
    selectedColor,
    onPress,
    buttonText = 'Seleccionar',
}) => {
    const styles = useStyles(({ colors, fonts }) => ({
        selectButton: {
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 30,
            marginHorizontal: 40,
            borderRadius: 15,
        },
        selectGradientButton: {
            width: '100%',
            borderRadius: 15,
        },
        selectButtonText: {
            color: colors.coolGray[50],
            fontSize: 18,
            fontFamily: fonts.quicksand.bold,
        },
        disabledButton: {
            opacity: 0.4,
            backgroundColor: colors.coolGray[300],
        },
    }));

    return (
        <GradientButton
            onPress={onPress}
            disabled={!selectedColor}
            disabledStyle={styles.disabledButton}
            style={styles.selectButton}
            gradientStyle={styles.selectGradientButton}
        >
            <Text style={styles.selectButtonText}>{buttonText}</Text>
        </GradientButton>
    );
};
