import { Text, View } from 'react-native';
import { useStyles } from '../../hooks';
import type { LegalItemProps } from '../../types';


export const LegaInfoItem: React.FC<LegalItemProps> = ({ item }) => {
    const styles = useStyles(({ colors, isDark, fonts }) => ({
        subtitle: {
            fontSize: 16,
            fontWeight: '500',
            marginBottom: 8,
            color: isDark ? colors.coolGray[400] : colors.coolGray[500],
            fontFamily: fonts.nunito.regular,
        },
        subitemText: {
            fontSize: 13,
            marginLeft: 15,
            color: isDark ? colors.coolGray[300] : colors.coolGray[600],
            lineHeight: 20,
            fontFamily: fonts.nunito.regular,
        },
        subtitleContainer: {
            marginBottom: 15,
        },
    }));

    return (
        <View style={styles.subtitleContainer}>
            {item.text && <Text style={styles.subtitle}>⁕ {item.text}</Text>}
            {item.subitems?.map((subitem, index) => (
                <Text style={styles.subitemText} key={`subitem-${index}`}>- {subitem}</Text>
            ))}
        </View>
    );
};
