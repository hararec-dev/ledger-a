import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { NotesStackParamList } from '@types';

type NoteDetailsScreenRouteProp = RouteProp<NotesStackParamList, 'NoteDetails'>;

export const NoteDetailsScreen: React.FC = () => {
  const route = useRoute<NoteDetailsScreenRouteProp>();
  const { noteId } = route.params;

  // Aquí normalmente obtendrías los detalles de la nota usando el noteId
  // Por ahora usamos datos de ejemplo
  const noteTitle = 'Nota de ejemplo';
  const noteContent = 'Este es el contenido de la nota de ejemplo. Aquí se mostraría el texto completo de la nota seleccionada.';
  const noteDate = '10/05/2023';

  const handleEditNote = () => {
    // Aquí iría la navegación a la pantalla de edición
    // Por ahora solo mostramos un mensaje en consola
    console.log(`Editar nota con ID: ${noteId}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{noteTitle}</Text>
        <Text style={styles.date}>{noteDate}</Text>
      </View>

      <ScrollView style={styles.contentContainer}>
        <Text style={styles.content}>{noteContent}</Text>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={handleEditNote}
        >
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  editButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
