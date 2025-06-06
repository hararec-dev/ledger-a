import { Text, View } from 'react-native';
import type { LegendItemProps } from '@types';


export const LegendItem: React.FC<LegendItemProps> = ({ item, styles, legendItemStyle, legendTextStyle }) => (
    <View key={item.name} style={[styles.legendItem, legendItemStyle]}>
        <View style={[styles.legendColor, { backgroundColor: item.color }]} />
        <Text style={[styles.legendText, legendTextStyle]}>{item.name}</Text>
    </View>
);
