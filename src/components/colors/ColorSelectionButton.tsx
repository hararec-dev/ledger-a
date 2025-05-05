import { Text } from 'react-native';
import { GradientButton } from '../gradient';
import { useStyles } from '../../hooks';
import type { ColorSelectionButtonProps } from '../../types';

export const ColorSelectionButton: React.FC<ColorSelectionButtonProps> = ({
    selectedColor,
    onPress,
    buttonText = 'Seleccionar',
}) => {
    const styles = useStyles(({ colors, isDark }) => ({
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
            color: isDark ? colors.coolGray[50] : colors.gray[900],
            fontSize: 18,
            fontFamily: 'Quicksand-Bold',
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
