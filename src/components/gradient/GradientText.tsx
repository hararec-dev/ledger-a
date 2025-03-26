import { useState } from 'react';
import { Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import type { GradientFontProps, GradientTextProps } from '../../types';


export const GradientText: React.FC<GradientTextProps> = ({
    color,
    gradientColors,
    text,
    fontFamily = 'Pacifico-Regular',
    fontSize = 12,
    fontWeight = '100',
    style,
}) => {
    const [textStyle] = useState<GradientFontProps>({
        fontSize,
        fontFamily,
        fontWeight: fontFamily === 'Pacifico-Regular' ? undefined : fontWeight,
    });

    return gradientColors
        ? (
            <MaskedView
                maskElement={
                    <Text style={[textStyle, style]}>
                        {text}
                    </Text>
                }
            >
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={[{ ...textStyle, opacity: 0 }, style]}>
                        {text}
                    </Text>
                </LinearGradient>
            </MaskedView>
        )
        : (
            <Text style={[{ ...textStyle, color: color || '#000' }, style]}>
                {text}
            </Text>
        );
};
