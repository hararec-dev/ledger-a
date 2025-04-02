import type { TextContent } from "../types";

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
    FINGERPRINT_PROMPT: 'Ingresa con tu huella 💸✨',
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
