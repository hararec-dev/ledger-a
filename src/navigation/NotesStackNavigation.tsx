import { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NotesListScreen, AddNoteScreen, NoteDetailsScreen } from '@screens';
import type { NotesStackParamList, NotesStackRoute } from '@types';

const NotesStack = createStackNavigator<NotesStackParamList>();

export const NotesStackNavigation: React.FC = () => {
    const stackRoutes = useMemo<NotesStackRoute[]>(() => ([
        {
            name: 'NotesList',
            component: NotesListScreen,
            options: { title: 'Lista de Notas' },
        },
        {
            name: 'AddNote',
            component: AddNoteScreen,
            options: {
                title: 'Nueva Nota',
                presentation: 'modal',
            },
        },
        {
            name: 'NoteDetails',
            component: NoteDetailsScreen,
            options: { title: 'Detalle de Nota' },
        },
    ]), []);

    return (
        <NotesStack.Navigator>
            {stackRoutes.map((route) => (
                <NotesStack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                        ...route.options,
                        headerShown: false,
                    }}
                />
            ))}
        </NotesStack.Navigator>
    );
};
