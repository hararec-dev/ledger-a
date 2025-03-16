import { useState } from 'react';
import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from 'react-native-linear-gradient';
import type { CustomFontProps, CustomTextProps } from "../../types";

export const CustomText: React.FC<CustomTextProps> = ({
    color,
    gradientColors,
    text,
    fontFamily = 'Pacifico-Regular',
    fontSize = 12,
    fontWeight = '100'
}) => {
    const [textStyle] = useState<CustomFontProps>({
        fontSize,
        fontFamily,
        fontWeight: fontFamily === 'Pacifico-Regular' ? undefined : fontWeight
    });

    return gradientColors
        ? (
            <MaskedView
                maskElement={
                    <Text style={textStyle}>
                        {text}
                    </Text>
                }
            >
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={{ ...textStyle, opacity: 0 }}>
                        {text}
                    </Text>
                </LinearGradient>
            </MaskedView>
        )
        : (
            <Text style={{ ...textStyle, color: color || '#000' }}>
                {text}
            </Text>
        );
};