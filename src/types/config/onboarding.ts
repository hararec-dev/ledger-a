import type { StyleProp, ViewStyle } from "react-native";

export interface Slide {
    title: string;
    desc: string;
    img: React.ReactNode;
}
export interface SlideItemProps extends Slide {
    style?: StyleProp<ViewStyle>;
}

export type IconSize = 'small' | 'large' | undefined;

export interface PaginationButtonsConfig {
    readonly ICON_COLOR: string;
    readonly ICON_SIZE: IconSize;
    readonly BUTTON_TITLES: {
        readonly START: string;
        readonly PREVIOUS: string;
        readonly NEXT: string;
    };
    readonly ICONS: {
        readonly START: string;
        readonly PREVIOUS: string;
        readonly NEXT: string;
    };
    readonly ICON_TYPE: string;
    readonly NAVIGATION: {
        readonly SETUP: string;
    };
}