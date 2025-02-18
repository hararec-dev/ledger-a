import { HttpProvider, NavigationProvider } from "./components/providers";
import { MainBottomTabNavigation } from "./navigation";

export const App = (): React.JSX.Element => {
  return (
    <HttpProvider>
      <NavigationProvider>
        <MainBottomTabNavigation />
      </NavigationProvider>
    </HttpProvider>
  );
}