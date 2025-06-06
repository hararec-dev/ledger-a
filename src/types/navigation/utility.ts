import type { StackNavigationOptions } from '@react-navigation/stack';

export type UtilityStackParamList = {
  MainNavigation: undefined;
  ColorSelection: undefined;
  Notes: undefined;
};

export type UtilityStackRoute = {
  name: keyof UtilityStackParamList;
  component: React.ComponentType<any>;
  options: StackNavigationOptions;
};
