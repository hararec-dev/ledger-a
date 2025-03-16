import type { StyleProp, ViewStyle } from "react-native";

export interface Slide {
    title: string;
    desc: string;
    img: React.ReactNode;
}
export interface SlideItemProps extends Slide {
    style?: StyleProp<ViewStyle>;
}