import type { OnboardingSetupTextContent, PaginationButtonsConfig } from '@types';

export const PAGINATION_BUTTONS_CONFIG: PaginationButtonsConfig = {
    ICON_COLOR: 'white',
    ICON_SIZE: 'large',
    BUTTON_TITLES: {
        START: 'Empezar',
        PREVIOUS: 'Anterior',
        NEXT: 'Siguiente',
    },
    ICONS: {
        START: 'golf-outline',
        PREVIOUS: 'arrow-back-circle-outline',
        NEXT: 'arrow-forward-circle-outline',
    },
    ICON_TYPE: 'ionicon',
};

export const ONBOARDING_SETUP_TEXT: OnboardingSetupTextContent = {
    setup: {
        title: '¡Vamos a crear tu primera cuenta!',
        subtitle: 'Es hora de empezar a controlar tu dinero',
        submitButton: '¡Listo!',
    },
    app: {
        title: '¡Configura tu App!',
        subtitle: 'Puedes cambiar esto en cualquier momento',
        submitButton: '¡Siguiente paso!',
    },
    currencyLabel: '¿Qué moneda usa esta cuenta?',
    accountTypeLabel: '¿Qué tipo de cuenta será?',
    currencyPlaceholder: '¡Toca aquí para elegir! (ej: MXN)',
    doneButton: '¡Listo!',
    accountNameLabel: 'Dale nombre a tu cuenta',
    accountNamePlaceholder: 'Efectivo',
    initialAmountLabel: '¿Con cuánto dinero empiezas?',
    initialAmountPlaceholder: '9999999.00',
    themeLabel: '¿Qué tema prefieres?',
    biometricAuthLabel: '¿Deseas usar autenticación biométrica?',
    pinLabel: 'Configura tu PIN de seguridad',
    pinPlaceholder: 'Ingresa un PIN de 4 dígitos',
    confirmPinLabel: 'Confirma tu PIN',
    confirmPinPlaceholder: 'Ingresa nuevamente tu PIN',
    createPinLabel: '¿Deseas crear un PIN?',
    createPinPlaceholder: 'Ingresa un PIN de 4 dígitos',
    confirmCreatePinLabel: 'Confirma tu PIN',
    confirmCreatePinPlaceholder: 'Ingresa nuevamente tu PIN',
    accountTypePlaceholder: 'Selecciona un tipo de cuenta',
};

export const SLIDE_INTERVAL_MS = 4000;
