import { Platform, StyleSheet } from "react-native";
import { FAB, FABProps } from "@rneui/themed";
import { PAGINATION_BUTTONS_CONFIG } from "../../config";
import type { FullColorPallete } from "../../types";

interface PaginationFABProps extends Omit<FABProps, 'icon'> {
    colors: FullColorPallete;
    icon: string;
    title: string;
    onPress: () => void;
}

export const PaginationFAB: React.FC<PaginationFABProps> = ({ icon, title, onPress, colors, ...props }) => {
    return (
        <FAB
            icon={{
                name: icon,
                type: PAGINATION_BUTTONS_CONFIG.ICON_TYPE,
                color: PAGINATION_BUTTONS_CONFIG.ICON_COLOR,
            }}
            title={title}
            onPress={onPress}
            size={PAGINATION_BUTTONS_CONFIG.ICON_SIZE}
            color={colors.fuchsia[600]}
            buttonStyle={styles.fabButton}
            titleStyle={styles.fabTitle}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    fabButton: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fabTitle: {
        marginTop: 0,
        lineHeight: Platform.OS === 'ios' ? 0 : undefined,
    },
});