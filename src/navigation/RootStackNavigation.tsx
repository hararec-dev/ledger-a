import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticationScreen, OnboardingAuthSetupScreen, OnboardingCarouselScreen, OnboardingSetupScreen } from '../screens';
import { MainBottomTabNavigation } from './MainBottomTabNavigation';
import { useCurrentStatusAppStore } from '../hooks';
import type { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStackNavigation: React.FC = () => {
    const { hasOnboarded } = useCurrentStatusAppStore();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!hasOnboarded ? (
                <>
                    <Stack.Screen
                        name="OnboardingCarousel"
                        component={OnboardingCarouselScreen}
                    />
                    <Stack.Screen
                        name="OnboardingSetup"
                        component={OnboardingSetupScreen}
                    />
                    <Stack.Screen
                        name="OnboardingAuthSetup"
                        component={OnboardingAuthSetupScreen}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Authentication"
                        component={AuthenticationScreen}
                    />
                    <Stack.Screen
                        name="MainNavigation"
                        component={MainBottomTabNavigation}
                    />
                </>
            )}
        </Stack.Navigator>
    );
};
