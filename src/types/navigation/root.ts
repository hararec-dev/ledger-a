export type TypeLegalInfo = 'terms' | 'privacy';

export type RootStackParamList = {
    Authentication: undefined;
    LegalInfo: {
        typeInfo: TypeLegalInfo;
    };
    MainNavigation: undefined;
    OnboardingAuthSetup: undefined;
    OnboardingSetup: undefined;
    OnboardingSlides: undefined;
};