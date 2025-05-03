import { View, Text } from 'react-native';
import { GradientButton, Icon } from '../../components';
import type { QuickAction } from '../../types';
import { useStyles } from '../../hooks';


export const QuickActions: React.FC = () => {
    const actions: QuickAction[] = [
        { iconName: 'note-edit', label: 'Notas', iconType: 'material_community_icon' },
        { iconName: 'arrow-redo', label: 'Transferir', iconType: 'ion_icon' },
        { iconName: 'add-circle', label: 'Agregar', iconType: 'ion_icon' },
    ];
    const styles = useStyles(({ colors, isDark }) => ({
        quickActions: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 8,
            backgroundColor: isDark ? colors.coolGray[700] : colors.coolGray[200],
            borderRadius: 16,
            marginBottom: 10,
        },
        actionItem: {
            alignItems: 'center',
            flex: 1,
        },
        actionCircle: {
            borderRadius: 30,
            padding: 8,
            marginBottom: 5,
        },
        actionLabel: {
            color: isDark ? colors.coolGray[50] : colors.gray[900],
            fontSize: 12,
            fontFamily: 'Quicksand-Bold',
        },
        iconStyle: {
            fontSize: 20,
            color: colors.coolGray[50],
        },
    }));

    return (
        <View style={styles.quickActions}>
            {actions.map((action, index) => (
                <View key={index} style={styles.actionItem}>
                    <GradientButton gradientStyle={styles.actionCircle}>
                        <Icon
                            name={action.iconName}
                            iconType={action.iconType}
                            size={styles.iconStyle.fontSize}
                            color={styles.iconStyle.color}
                        />
                    </GradientButton>
                    <Text style={styles.actionLabel}>{action.label}</Text>
                </View>
            ))}
        </View>
    );
};

