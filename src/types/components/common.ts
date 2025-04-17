export interface OptionItem {
    code: string;
    description: string;
}

export interface OptionPickerProps<T extends OptionItem> {
    value: string;
    options: T[];
    onValueChange: (value: string) => void;
    placeholder?: string;
    selectedOption?: T;
}