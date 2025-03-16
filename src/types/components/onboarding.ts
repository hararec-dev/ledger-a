export interface PaginationDotsProps {
    currentIndex: number;
    numberOfIndexes: number;
}

export interface OnboardingButtonsProps {
    currentIndex: number,
    onNext: (index: number) => void,
    onNavigate: (screen: string) => void
}