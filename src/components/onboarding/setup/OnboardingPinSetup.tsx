import { ONBOARDING_SETUP_TEXT } from '../../../config';
import { OnboardingPinInput } from '../../../components';
import type { OnboardingFormProps } from '../../../types';

export const OnboardingPinSetup: React.FC<OnboardingFormProps> = ({ formik, gradientColors }) => {
    return (
        <>
            <OnboardingPinInput
                label={ONBOARDING_SETUP_TEXT.pinLabel || 'Crear PIN'}
                value={formik.values.pin}
                fieldName="pin"
                placeholder={ONBOARDING_SETUP_TEXT.pinPlaceholder || 'Ingresa un PIN de 4 dígitos'}
                formik={formik}
                gradientColors={gradientColors}
            />
            <OnboardingPinInput
                label={ONBOARDING_SETUP_TEXT.confirmPinLabel || 'Confirmar PIN'}
                value={formik.values.confirmPin}
                fieldName="confirmPin"
                placeholder={ONBOARDING_SETUP_TEXT.confirmPinPlaceholder || 'Confirma tu PIN'}
                formik={formik}
                gradientColors={gradientColors}
            />
        </>
    );
};
