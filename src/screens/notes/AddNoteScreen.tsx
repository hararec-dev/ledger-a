import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { NotesStackParamList } from '../../types';

type AddNoteScreenNavigationProp = StackNavigationProp<NotesStackParamList, 'AddNote'>;

export const AddNoteScreen: React.FC = () => {
  const navigation = useNavigation<AddNoteScreenNavigationProp>();

  const handleSaveNote = () => {
    // Aquí iría la lógica para guardar la nota
    // Por ahora solo navegamos de vuelta a la lista
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Título de la nota"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.contentInput}
        placeholder="Escribe tu nota aquí..."
        placeholderTextColor="#999"
        multiline
        textAlignVertical="top"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titleInput: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  contentInput: {
    flex: 1,
    fontSize: 16,
    padding: 8,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
