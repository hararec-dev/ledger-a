import { AppThemeProvider, HttpProvider, NavigationProvider } from "./components/providers";
import { MainBottomTabNavigation } from "./navigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = (): React.JSX.Element => {
  return (
    <HttpProvider>
      <SafeAreaProvider>
        <AppThemeProvider>
          <NavigationProvider>
            <MainBottomTabNavigation />
          </NavigationProvider>
        </AppThemeProvider>
      </SafeAreaProvider>
    </HttpProvider>
  );
}