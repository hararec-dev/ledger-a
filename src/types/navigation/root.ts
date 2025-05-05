export type TypeLegalInfo = 'terms' | 'privacy';
export type TypeSetup = 'account' | 'setup';

export type RootStackParamList = {
    Authentication: undefined;
    LegalInfo: {
        typeInfo: TypeLegalInfo;
    };
    UtilityStackNavigation: undefined;
    OnboardingSetup: {
        typeSetup: TypeSetup;
    };
    OnboardingSlides: undefined;
};
