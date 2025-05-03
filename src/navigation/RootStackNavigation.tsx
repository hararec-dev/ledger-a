import { createStackNavigator } from '@react-navigation/stack';
import {
    AuthenticationScreen,
    LegalInfoScreen,
    OnboardingSetupScreen,
    OnboardingSlidesScreen,
} from '../screens';
import { UtilityStackNavigation } from './UtilityStackNavigation';
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
                        name="OnboardingSlides"
                        component={OnboardingSlidesScreen}
                    />
                    <Stack.Screen
                        name="OnboardingSetup"
                        component={OnboardingSetupScreen}
                    />
                    <Stack.Screen
                        name="LegalInfo"
                        component={LegalInfoScreen}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Authentication"
                        component={AuthenticationScreen}
                    />
                    <Stack.Screen
                        name="UtilityStackNavigation"
                        component={UtilityStackNavigation}
                    />
                </>
            )}
        </Stack.Navigator>
    );
};
