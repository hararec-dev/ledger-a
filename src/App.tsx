import { RootStackNavigation } from './navigation';
import {
  AppThemeProvider,
  BiometricAuthProvider,
  DBProvider,
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
            <DBProvider>
              <NavigationProvider>
                <RootStackNavigation />
              </NavigationProvider>
            </DBProvider>
          </AppThemeProvider>
        </BiometricAuthProvider>
      </SafeProvider>
    </HttpProvider>
  );
};
