import { Text, TouchableOpacity } from 'react-native';
import type { LegalLinkProps } from '@types';
import { useStyles } from '@hooks';

export const LegalLink: React.FC<LegalLinkProps> = ({ onPress, text }) => {
    const styles = useStyles(({ colors }) => ({
        linkText: {
            textDecorationLine: 'underline',
            fontSize: 12,
            marginLeft: 4,
            color: colors.coolGray[500],
        },
    }));
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.linkText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

