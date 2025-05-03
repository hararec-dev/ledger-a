import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from './root';

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

export interface OnboardingSetupNavProps {
  navigation: OnboardingSetupNavigationProp;
}

export interface OnboardingSetupProps extends OnboardingSetupNavProps  {
  route: RouteProp<RootStackParamList, 'OnboardingSetup'>;
}
