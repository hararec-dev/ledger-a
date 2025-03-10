import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "./root";

export type OnboardingAuthSetupNavigationProp = StackNavigationProp<
    RootStackParamList,
    'OnboardingAuthSetup'
>;

export type OnboardingAuthSetupProps = {
    navigation: OnboardingAuthSetupNavigationProp;
};

export type OnboardingCarouselNavigationProp = StackNavigationProp<
    RootStackParamList,
    'OnboardingCarousel'
>;

export type OnboardingCarouselProps = {
    navigation: OnboardingCarouselNavigationProp;
};

export type OnboardingSetupNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OnboardingSetup'
>;

export type OnboardingSetupProps = {
  navigation: OnboardingSetupNavigationProp;
};