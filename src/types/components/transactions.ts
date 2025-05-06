export interface SpeedDialButtonProps {
    isOpen: boolean;
    toggleOpen: () => void;
}
export type SpeedDialButtonActions = Array<{
    icon: string;
    title: string;
    onPress: () => void;
}>;
