import type { TextStyle, ViewStyle } from "react-native";

export interface TimelineItem {
    id: string | number;
    title: string;
    description?: string;
    time?: string;
    date?: string;
    icon?: React.ReactNode;
    dotColor?: string;
}

export interface TimelineProps {
    data: TimelineItem[];
    lineColor?: string;
    dotSize?: number;
    dotColor?: string;
    titleStyle?: TextStyle;
    descriptionStyle?: TextStyle;
    timeStyle?: TextStyle;
    dateStyle?: TextStyle;
    containerStyle?: ViewStyle;
    itemContainerStyle?: ViewStyle;
    showScrollIndicator?: boolean;
}