import { TouchableOpacity } from 'react-native';
import { useStyles } from '@hooks';
import type { ColorCircleProps } from '@types';


export const ColorCircle: React.FC<ColorCircleProps> = ({ color, selected, onPress }) => {
    const styles = useStyles(({ screenWidth, colors, isDark }) => ({
        circle: {
            width: Math.floor((screenWidth * 0.7) / 8),
            height: Math.floor((screenWidth * 0.7) / 8),
            borderRadius: Math.floor((screenWidth * 0.7) / 8) / 2,
            margin: 4,
            backgroundColor: color,
            borderWidth: selected ? 3 : 0,
            borderColor: selected
                ? isDark
                    ? colors.coolGray[50]
                    : colors.gray[900]
                : 'transparent',
        },
    }));

    return (
        <TouchableOpacity
            style={styles.circle}
            onPress={onPress}
            activeOpacity={0.7}
        />
    );
};

