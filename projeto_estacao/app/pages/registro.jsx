import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Estacao from "../../assets/estacao.jpg";

export default function Registro({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");

  return (
    <View style={estilos.container}>
      <Image source={Estacao} style={estilos.imagem} />

      <Text style={estilos.titulo}>Cadastro de Usuário</Text>

      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        placeholderTextColor="#7A8CA5"
        value={usuario}
        onChangeText={setUsuario}
        keyboardType="email-address"
      />

      <TextInput
        style={estilos.input}
        placeholder="Senha"
        placeholderTextColor="#7A8CA5"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        style={estilos.input}
        placeholder="Confirme a senha"
        placeholderTextColor="#7A8CA5"
        secureTextEntry
        value={confSenha}
        onChangeText={setConfSenha}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.replace("Inicio")}
      >
        <Text style={estilos.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={estilos.criarConta}>
          Já tem conta? Faça login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF4FF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  imagem: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 25,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 40,
  },

  input: {
    width: "100%",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#BBDEFB",
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingVertical: 15,
    fontSize: 16,
    color: "#333",
    marginBottom: 18,
    elevation: 3,
  },

  botao: {
    width: "100%",
    backgroundColor: "#1976D2",
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
    elevation: 5,
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  criarConta: {
    marginTop: 25,
    color: "#1565C0",
    fontSize: 15,
    fontWeight: "600",
  },
});