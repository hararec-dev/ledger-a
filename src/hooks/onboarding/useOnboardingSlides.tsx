import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import OnboardingWelcomePair from '@assets/images/onboarding-welcome-pair.svg';
import OnboardingShield from '@assets/images/onboarding-shield.svg';
import OnboardingDataAnalytics from '@assets/images/onboarding-data-analytics.svg';
import OnboardingParty from '@assets/images/onboarding-party.svg';
import OnboardingPayments from '@assets/images/onboarding-payments.svg';
import type { SvgProps } from 'react-native-svg';
import type { Slide } from '@types';


export const useOnboardingSlides = (props?: SvgProps) => {
    const { width, height } = useWindowDimensions();
    const slides = useMemo<Slide[]>(() => [
        {
            title: '¡Bienvenido!',
            desc: 'Gestiona tus finanzas sin esfuerzo y con funciones gratis. ¡Tu billetera te lo agradecerá!',
            img: <OnboardingWelcomePair {...props} width={width * 0.7} height={height * 0.5} />,
        },
        {
            title: 'Tus datos, solo tuyos',
            desc: 'Tu privacidad es lo primero: tus datos se quedan en tu teléfono. Usa la app sin internet ni cuenta. ¡Seguridad total!',
            img: <OnboardingShield {...props} width={width * 0.7} height={height * 0.5} />,
        },
        {
            title: 'Fácil y sin rollos',
            desc: 'Registra tus gastos al instante con detección automática. ¡Simplicidad al máximo!',
            img: <OnboardingPayments {...props} width={width * 0.7} height={height * 0.5} />,
        },
        {
            title: 'Todo claro, en gráficas',
            desc: 'Visualiza tus finanzas con reportes y gráficos. Filtra y descarga en Excel. ¡Control total de tus datos!',
            img: <OnboardingDataAnalytics {...props} width={width * 0.7} height={height * 0.5} />,
        },
        {
            title: '¡Empieza ya!',
            desc: 'Empieza a manejar tu dinero con Ledger-A. ¡Mejora tus finanzas de forma divertida!',
            img: <OnboardingParty {...props} width={width * 0.7} height={height * 0.5} />,
        },
    ], [height, width, props]);

    return { slides };
};
