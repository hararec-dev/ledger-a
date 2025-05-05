import { View, TouchableOpacity } from 'react-native';
import { useStyles } from '../../hooks';
import type { ColorPaginationProps } from '../../types';

export const ColorPagination: React.FC<ColorPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const styles = useStyles(({ isDark, colors }) => ({
        paginationContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 24,
            marginTop: 8,
        },
        paginationDot: {
            width: 12,
            height: 12,
            borderRadius: 6,
            marginHorizontal: 4,
            backgroundColor: isDark ? colors.coolGray[50] : colors.gray[900],
        },
        paginationDotActive: {
            opacity: 1,
        },
        paginationDotInactive: {
            opacity: 0.3,
        },
    }));

    return (
        <View style={styles.paginationContainer}>
            {Array.from({ length: totalPages }).map((_, i) => (
                <TouchableOpacity
                    key={i}
                    style={[
                        styles.paginationDot,
                        currentPage === i ? styles.paginationDotActive : styles.paginationDotInactive,
                    ]}
                    onPress={() => onPageChange(i)}
                />
            ))}
        </View>
    );
};
