import * as Yup from 'yup';
import type { ValidationConstants } from '../types';

const VALIDATION_CONSTANTS: ValidationConstants = {
    ONBOARDING_SETUP: {
        REQUIRED: {
            currency: 'La moneda es requerida',
            accountName: 'El nombre de la cuenta es requerido',
            initialAmount: 'El monto inicial es requerido',
        },
        NUMERIC: {
            positiveNumber: 'El monto debe ser un número positivo',
        }
    }
};

export const validationOnboardingSetupSchema = Yup.object().shape({
    currency: Yup.string().required(VALIDATION_CONSTANTS.ONBOARDING_SETUP.REQUIRED.currency),
    accountName: Yup.string().required(VALIDATION_CONSTANTS.ONBOARDING_SETUP.REQUIRED.accountName),
    initialAmount: Yup.number()
        .required(VALIDATION_CONSTANTS.ONBOARDING_SETUP.REQUIRED.initialAmount)
        .min(0, VALIDATION_CONSTANTS.ONBOARDING_SETUP.NUMERIC.positiveNumber),
});
