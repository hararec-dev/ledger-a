export type TextContent = {
    title: {
        biometric: string;
        pin: string;
    };
    buttons: {
        fingerprint: string;
        validatePin: string;
    };
    errors: {
        pinNotSet: string;
        enterPin: string;
        incorrectPin: string;
        tooManyAttempts: string;
    };
    input: {
        pinPlaceholder: string;
    };
};

export type AuthScreenTextsInstructions = {
    prefix: string;
    touchId: string;
    connector: string;
    pin: string;
}

export type AuthScreenTextsTimer = {
    prefix: string;
    seconts: string;
}

export type AuthScreenTextsPinInput = {
    label: string;
    placeholder: string;
    validateButton: string;
    errors: {
        empty: string;
        incorrect: string;
        notConfigured: string;
    };
}

export type AuthScreenTexts = {
    touchId: string;
    pin: string;
    appName: string;
    instructions: AuthScreenTextsInstructions;
    pinInput: AuthScreenTextsPinInput;
    lockoutMessage: AuthScreenTextsTimer;
    overlayButtonMessage: string;
}
