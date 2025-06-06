import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '@types/navigation';


export interface LegalItem {
    text: string;
    subitems?: string[];
}

export interface LegalSection {
    subtitle: string;
    items: LegalItem[];
}

export interface TermLegalSection {
    title: string;
    lastUpdate: string;
    sections: LegalSection[];
    footer: string;
}

export interface LegalInfoHeaderProps {
    navigation: StackNavigationProp<RootStackParamList, 'LegalInfo'>;
    title: string;
    lastUpdate: string
}

export interface LegalItemProps {
    item: LegalItem;
}

export interface LegalInfoSectionProps {
    section: LegalSection;
    index: number;
}

export interface LegalLinkProps {
    onPress: () => void;
    text: string;
}
