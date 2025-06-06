import { useState } from 'react';
import { SpeedDial } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { useGradient, useStyles } from '@hooks';
import type { SpeedDialAction, SpeedDialButtonProps } from '@types';


export const SpeedDialButton: React.FC<SpeedDialButtonProps> = ({ style, containerStyle, titleStyle }) => {
    const { themeGradient } = useGradient();
    const [isOpen, setIsOpen] = useState(false);
    const speedDialActions: SpeedDialAction[] = [
        {
            icon: 'arrow-up-bold',
            title: 'Egreso',
            iconType: 'material-community',
            onPress: () => console.log('Add Something'),
        },
        {
            icon: 'arrow-redo',
            title: 'Transferencia',
            iconType: 'ionicon',
            onPress: () => console.log('Delete Something'),
        },
        {
            icon: 'arrow-down-bold',
            iconType: 'material-community',
            title: 'Ingreso',
            onPress: () => console.log('Add Something'),
        },
    ];
    const styles = useStyles(({ isDark, colors, fonts }) => ({
        speedDialButton: {
            borderRadius: 28,
        },
        speedDialContainer: {
            elevation: 0,
            shadowColor: 'transparent',
            shadowOpacity: 0,
            shadowRadius: 0,
            shadowOffset: { width: 0, height: 0 },
        },
        actionButton: {
            borderRadius: 25,
        },
        actionContainer: {
            elevation: 0,
            shadowColor: 'transparent',
            shadowOpacity: 0,
            shadowRadius: 0,
            shadowOffset: { width: 0, height: 0 },
        },
        actionTitle: {
            fontSize: 14,
            backgroundColor: isDark ? colors.coolGray[50] : colors.gray[900],
            color: isDark ? colors.gray[600] : colors.coolGray[300],
            fontFamily: fonts.quicksand.bold,
            borderRadius: 4,
        },
        icon: {
            color: colors.coolGray[50],
        },
    }));

    return (
        <SpeedDial
            isOpen={isOpen}
            icon={{ name: 'add-sharp', type: 'ionicon', color: styles.icon.color }}
            openIcon={{ name: 'close', type: 'ionicon', color: styles.icon.color }}
            onOpen={() => setIsOpen(prev => !prev)}
            onClose={() => setIsOpen(prev => !prev)}
            overlayColor="transparent"
            style={[styles.speedDialButton, style]}
            containerStyle={[styles.speedDialContainer, containerStyle]}
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: themeGradient,
                start: { x: 0, y: 0 },
                end: { x: 1, y: 0 },
            }}
        >
            {speedDialActions.map((action, index) => (
                <SpeedDial.Action
                    key={index}
                    icon={{ name: action.icon, type: action.iconType, color: styles.icon.color }}
                    title={action.title}
                    titleStyle={[styles.actionTitle, titleStyle]}
                    onPress={action.onPress}
                    style={[styles.actionButton, style]}
                    containerStyle={[styles.actionContainer, containerStyle]}
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: themeGradient,
                        start: { x: 0, y: 0 },
                        end: { x: 1, y: 1 },
                    }}
                />
            ))}
        </SpeedDial>
    );
};
