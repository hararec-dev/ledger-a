import { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { ColorCircle } from './ColorCircle';
import { useStyles } from '@hooks';
import type { ListRenderItemInfo } from 'react-native';
import type { ColorGridProps } from '@types';


export const ColorGrid: React.FC<ColorGridProps> = ({ colors, selectedColor, onColorPress, numColumns }) => {
    const styles = useStyles(({ screenWidth }) => ({
        pageContainer: {
            width: screenWidth,
            alignItems: 'center',
            justifyContent: 'center',
        },
        grid: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 8,
            paddingBottom: 16,
        },
    }));
    const renderColorItem = useCallback(({ item }: ListRenderItemInfo<string>) => (
        <ColorCircle
            color={item}
            selected={selectedColor === item}
            onPress={() => onColorPress(item)}
        />
    ), [selectedColor, onColorPress]);

    return (
        <View style={styles.pageContainer}>
            <FlatList
                data={colors}
                keyExtractor={(item) => item}
                numColumns={numColumns}
                contentContainerStyle={styles.grid}
                renderItem={renderColorItem}
                scrollEnabled={false}
            />
        </View>
    );
};

