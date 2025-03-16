import { Text, useWindowDimensions, View } from "react-native";
import { CustomText } from "../custom";
import { useThemeStore } from "../../hooks";
import type { Slide } from "../../types";
import { useMemo } from "react";

export const SlideItem: React.FC<Slide> = ({ desc, img, title }) => {
    const { colors } = useThemeStore();
    const { width, fontScale } = useWindowDimensions();
    const gradientColors = useMemo<string[]>(() => [
        colors.blue[600],
        colors.purple[600],
        colors.rose[600],
    ], [colors]);

    return (
        <View style={{
            width,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {img}
            <CustomText
                text={title}
                fontSize={fontScale * 30}
                fontWeight='black'
                gradientColors={gradientColors}
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
