export type TypeLegalInfo = 'terms' | 'privacy';
export type TypeSetup = 'account' | 'setup';

export type RootStackParamList = {
    Authentication: undefined;
    LegalInfo: {
        typeInfo: TypeLegalInfo;
    };
    MainNavigation: undefined;
    OnboardingSetup: {
        typeSetup: TypeSetup;
    };
    OnboardingSlides: undefined;
};
