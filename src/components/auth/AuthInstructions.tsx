import { View, Text, ActivityIndicator } from 'react-native';
import { IonIcon } from '../../components';
import { useStyles } from '../../hooks';
import { AUTH_SCREEN_TEXTS } from '../../config';
import type { AuthInstructionsProps } from '../../types';


export const AuthInstructions: React.FC<AuthInstructionsProps> = ({
    touchIdEnabled,
    pinEnabled,
    loadingPinAuth,
    loadingTouchIdAuth,
}) => {
    const styles = useStyles(({ colors, isDark }) => ({
        instructionText: {
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 40,
            fontFamily: 'Quicksand-Regular',
            fontWeight: 600,
            color: isDark ? colors.coolGray[50] : colors.coolGray[900],
        },
        iconContainer: {
            flexDirection: 'row',
            marginBottom: 30,
            columnGap: 30,
        },
        iconCircle: {
            width: 70,
            height: 70,
            borderRadius: 50,
            backgroundColor: isDark ? colors.coolGray[700] : colors.coolGray[200],
            justifyContent: 'center',
            alignItems: 'center',
        },
        icon: {
            color: isDark ? colors.coolGray[50] : colors.coolGray[900],
            fontSize: 40,
        },
    }));

    return (
        <>
            <Text style={styles.instructionText}>
                {
                    `${AUTH_SCREEN_TEXTS.instructions.prefix
                    }${touchIdEnabled ? AUTH_SCREEN_TEXTS.instructions.touchId : ''
                    }${touchIdEnabled && pinEnabled ? AUTH_SCREEN_TEXTS.instructions.connector : ''
                    }${pinEnabled ? AUTH_SCREEN_TEXTS.instructions.pin : ''
                    }`
                }
            </Text>
            <View style={styles.iconContainer}>
                {
                    (loadingPinAuth || loadingTouchIdAuth)
                        ? <ActivityIndicator
                            size="large"
                            color={styles.icon.color}
                        />
                        : <>
                            {touchIdEnabled && (
                                <View style={styles.iconCircle}>
                                    <IonIcon
                                        name="finger-print"
                                        size={styles.icon.fontSize}
                                        color={styles.icon.color}
                                        style={styles.icon}
                                    />
                                </View>
                            )}
                            {pinEnabled && (
                                <View style={styles.iconCircle}>
                                    <IonIcon
                                        name="keypad"
                                        size={styles.icon.fontSize}
                                        color={styles.icon.color}
                                        style={styles.icon}
                                    />
                                </View>
                            )}
                        </>
                }
            </View>
        </>
    );
};
