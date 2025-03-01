import { AppThemeProvider, HttpProvider, NavigationProvider, SafeProvider } from "./components/providers";
import { MainBottomTabNavigation } from "./navigation";

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