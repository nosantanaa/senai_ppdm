import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Estação Meteorológica</Text>

      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        placeholderTextColor="#7A8CA5"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={estilos.input}
        placeholder="Senha"
        placeholderTextColor="#7A8CA5"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.replace("Inicio")}
      >
        <Text style={estilos.textoBotao}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Registro")}
      >
        <Text style={estilos.criarConta}>Criar conta</Text>
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

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 40,
  },

  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#90CAF9",
    elevation: 3,
  },

  botao: {
    width: "100%",
    height: 55,
    backgroundColor: "#1976D2",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    elevation: 5,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  criarConta: {
    marginTop: 20,
    color: "#1565C0",
    fontSize: 16,
    fontWeight: "600",
  },
});