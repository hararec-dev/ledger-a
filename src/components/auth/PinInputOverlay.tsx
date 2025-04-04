import React from 'react';
import { Text } from 'react-native';
import { Overlay } from '@rneui/themed';
import { GradientButton, AuthPinInput } from '../../components';
import { useStyles } from '../../hooks';
import { AUTH_SCREEN_TEXTS } from '../../config';
import type { PinInputOverlayProps } from '../../types';


export const PinInputOverlay: React.FC<PinInputOverlayProps> = ({
    isVisible,
    pin,
    setPin,
    pinError,
    handlePinSubmit,
    themeGradient,
}) => {
    const styles = useStyles(({ colors }) => ({
        overlay: {
            width: '80%',
            padding: 20,
            borderRadius: 10,
        },
        validateButton: {
            marginTop: 20,
        },
        buttonText: {
            color: colors.coolGray[50],
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'Quicksand-Regular',
        },
    }));

    return (
        <Overlay isVisible={isVisible} overlayStyle={styles.overlay}>
            <AuthPinInput
                label={AUTH_SCREEN_TEXTS.pinInput.label}
                value={pin}
                onChangeText={setPin}
                error={pinError}
                placeholder={AUTH_SCREEN_TEXTS.pinInput.placeholder}
                gradientColors={themeGradient}
            />
            <GradientButton
                onPress={handlePinSubmit}
                gradientColors={themeGradient}
                style={styles.validateButton}
            >
                <Text style={styles.buttonText}>
                    {AUTH_SCREEN_TEXTS.pinInput.validateButton}
                </Text>
            </GradientButton>
        </Overlay>
    );
};
