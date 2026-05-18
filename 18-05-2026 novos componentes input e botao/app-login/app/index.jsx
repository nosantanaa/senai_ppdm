import { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";

import Logo from "../assets/images/akaza.jpg";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function Login() {
    console.log("Dados do login");
    console.log({ email, senha });
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Image source={Logo} style={estilos.logo} resizeMode="cover" />

      <View style={estilos.card}>
        <Text style={estilos.titulo}>Login</Text>

        <Text style={estilos.sub}>
          Para prosseguir, insira seus dados
        </Text>

        <TextInput
          style={estilos.input}
          placeholder="Digite seu email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={estilos.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={estilos.botao} onPress={Login}>
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0f0f0f",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: "#ff2e63",
  },

  card: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    padding: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },

  titulo: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  sub: {
    fontSize: 15,
    color: "#bbb",
    textAlign: "center",
    marginBottom: 25,
  },

  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#262626",
    borderRadius: 12,
    paddingHorizontal: 15,
    color: "#fff",
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },

  botao: {
    width: "100%",
    height: 55,
    backgroundColor: "#ff2e63",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});