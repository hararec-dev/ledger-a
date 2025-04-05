import { View } from 'react-native';
import { useStyles } from '../../../hooks';
import type { PaginationDotsProps } from '../../../types';

export const PaginationDots: React.FC<PaginationDotsProps> = ({ currentIndex, numberOfIndexes, style }) => {
    const styles = useStyles(({ colors }) => ({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: currentIndex === numberOfIndexes - 1 ? 'flex-start' : 'center',
        },
        dot: {
            height: 5,
            borderRadius: 10,
            marginHorizontal: 2,
        },
        dotActive: {
            backgroundColor: colors.fuchsia[600],
            width: 25,
        },
        dotInactive: {
            backgroundColor: colors.fuchsia[900],
            width: 5,
        },
    }));

    return (
        <View style={[styles.container, style]}>
            {new Array(numberOfIndexes).fill(undefined).map((_, index) => (
                <View
                    key={index}
                    style={[styles.dot, {
                        backgroundColor: currentIndex === index
                            ? styles.dotActive.backgroundColor
                            : styles.dotInactive.backgroundColor,
                        width: currentIndex === index
                            ? styles.dotActive.width
                            : styles.dotInactive.width,
                    }]}
                />
            ))}
        </View>
    );
};
