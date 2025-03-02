import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from 'react-native-linear-gradient';
import type { CustomTextProps } from "../../types";


export const CustomText: React.FC<CustomTextProps> = ({
    color,
    gradientColors,
    text,
    fontFamily = 'Quicksand-Regular',
    fontSize = 9,
    fontWeight = 'bold'
}) => {
    return gradientColors
        ? (
            <MaskedView
                maskElement={
                    <Text style={{ fontSize, fontWeight, fontFamily }}>
                        {text}
                    </Text>
                }
            >
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={{ opacity: 0, fontSize, fontWeight, fontFamily }}>
                        {text}
                    </Text>
                </LinearGradient>
            </MaskedView>
        )
        : (
            <Text style={{ color: color || '#000', fontSize, fontWeight, fontFamily }}>
                {text}
            </Text>
        );
};
