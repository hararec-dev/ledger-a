import type { AuthScreenTexts, TextContent } from '../types';

export const AUTH_CONFIG = {
    MAX_ATTEMPTS: 3,
    LOCKOUT_DURATION: 30000,
    PAYLOAD_LENGTH: 64,
} as const;

export const AUTH_TEXTS = {
    ERROR_TITLE: 'Error',
    MAX_ATTEMPTS_MESSAGE: 'Has excedido el número máximo de intentos. Por favor, intenta de nuevo después de 30 segundos.',
    FAILED_ATTEMPT_MESSAGE: (attempts: number, max: number) =>
        `Intento fallido (${attempts}/${max}). Por favor, intenta de nuevo.`,
    BIOMETRIC_UNAVAILABLE: 'La autenticación biométrica no está disponible en este dispositivo.',
    FINGERPRINT_PROMPT_LOGIN: 'Ingresa con tu huella 💸✨',
    FINGERPRINT_PROMPT_CONFIRMATION: 'Confirma con tu huella 💸✨',
    CANCEL_BUTTON: 'Cancelar',
    USER_SESSION_KEY: 'sesionUsuario',
} as const;

export const BIOMETRIC_MESSAGES = {
    ERRORS: {
        CREATE_PUBLIC_KEY: 'No se pudo crear la clave pública',
        UNKNOWN: 'Error desconocido',
    },
} as const;

export const AUTHENTICATION_SCREEN: TextContent = {
    title: {
        biometric: 'Autenticación Biométrica',
        pin: 'Autenticación con PIN',
    },
    buttons: {
        fingerprint: 'Usar Huella Digital',
        validatePin: 'Validar PIN',
    },
    errors: {
        pinNotSet: 'PIN no configurado',
        enterPin: 'Por favor ingrese el PIN',
        incorrectPin: 'PIN incorrecto',
        tooManyAttempts: 'Demasiados intentos fallidos. Espere 30 segundos.',
    },
    input: {
        pinPlaceholder: 'Ingrese su PIN',
    },
};

export const AUTH_SCREEN_TEXTS: AuthScreenTexts = {
    touchId: 'Autenticar con Huella',
    pin: 'Autenticar con PIN',
    appName: 'Ledger A',
    instructions: {
        prefix: 'Autentíquese usando ',
        touchId: 'su huella digital',
        connector: ' o ',
        pin: 'PIN',
    },
    pinInput: {
        label: 'Ingrese su PIN',
        placeholder: '****',
        validateButton: 'Validar PIN',
        errors: {
            empty: 'Por favor ingrese el PIN',
            incorrect: 'PIN incorrecto',
            notConfigured: 'PIN no configurado',
        },
    },
    lockoutMessage: {
        prefix: 'Demasiados intentos fallidos. Espere ',
        seconts: ' segundos.',
    },
    overlayButtonMessage: 'Okay',
};
