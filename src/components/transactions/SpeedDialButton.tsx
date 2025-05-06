import { SpeedDial } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { useGradient, useStyles } from '../../hooks';
import type { SpeedDialButtonProps } from '../../types';


export const SpeedDialButton: React.FC<SpeedDialButtonProps> = ({
    isOpen,
    toggleOpen,
}) => {
    const { themeGradient } = useGradient();
    const speedDialActions = [
        {
            icon: 'arrow-up-bold',
            title: 'Egreso',
            onPress: () => console.log('Add Something'),
        },
        {
            icon: 'arrow-u-right-top-bold',
            title: 'Transferencia',
            onPress: () => console.log('Delete Something'),
        },
        {
            icon: 'arrow-down-bold',
            title: 'Ingreso',
            onPress: () => console.log('Add Something'),
        },
    ];
    const styles = useStyles(({ isDark, colors, fonts }) => ({
        speedDialButton: {
            borderRadius: 28,
        },
        actionButton: {
            borderRadius: 25,
        },
        actionTitle: {
            fontSize: 14,
            backgroundColor: isDark ? colors.coolGray[50] : colors.gray[900],
            color: isDark ? colors.gray[600] : colors.coolGray[300],
            fontFamily: fonts.quicksand.bold,
            borderRadius: 4,
        },
    }));

    return (
        <SpeedDial
            isOpen={isOpen}
            icon={{ name: 'add', type: 'ionicon', color: '#fff' }}
            openIcon={{ name: 'close', type: 'ionicon', color: '#fff' }}
            onOpen={toggleOpen}
            onClose={toggleOpen}
            overlayColor="transparent"
            buttonStyle={styles.speedDialButton}
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: themeGradient,
                start: { x: 0, y: 0 },
                end: { x: 1, y: 1 },
            }}
        >
            {speedDialActions.map((action, index) => (
                <SpeedDial.Action
                    key={index}
                    icon={{ name: action.icon, type: 'material-community', color: '#fff' }}
                    title={action.title}
                    titleStyle={styles.actionTitle}
                    onPress={action.onPress}
                    buttonStyle={styles.actionButton}
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
