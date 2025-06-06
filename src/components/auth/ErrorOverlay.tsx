import React from 'react';
import { Text } from 'react-native';
import { Overlay } from '@rneui/themed';
import { GradientButton } from '@components';
import { useStyles } from '@hooks';
import { AUTH_TEXTS, AUTH_SCREEN_TEXTS } from '@config';
import type { ErrorOverlayProps } from '@types';


export const ErrorOverlay: React.FC<ErrorOverlayProps> = ({
    errorMessage,
    isVisible,
    onClose,
    themeGradient,
}) => {
    const styles = useStyles(({ colors, isDark, fonts }) => ({
        errorOverlay: {
            width: '80%',
            padding: 20,
            borderRadius: 10,
            alignItems: 'center',
        },
        validateButton: {
            marginTop: 20,
            width: '100%',
        },
        buttonText: {
            color: colors.coolGray[50],
            fontSize: 16,
            fontFamily: fonts.quicksand.bold,
        },
        errorTitle: {
            fontSize: 18,
            marginBottom: 10,
            color: isDark ? colors.red[400] : colors.red[500],
            fontFamily: fonts.quicksand.bold,
        },
        errorMessage: {
            fontSize: 14,
            marginBottom: 20,
            textAlign: 'center',
            fontFamily: fonts.nunito.regular,
            color: isDark ? colors.coolGray[50] : colors.coolGray[900],
        },
    }));

    return (
        <Overlay
            isVisible={isVisible}
            overlayStyle={styles.errorOverlay}
            onBackdropPress={onClose}
        >
            <Text style={styles.errorTitle}>{AUTH_TEXTS.ERROR_TITLE}</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <GradientButton
                onPress={onClose}
                gradientColors={themeGradient}
                style={styles.validateButton}
            >
                <Text style={styles.buttonText}>
                    {AUTH_SCREEN_TEXTS.overlayButtonMessage}
                </Text>
            </GradientButton>
        </Overlay>
    );
};
