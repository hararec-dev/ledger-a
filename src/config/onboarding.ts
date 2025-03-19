import type { OnboardingSetupTextContent, PaginationButtonsConfig } from "../types";

export const PAGINATION_BUTTONS_CONFIG: PaginationButtonsConfig = {
    ICON_COLOR: 'white',
    ICON_SIZE: 'large',
    BUTTON_TITLES: {
        START: 'Empezar',
        PREVIOUS: 'Anterior',
        NEXT: 'Siguiente'
    },
    ICONS: {
        START: 'golf-outline',
        PREVIOUS: 'arrow-back-circle-outline',
        NEXT: 'arrow-forward-circle-outline'
    },
    ICON_TYPE: 'ionicon',
    NAVIGATION: {
        SETUP: 'OnboardingSetup'
    }
};

export const ONBOARDING_SETUP_TEXT: OnboardingSetupTextContent = {
    title: '¡Vamos a crear tu primera cuenta!',
    subtitle: 'Es hora de empezar a controlar tu dinero',
    currencyLabel: '¿Qué moneda quieres manejar?',
    currencyPlaceholder: '¡Toca aquí para elegir! (ej: MXN)',
    doneButton: '¡Listo!',
    accountNameLabel: 'Dale nombre a tu cuenta',
    accountNamePlaceholder: "¿Qué tal 'Mi Dinero' o 'Mis Ahorros'?",
    initialAmountLabel: '¿Con cuánto dinero empiezas?',
    initialAmountPlaceholder: '9999999.00',
    submitButton: '¡Siguiente paso! 👉'
};