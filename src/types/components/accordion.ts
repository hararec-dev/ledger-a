
export interface AccordionSection {
    key: string;
    title: string;
    content: React.ReactNode;
}

export interface AccordionItem {
    item: AccordionSection;
    index: number;
}

export interface AccordionProps {
    sections: AccordionSection[];
    activeSection: number | null;
    onSectionPress: (idx: number | null) => void;
}
