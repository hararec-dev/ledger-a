import { Text, useWindowDimensions, View } from 'react-native';
import { GradientText } from '../../../components';
import { useGradient, useThemeStore } from '../../../hooks';
import type { SlideItemProps } from '../../../types';
import { StyleSheet } from 'react-native';


export const SlideItem: React.FC<SlideItemProps> = ({ desc, img, title, style }) => {
    const { colors } = useThemeStore();
    const { width, height, fontScale } = useWindowDimensions();
    const { gradientLight } = useGradient();

    const styles = StyleSheet.create({
        container: {
            width,
            flex: 1,
            height: height * 0.4,
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginVertical: height * 0.1,
        },
        imageContainer: {
            height: height * 0.3,
            justifyContent: 'center',
            alignItems: 'center',
        },
        description: {
            fontSize: fontScale * 15,
            fontWeight: '500',
            textAlign: 'left',
            width: width * 0.7,
            paddingTop: 5,
            fontFamily: 'Nunito-Regular',
            color: colors.coolGray[900],
        },
    });

    return (
        <View style={[styles.container, style]}>
            <View style={styles.imageContainer}>
                {img}
            </View>
            <GradientText
                text={title}
                fontSize={fontScale * 30}
                gradientColors={gradientLight}
                fontWeight="black"
            />
            <Text style={styles.description}>{desc}</Text>
        </View>
    );
};
