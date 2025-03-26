import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from './root';
import type { RouteProp } from '@react-navigation/native';

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

export interface OnboardingSetupAccountProps {
  navigation: OnboardingSetupNavigationProp;
}

export interface OnboardingSetupAppProps {
  navigation: OnboardingSetupNavigationProp;
}

export interface OnboardingSetupProps extends OnboardingSetupAccountProps  {
  route: RouteProp<RootStackParamList, 'OnboardingSetup'>;
}
