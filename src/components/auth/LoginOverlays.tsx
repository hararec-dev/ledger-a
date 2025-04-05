import { ErrorOverlay, LockoutMessage, PinInputOverlay } from '../../components';
import type { LoginOverlaysProps } from '../../types';


export const LoginOverlays = ({
    showPinModal,
    pin,
    setPin,
    pinError,
    handlePinAuth,
    setShowPinModal,
    showErrorDialog,
    errorMessage,
    closeErrorDialog,
    remainingTime,
    lockout,
    themeGradient,
}: LoginOverlaysProps) => (
    <>
        <PinInputOverlay
            isVisible={showPinModal}
            pin={pin}
            setPin={setPin}
            pinError={pinError}
            handlePinSubmit={async () => {
                await handlePinAuth();
                setShowPinModal(false);
            }}
            themeGradient={themeGradient}
        />
        <ErrorOverlay
            isVisible={showErrorDialog}
            errorMessage={errorMessage}
            onClose={() => {
                closeErrorDialog();
                setPin('');
            }}
            themeGradient={themeGradient}
        />
        <LockoutMessage
            remainingTime={remainingTime}
            isVisible={lockout}
        />
    </>
);
