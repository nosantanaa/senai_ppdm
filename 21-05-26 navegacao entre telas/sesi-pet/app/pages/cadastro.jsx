import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function Cadastro({ navigation }) {
  return (
    <View style={estilos.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7b2cbf" />

      <View style={estilos.card}>
        <Text style={estilos.titulo}>Bem-vindo</Text>

        <Text style={estilos.subtitulo}>
          Faça login para continuar
        </Text>

        <TextInput
          placeholder="Digite seu usuário"
          placeholderTextColor="#a06cd5"
          style={estilos.input}
        />

        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#a06cd5"
          secureTextEntry={true}
          style={estilos.input}
        />
        <TextInput
          placeholder="Confirme sua senha"
          placeholderTextColor="#a06cd5"
          secureTextEntry={true}
          style={estilos.input}
        />

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.replace("login")}
        >
          <Text style={estilos.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7b2cbf",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#5a189a",
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 16,
    color: "#9d4edd",
    marginBottom: 35,
  },

  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#f3e8ff",
    borderRadius: 15,
    paddingHorizontal: 18,
    marginBottom: 18,
    fontSize: 16,
    color: "#3c096c",
    borderWidth: 2,
    borderColor: "#e0aaff",
  },

  botao: {
    width: "100%",
    height: 55,
    backgroundColor: "#9d4edd",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#9d4edd",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  rodape: {
    marginTop: 25,
    fontSize: 13,
    color: "#7b2cbf",
    textAlign: "center",
  },
});