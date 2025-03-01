import { AppThemeProvider, HttpProvider, NavigationProvider, SafeProvider } from "./components/providers";
import { MainBottomTabNavigation } from "./navigation";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export const App = (): React.JSX.Element => {
  return (
    <HttpProvider>
      <SafeProvider>
        <AppThemeProvider>
          <NavigationProvider>
            <MainBottomTabNavigation />
          </NavigationProvider>
        </AppThemeProvider>
      </SafeProvider>
    </HttpProvider>
  );
}