import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Relatorio() {

  const medicoes = [
    {
      id: '1',
      temperatura: '28°C',
      humidade: '65%',
      vento: '12 km/h',
    },
    {
      id: '2',
      temperatura: '30°C',
      humidade: '58%',
      vento: '15 km/h',
    },
    {
      id: '3',
      temperatura: '26°C',
      humidade: '72%',
      vento: '10 km/h',
    },
    {
      id: '4',
      temperatura: '29°C',
      humidade: '60%',
      vento: '18 km/h',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Relatório de Medições</Text>

      <FlatList
        data={medicoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
              }}
              style={styles.imagem}
            />

            <View>
              <Text style={styles.texto}>
                Temperatura: {item.temperatura}
              </Text>

              <Text style={styles.texto}>
                Humidade: {item.humidade}
              </Text>

              <Text style={styles.texto}>
                Velocidade do vento: {item.vento}
              </Text>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Gerar Relatório</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF4F4',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006D77',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },
  imagem: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  texto: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  botao: {
    backgroundColor: '#006D77',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});