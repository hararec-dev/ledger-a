import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "./root";

export type OnboardingAuthSetupNavigationProp = StackNavigationProp<
    RootStackParamList,
    'OnboardingAuthSetup'
>;

export type OnboardingAuthSetupProps = {
    navigation: OnboardingAuthSetupNavigationProp;
};

export type OnboardingSlidesNavigationProp = StackNavigationProp<
    RootStackParamList,
    'OnboardingSlides'
>;

export type OnboardingSlidesProps = {
    navigation: OnboardingSlidesNavigationProp;
};

export type OnboardingSetupNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OnboardingSetup'
>;

export type OnboardingSetupProps = {
  navigation: OnboardingSetupNavigationProp;
};