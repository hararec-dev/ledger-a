import { Text, useWindowDimensions, View } from "react-native";
import { CustomText } from "../../../components";
import { useGradient, useThemeStore } from "../../../hooks";
import type { SlideItemProps } from "../../../types";

export const SlideItem: React.FC<SlideItemProps> = ({ desc, img, title, style }) => {
    const { colors } = useThemeStore();
    const { width, height, fontScale } = useWindowDimensions();
    const { gradientLightColors } = useGradient();

    return (
        <View style={[{
            width,
            flex: 1,
            height: height * 0.4,
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginVertical: height * 0.1,
        }, style]}>
            <View style={{
                height: height * 0.3,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {img}
            </View>
            <CustomText
                text={title}
                fontSize={fontScale * 30}
                gradientColors={gradientLightColors}
                fontWeight='black'
            />
            <Text style={{
                fontSize: fontScale * 15,
                fontWeight: '500',
                textAlign: 'left',
                paddingHorizontal: 60,
                paddingTop: 5,
                fontFamily: 'Nunito-Regular',
                color: colors.coolGray[900],
            }}>{desc}</Text>
        </View>
    );
};
