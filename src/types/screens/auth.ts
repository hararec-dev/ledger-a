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