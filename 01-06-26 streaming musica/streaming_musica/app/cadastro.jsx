import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { router } from 'expo-router';

export default function Cadastro() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
      />

      <TextInput
        placeholder="E-mail"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        placeholder="Confirmar senha"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:20
  },

  titulo:{
    fontSize:30,
    textAlign:'center',
    marginBottom:20
  },

  input:{
    borderWidth:1,
    borderColor:'#ccc',
    padding:12,
    borderRadius:10,
    marginBottom:10
  },

  botao:{
    backgroundColor:'#0F766E',
    padding:15,
    borderRadius:10
  },

  textoBotao:{
    color:'#fff',
    textAlign:'center'
  }
});