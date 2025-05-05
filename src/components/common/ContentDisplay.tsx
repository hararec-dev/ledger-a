import { Text, View } from 'react-native';
import { useStyles } from '../../hooks';
import type { ContentDisplayProps } from '../../types';


export const ContentDisplay = ({
    title = 'Lorem ipsum',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    children,
    containerStyle,
    imageContainerStyle,
    titleStyle,
    descriptionStyle,
}: ContentDisplayProps) => {
    const styles = useStyles(({ isDark, colors }) => ({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            backgroundColor: isDark ? colors.gray[900] : colors.coolGray[50],
        },
        imageContainer: {
            marginBottom: 20,
        },
        title: {
            fontSize: 28,
            marginBottom: 16,
            fontFamily: 'Quicksand-Bold',
            textAlign: 'center',
            color: isDark ? colors.coolGray[50] : colors.gray[900],
        },
        description: {
            fontSize: 16,
            textAlign: 'center',
            fontFamily: 'Nunito-Regular',
            color: isDark ? colors.coolGray[400] : colors.gray[600],
            paddingHorizontal: 20,
            lineHeight: 24,
        },
    }));

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.imageContainer, imageContainerStyle]}>
                {children}
            </View>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <Text style={[styles.description, descriptionStyle]}>{description}</Text>
        </View>
    );
};

