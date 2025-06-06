import * as Yup from 'yup';
import type { ValidationConstants } from '@types';

const VALIDATION_CONSTANTS: ValidationConstants = {
    ONBOARDING_SETUP: {
        REQUIRED: {
            currency: 'La moneda es requerida',
            accountName: 'El nombre de la cuenta es requerido',
            initialAmount: 'El monto inicial es requerido',
            pin: 'El PIN es requerido',
            confirmPin: 'La confirmación del PIN es requerida',
            authMethod: 'Se requiere un método de autenticación',
            accountType: 'El tipo de cuenta es requerido',
        },
        NUMERIC: {
            positiveNumber: 'El monto debe ser un número positivo',
        },
        PIN: {
            length: 'El PIN debe tener exactamente 4 dígitos',
            match: 'Los PINs no coinciden',
            onlyNumbers: 'El PIN debe contener solo números',
        },
    },
};

export const validationOnboardingSetup = Yup.object().shape({
    currency: Yup.string().required(VALIDATION_CONSTANTS.ONBOARDING_SETUP.REQUIRED.currency),
    accountType: Yup.string().required(VALIDATION_CONSTANTS.ONBOARDING_SETUP.REQUIRED.accountType),
    accountName: Yup.string().required(VALIDATION_CONSTANTS.ONBOARDING_SETUP.REQUIRED.accountName),
    initialAmount: Yup.number()
        .required(VALIDATION_CONSTANTS.ONBOARDING_SETUP.REQUIRED.initialAmount)
        .min(0, VALIDATION_CONSTANTS.ONBOARDING_SETUP.NUMERIC.positiveNumber),
});

export const validationOnboardingApp = Yup.object().shape({
    theme: Yup.string().oneOf(['light', 'dark']).default('dark'),
    isTouchIdEnabled: Yup.boolean().default(true)
        .test(
            'at-least-one-auth-method',
            VALIDATION_CONSTANTS.ONBOARDING_SETUP.REQUIRED.authMethod,
            function(value) {
                return value || this.parent.isPinEnabled;
            }
        ),
    isPinEnabled: Yup.boolean().default(false)
        .test(
            'at-least-one-auth-method',
            VALIDATION_CONSTANTS.ONBOARDING_SETUP.REQUIRED.authMethod,
            function(value) {
                return value || this.parent.isTouchIdEnabled;
            }
        ),
    pin: Yup.string()
        .when('isPinEnabled', {
            is: true,
            then: (schema) => schema
                .required(VALIDATION_CONSTANTS.ONBOARDING_SETUP.REQUIRED.pin)
                .matches(/^\d+$/, VALIDATION_CONSTANTS.ONBOARDING_SETUP.PIN.onlyNumbers)
                .length(4, VALIDATION_CONSTANTS.ONBOARDING_SETUP.PIN.length),
            otherwise: (schema) => schema.notRequired(),
        }),
    confirmPin: Yup.string()
        .when('isPinEnabled', {
            is: true,
            then: (schema) => schema
                .required(VALIDATION_CONSTANTS.ONBOARDING_SETUP.REQUIRED.confirmPin)
                .oneOf([Yup.ref('pin')], VALIDATION_CONSTANTS.ONBOARDING_SETUP.PIN.match),
            otherwise: (schema) => schema.notRequired(),
        }),
});
