import { ONBOARDING_SETUP_TEXT } from '../../../config';
import { OnboardingPinInput } from '../../../components';
import type { OnboardingFormProps } from '../../../types';

export const OnboardingPinSetup: React.FC<OnboardingFormProps> = ({ formik, gradientColors }) => {
    return (
        <>
            <OnboardingPinInput
                autoFocus
                fieldName="pin"
                formik={formik}
                gradientColors={gradientColors}
                label={ONBOARDING_SETUP_TEXT.pinLabel || 'Crear PIN'}
                placeholder={ONBOARDING_SETUP_TEXT.pinPlaceholder || 'Ingresa un PIN de 4 dígitos'}
                value={formik.values.pin}
            />
            <OnboardingPinInput
                fieldName="confirmPin"
                formik={formik}
                gradientColors={gradientColors}
                label={ONBOARDING_SETUP_TEXT.confirmPinLabel || 'Confirmar PIN'}
                placeholder={ONBOARDING_SETUP_TEXT.confirmPinPlaceholder || 'Confirma tu PIN'}
                value={formik.values.confirmPin}
            />
        </>
    );
};
