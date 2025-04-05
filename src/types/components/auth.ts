export interface AuthPinInputProps {
    label: string;
    value: string;
    error?: string;
    placeholder: string;
    gradientColors?: string[];
    onChangeText: (text: string) => void;
}

export interface AuthButtonsProps {
    touchIdEnabled: boolean | null;
    pinEnabled: boolean | null;
    onTouchIdAuth: () => void;
    onPinAuth: () => void;
    disabled: boolean;
}

export interface AuthHeaderProps {
    themeGradient: string[];
}

export interface AuthInstructionsProps {
    touchIdEnabled: boolean | null;
    pinEnabled: boolean | null;
    loadingPinAuth: boolean;
    loadingTouchIdAuth: boolean;
}

export interface ErrorOverlayProps {
    isVisible: boolean;
    errorMessage: string;
    onClose: () => void;
    themeGradient: string[];
}

export interface LockoutMessageProps {
    isVisible: boolean;
    remainingTime: number;
}

export interface LoginHeaderProps {
    themeGradient: string[];
    touchIdEnabled: boolean;
    pinEnabled: boolean;
    loadingPinAuth: boolean;
    loadingTouchIdAuth: boolean;
}

export interface LoginOverlaysProps {
    showPinModal: boolean;
    pin: string;
    setPin: (pin: string) => void;
    pinError: string;
    handlePinAuth: () => Promise<void>;
    setShowPinModal: (show: boolean) => void;
    showErrorDialog: boolean;
    errorMessage: string;
    closeErrorDialog: () => void;
    remainingTime: number;
    lockout: boolean;
    themeGradient: string[];
}

export interface PinInputOverlayProps {
    isVisible: boolean;
    pin: string;
    setPin: (pin: string) => void;
    pinError: string | undefined;
    handlePinSubmit: () => Promise<void>;
    themeGradient: string[];
}
