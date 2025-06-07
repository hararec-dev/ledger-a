import { View, TouchableOpacity } from 'react-native';
import { useGradient, useStyles } from '@hooks';
import { Icon } from '@components/icon';
import { GradientText } from '@components/gradient';
import type { ColorHeaderProps } from '@types';


export const ColorHeader: React.FC<ColorHeaderProps> = ({ title, onBackPress }) => {
    const styles = useStyles(({ colors, isDark }) => ({
        header: {
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        backButton: {
            position: 'absolute',
            left: 35,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            padding: 2,
            backgroundColor: isDark ? colors.coolGray[800] : colors.coolGray[200],
        },
        gradientText: {
            textAlign: 'center',
        },
        icon: {
            color: isDark ? colors.coolGray[50] : colors.coolGray[900],
            size: 35,
        },
    }));
    const { themeGradient } = useGradient();

    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => onBackPress()}
                style={styles.backButton}
            >
                <Icon
                    name="arrow-back"
                    size={styles.icon.size}
                    color={styles.icon.color}
                />
            </TouchableOpacity>
            <GradientText
                text={title}
                fontSize={25}
                gradientColors={themeGradient}
                style={styles.gradientText}
            />
        </View>
    );
};
