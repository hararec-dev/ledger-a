import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationOptions } from '@react-navigation/stack';

export type NotesStackParamList = {
  NotesList: undefined;
  AddNote: undefined;
  NoteDetails: {
    noteId: string
  };
};

export type NoteDetailsProps = {
  route: RouteProp<NotesStackParamList, 'NoteDetails'>;
};

export type NotesStackRoute = {
  name: keyof NotesStackParamList;
  component: React.ComponentType<any>;
  options: StackNavigationOptions;
};
