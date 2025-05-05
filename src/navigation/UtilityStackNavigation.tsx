import { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainBottomTabNavigation } from './MainBottomTabNavigation';
import { NotesStackNavigation } from './NotesStackNavigation';
import { ColorSelectionScreen } from '../screens';
import type { UtilityStackParamList, UtilityStackRoute } from '../types';

const UtilityStack = createStackNavigator<UtilityStackParamList>();

export const UtilityStackNavigation: React.FC = () => {
    const stackRoutes = useMemo<UtilityStackRoute[]>(() => ([
        {
            name: 'MainNavigation',
            component: MainBottomTabNavigation,
            options: {
                title: 'Navegación Principal',
                headerShown: false,
            },
        },
        {
            name: 'ColorSelection',
            component: ColorSelectionScreen,
            options: {
                title: 'Selección de Color',
                presentation: 'modal',
            },
        },
        {
            name: 'Notes',
            component: NotesStackNavigation,
            options: {
                title: 'Notas',
            },
        },
    ]), []);

    return (
        <UtilityStack.Navigator>
            {stackRoutes.map((route) => (
                <UtilityStack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                        ...route.options,
                        headerShown: false,
                    }}
                />
            ))}
        </UtilityStack.Navigator>
    );
};
