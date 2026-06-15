import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default function Cadastro() {
  const [temp, setTemp] = useState('');
  const [hum, setHum] = useState('');
  const [vento, setVento] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Cadastro de Medição</Text>

        <Text style={styles.label}>Temperatura</Text>
        <TextInput
          style={styles.input}
          placeholder="0°C"
          value={temp}
          onChangeText={setTemp}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Umidade</Text>
        <TextInput
          style={styles.input}
          placeholder="0%"
          value={hum}
          onChangeText={setHum}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Vento</Text>
        <TextInput
          style={styles.input}
          placeholder="0 km/h"
          value={vento}
          onChangeText={setVento}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#EAF4F4',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 25,
    elevation: 5,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006D77',
    textAlign: 'center',
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    marginTop: 12,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
  },

  botao: {
    backgroundColor: '#006D77',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 25,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});