import { Text, View } from 'react-native';
import { GradientText } from '../../../components';
import { useGradient, useStyles } from '../../../hooks';
import type { SlideItemProps } from '../../../types';


export const SlideItem: React.FC<SlideItemProps> = ({ desc, img, title, style }) => {
    const { gradientLight } = useGradient();
    const styles = useStyles(({ colors, screenHeight, screenWidth, fontScale, fonts }) => ({
        container: {
            width: screenWidth,
            flex: 1,
            height: screenHeight * 0.4,
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginVertical: screenHeight * 0.1,
        },
        imageContainer: {
            height: screenHeight * 0.3,
            justifyContent: 'center',
            alignItems: 'center',
        },
        description: {
            fontSize: fontScale * 15,
            fontWeight: '500',
            textAlign: 'left',
            width: screenWidth * 0.7,
            paddingTop: 5,
            fontFamily: fonts.nunito.regular,
            color: colors.coolGray[900],
        },
        gradiantText: {
            fontSize: fontScale * 30,
        },
    }));

    return (
        <View style={[styles.container, style]}>
            <View style={styles.imageContainer}>
                {img}
            </View>
            <GradientText
                text={title}
                fontSize={styles.gradiantText.fontSize}
                gradientColors={gradientLight}
                fontWeight="black"
            />
            <Text style={styles.description}>{desc}</Text>
        </View>
    );
};
