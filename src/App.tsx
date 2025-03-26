import { RootStackNavigation } from './navigation';
import {
  AppThemeProvider,
  BiometricAuthProvider,
  HttpProvider,
  NavigationProvider,
  SafeProvider,
} from './components';

export const App = (): React.JSX.Element => {
  return (
    <HttpProvider>
      <SafeProvider>
        <BiometricAuthProvider>
          <AppThemeProvider>
            <NavigationProvider>
              <RootStackNavigation />
            </NavigationProvider>
          </AppThemeProvider>
        </BiometricAuthProvider>
      </SafeProvider>
    </HttpProvider>
  );
};
