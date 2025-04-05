import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthButtons, LoginHeader, LoginOverlays } from '../../components';
import type { AuthenticationProps } from '../../types';
import { useAuthLogin } from '../../hooks';

export const AuthenticationScreen = ({ navigation }: AuthenticationProps) => {
    const [showPinModal, setShowPinModal] = useState<boolean>(false);
    const {
        themeGradient,
        authState,
        touchIdAuth,
        pinAuth,
        handleTouchIdAuth,
        handlePinAuth,
    } = useAuthLogin({ navigation });

    return (
        <View style={styles.container}>
            <LoginHeader
                themeGradient={themeGradient}
                touchIdEnabled={touchIdAuth.allowBiometricAuth}
                pinEnabled={pinAuth.pinEnabled || false}
                loadingPinAuth={pinAuth.loadingPinAuth}
                loadingTouchIdAuth={touchIdAuth.loadingTouchIdAuth}
            />
            <AuthButtons
                disabled={authState.lockout}
                onPinAuth={() => setShowPinModal(true)}
                onTouchIdAuth={handleTouchIdAuth}
                pinEnabled={pinAuth.pinEnabled}
                touchIdEnabled={touchIdAuth.allowBiometricAuth}
            />
            <LoginOverlays
                showPinModal={showPinModal}
                pin={pinAuth.pin}
                setPin={pinAuth.setPin}
                pinError={pinAuth.pinError}
                handlePinAuth={handlePinAuth}
                setShowPinModal={setShowPinModal}
                showErrorDialog={authState.showErrorDialog}
                errorMessage={authState.errorMessage}
                closeErrorDialog={authState.closeErrorDialog}
                remainingTime={authState.remainingTime}
                lockout={authState.lockout}
                themeGradient={themeGradient}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
});
