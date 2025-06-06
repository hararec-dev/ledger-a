import { useState, useMemo, useRef, useCallback } from 'react';
import { View, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { ColorGrid, ColorHeader, ColorPagination, ColorSelectionButton } from '@components';
import { useCurrentStatusAppStore, useStyles, useThemeStore } from '@hooks';
import type { PageItemProps } from '@types';

const COLORS_PER_ROW = 8;
const ROWS_PER_PAGE = 8;
const COLORS_PER_PAGE = COLORS_PER_ROW * ROWS_PER_PAGE;

export const ColorSelectionScreen = () => {
    const { getAllColors } = useThemeStore();
    const allColors = useMemo(() => getAllColors(), []);
    const { setSelectedColor: setSelectedAppColor } = useCurrentStatusAppStore();
    const totalPages = Math.ceil(allColors.length / COLORS_PER_PAGE);
    const flatListRef = useRef<FlatList>(null);
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [page, setPage] = useState(0);
    const styles = useStyles(({ isDark, colors }) => ({
        container: {
            flex: 1,
            backgroundColor: isDark ? colors.gray[900] : colors.coolGray[50],
        },
    }));

    const paginatedData = useMemo(() => {
        const pages = [];
        for (let i = 0; i < totalPages; i++) {
            pages.push(allColors.slice(i * COLORS_PER_PAGE, (i + 1) * COLORS_PER_PAGE));
        }
        return pages;
    }, [allColors, totalPages]);

    const handlePageChange = useCallback((index: number) => {
        setPage(index);
        flatListRef.current?.scrollToIndex({
            index,
            animated: true,
        });
    }, []);

    const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const pageIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
        if (pageIndex !== page && pageIndex >= 0 && pageIndex < totalPages) {
            setPage(pageIndex);
        }
    }, [page, totalPages]);

    const handleSelect = useCallback(async () => {
            await setSelectedAppColor(selectedColor);
    }, [selectedColor]);

    const handleColorPress = useCallback((color: string) => {
        setSelectedColor(color);
    }, []);

    const renderPage = useCallback(({ item: colorsForPage }: PageItemProps) => (
        <ColorGrid
            colors={colorsForPage}
            selectedColor={selectedColor}
            onColorPress={handleColorPress}
            numColumns={COLORS_PER_ROW}
        />
    ), [selectedColor, handleColorPress]);

    return (
        <View style={styles.container}>
            <ColorHeader
                title="Selecciona un color"
                onBackPress={(() => { })}
            />
            <FlatList
                ref={flatListRef}
                data={paginatedData}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={renderPage}
                keyExtractor={(_, index) => `page-${index}`}
                onMomentumScrollEnd={handleScroll}
            />
            <ColorPagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            <ColorSelectionButton
                selectedColor={selectedColor}
                onPress={handleSelect}
            />
        </View>
    );
};

