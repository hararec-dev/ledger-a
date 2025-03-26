import { View } from 'react-native';
import { useThemeStore } from '../../../hooks';
import type { PaginationDotsProps } from '../../../types';

export const PaginationDots: React.FC<PaginationDotsProps> = ({
    currentIndex,
    numberOfIndexes,
    style,
}) => {
    const { colors } = useThemeStore();

    return (
        <View style={[{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: currentIndex === numberOfIndexes - 1 ? 'flex-start' : 'center',
        }, style]}>
            {new Array(numberOfIndexes).fill(undefined).map((_, index) => (
                <View
                    key={index}
                    style={{
                        height: 5,
                        borderRadius: 10,
                        marginHorizontal: 2,
                        backgroundColor: currentIndex === index
                            ? colors.fuchsia[600]
                            : colors.fuchsia[900],
                        width: currentIndex === index ? 25 : 5,
                    }}
                />
            ))}
        </View>
    );
};
