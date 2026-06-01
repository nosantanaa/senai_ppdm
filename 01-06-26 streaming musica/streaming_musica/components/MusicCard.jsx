import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function MusicCard({ musica }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: '/player',
          params: {
            titulo: musica.titulo,
            artista: musica.artista,
          },
        })
      }
    >
      <Text style={styles.titulo}>{musica.titulo}</Text>
      <Text style={styles.artista}>{musica.artista}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0F766E',
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
  },

  titulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  artista: {
    color: '#ddd',
    marginTop: 4,
  },
});