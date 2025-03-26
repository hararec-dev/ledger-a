import type { StyleProp, TextStyle } from 'react-native';

export interface GradientFontProps {
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: 'normal' | 'bold' | 'black' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
}
export interface GradientTextProps extends GradientFontProps {
    text: string;
    color?: string;
    gradientColors?: string[];
    style?: StyleProp<TextStyle>;
}
