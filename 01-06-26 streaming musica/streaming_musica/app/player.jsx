import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';

export default function Player() {

  const { titulo, artista } =
    useLocalSearchParams();

  return (
    <View style={styles.container}>

      <Text style={styles.capa}>
        🎵
      </Text>

      <Text style={styles.titulo}>
        {titulo}
      </Text>

      <Text style={styles.artista}>
        {artista}
      </Text>

      <View style={styles.controles}>
        <TouchableOpacity>
          <Text style={styles.icone}>⏮️</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.icone}>⏸️</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.icone}>⏭️</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.reproduzindo}>
        Tocando Agora
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },

  capa:{
    fontSize:120
  },

  titulo:{
    fontSize:28,
    fontWeight:'bold'
  },

  artista:{
    fontSize:18,
    color:'gray',
    marginTop:10
  },

  controles:{
    flexDirection:'row',
    gap:30,
    marginTop:40
  },

  icone:{
    fontSize:40
  },

  reproduzindo:{
    marginTop:30,
    color:'#0F766E',
    fontWeight:'bold'
  }
});