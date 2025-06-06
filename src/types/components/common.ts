import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { SvgProps } from 'react-native-svg';

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

export type ContentDisplayProps = React.PropsWithChildren<{
    title?: string;
    description?: string;
    svgProps?: SvgProps;
    containerStyle?: StyleProp<ViewStyle>;
    imageContainerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    descriptionStyle?: StyleProp<TextStyle>;
}>;
