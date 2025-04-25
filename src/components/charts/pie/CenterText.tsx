import { Text, View } from 'react-native';
import type { CenterTextProps } from '../../../types';


export const CenterText: React.FC<CenterTextProps> = ({ styles, showCenterText, centerPosition, titleStyle, amountStyle, currency, total }) => {
    if (!showCenterText) {return null;}
    return (
        <View style={[styles.centeredTextContainer, centerPosition]}>
            <Text style={[styles.centeredTitle, titleStyle]}>Todos</Text>
            <Text style={[styles.centeredAmount, amountStyle]}>
                {currency} {total.toLocaleString('es-MX')}
            </Text>
        </View>
    );
};
