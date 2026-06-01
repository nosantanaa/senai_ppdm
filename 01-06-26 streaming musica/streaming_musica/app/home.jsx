import {
  View,
  FlatList,
  Button,
  Text,
  StyleSheet
} from 'react-native';

import MusicCard from '../components/MusicCard';
import { musicas } from '../data/musicas';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        🎵 Wave Music
      </Text>

      <Button
        title="Favoritos"
        onPress={() => router.push('/favoritos')}
      />

      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MusicCard musica={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  },

  titulo:{
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20,
    color:'#0F766E'
  }
});