import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Foto from '../assets/images/imagem.jpg';

export default function Index() {
  return (
    <ScrollView style={estilos.corpo}>
      <Text style={estilos.titulo}>My First App</Text>
      <Image source={Foto} style={estilos.imagem} />

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Sobre o app</Text>
        <Text style={estilos.texto}>
          Primeiro aplicativo feito com React Native desenvolvido pelo Senai the best!
        </Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>O que aprenderei</Text>
        <Text style={estilos.item}>• Push Notification</Text>
        <Text style={estilos.item}>• Acesso aos recursos nativos</Text>
        <Text style={estilos.item}>• Acesso a APIs externas</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>O que vou precisar</Text>
        <Text style={estilos.item}>• Node.js</Text>
        <Text style={estilos.item}>• VS Code</Text>
        <Text style={estilos.item}>• Emulador ou celular</Text>
        <Text style={estilos.item}>• Ser um(a) bom(boa) aluno(a)</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  corpo: {
    flex: 1,
    backgroundColor: '#dd90f9',
    padding: 20
  },

  titulo: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#4a148c'
  },

  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20
  },

  card: {
    backgroundColor: '#f6dbf7',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,

    // sombra Android
    elevation: 4,

    // sombra iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 }
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#6a1b9a'
  },

  texto: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20
  },

  item: {
    fontSize: 14,
    color: '#444',
    marginBottom: 5
  }
});