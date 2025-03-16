import { useMemo } from 'react';
import OnboardingWelcomePair from '../../assets/images/onboarding-welcome-pair.svg';
import OnboardingShield from '../../assets/images/onboarding-shield.svg';
import OnboardingDataAnalytics from '../../assets/images/onboarding-data-analytics.svg';
import OnboardingParty from '../../assets/images/onboarding-party.svg';
import OnboardingPayments from '../../assets/images/onboarding-payments.svg';
import type { SvgProps } from 'react-native-svg';
import type { Slide } from '../../types';


export const useOnboardingSlides = (props?: SvgProps) => {
    const slides = useMemo<Slide[]>(() => [
        {
            title: '¡Bienvenido a Ledger A!',
            desc: 'Controla tus finanzas sin complicaciones. Todas las funcionalidades que esperas 100% gratis. ¡Tu billetera te lo agradecerá!',
            img: <OnboardingWelcomePair {...props} />,
        },
        {
            title: 'Tus datos, solo tuyos',
            desc: 'Tu privacidad es prioridad. Tus datos nunca salen de tu teléfono. Usa la app sin necesidad de internet ni de crear una cuenta. ¡Seguridad total!',
            img: <OnboardingShield {...props} />,
        },
        {
            title: 'Fácil y sin rollos',
            desc: 'Registra gastos con un toque, usa la detección automática de categorías y los atajos para gastos frecuentes. ¡Simplicidad es la clave!',
            img: <OnboardingPayments {...props} />,
        },
        {
            title: 'Todo claro, en gráficas',
            desc: 'Obtén reportes y gráficas de tus finanzas. Filtra y descarga en Excel, CSV o JSON. ¡Tus datos, a tu manera!',
            img: <OnboardingDataAnalytics {...props} />,
        },
        {
            title: '¡Empieza ya!',
            desc: 'Ledger-A te ayuda a controlar tu dinero. ¡Comienza ahora y mejora tus finanzas de manera fácil y divertida!',
            img: <OnboardingParty {...props} />,
        },
    ], []);

    return { slides };
};
