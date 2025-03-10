import { AppThemeProvider, HttpProvider, NavigationProvider, SafeProvider } from "./components";
import { RootStackNavigation } from "./navigation";

export const App = (): React.JSX.Element => {
  return (
    <HttpProvider>
      <SafeProvider>
        <AppThemeProvider>
          <NavigationProvider>
            <RootStackNavigation />
          </NavigationProvider>
        </AppThemeProvider>
      </SafeProvider>
    </HttpProvider>
  );
}