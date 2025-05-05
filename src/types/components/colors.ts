export interface ColorCircleProps {
    color: string;
    selected: boolean;
    onPress: () => void;
}

export interface PageItemProps {
    item: string[];
}

export interface ColorPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (index: number) => void;
}

export interface ColorGridProps {
    colors: string[];
    selectedColor: string | null;
    onColorPress: (color: string) => void;
    numColumns: number;
}

export interface ColorHeaderProps {
    title: string;
    onBackPress: () => void;
}

export interface ColorSelectionButtonProps {
    selectedColor: string | null;
    onPress: () => void;
    buttonText?: string;
}
