import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { router } from 'expo-router';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Wave Music</Text>

      <TextInput
        placeholder="E-mail"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/home')}
      >
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/cadastro')}
      >
        <Text style={styles.link}>
          Criar Conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:20,
    backgroundColor:'#fff'
  },

  logo:{
    fontSize:35,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:40,
    color:'#0F766E'
  },

  input:{
    borderWidth:1,
    borderColor:'#ccc',
    padding:12,
    marginBottom:12,
    borderRadius:10
  },

  botao:{
    backgroundColor:'#0F766E',
    padding:15,
    borderRadius:10
  },

  textoBotao:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold'
  },

  link:{
    textAlign:'center',
    marginTop:20,
    color:'#0F766E'
  }
});