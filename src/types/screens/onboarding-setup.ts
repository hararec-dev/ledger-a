export interface OnboardingSetupTextHeader {
    title: string;
    subtitle: string;
    submitButton: string;
}

export type OnboardingSetupTextContent = {
    setup: OnboardingSetupTextHeader;
    app: OnboardingSetupTextHeader;
    currencyLabel: string;
    currencyPlaceholder: string;
    doneButton: string;
    accountNameLabel: string;
    accountNamePlaceholder: string;
    initialAmountLabel: string;
    initialAmountPlaceholder: string;
    themeLabel: string;
    biometricAuthLabel: string;
    pinLabel: string;
    pinPlaceholder: string;
    confirmPinLabel: string;
    confirmPinPlaceholder: string;
    createPinLabel: string;
    createPinPlaceholder: string;
    confirmCreatePinLabel: string;
    confirmCreatePinPlaceholder: string;
};
