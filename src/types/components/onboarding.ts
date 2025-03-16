import type { StyleProp, ViewStyle } from "react-native";

export interface PaginationDotsProps {
    currentIndex: number;
    numberOfIndexes: number;
    style?: StyleProp<ViewStyle>;
}

export interface PaginationButtonsProps extends PaginationDotsProps {
    onNext: (index: number) => void;
    onNavigate: (screen: string) => void;
}