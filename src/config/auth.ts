export const AUTH_CONFIG = {
    MAX_ATTEMPTS: 3,
    LOCKOUT_DURATION: 30000,
    PAYLOAD_LENGTH: 64
} as const;

export const AUTH_TEXTS = {
    ERROR_TITLE: 'Error',
    MAX_ATTEMPTS_MESSAGE: 'You have exceeded the maximum number of attempts. Please try again after 30 seconds.',
    FAILED_ATTEMPT_MESSAGE: (attempts: number, max: number) => 
        `Failed attempt (${attempts}/${max}). Please try again.`,
    BIOMETRIC_UNAVAILABLE: 'Biometric authentication is not available on this device.',
    FINGERPRINT_PROMPT: 'Ingresa con tu huella 💸',
    CANCEL_BUTTON: 'Cancel',
    USER_SESSION_KEY: 'userSession'
} as const;