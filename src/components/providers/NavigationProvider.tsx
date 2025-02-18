import { NavigationContainer } from '@react-navigation/native';
import { NavigationProviderProps } from '../../types';

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  return (
    <NavigationContainer>
      {children}
    </NavigationContainer>
  );
}
