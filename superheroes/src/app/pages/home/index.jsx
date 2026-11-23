import { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const [herois, setHerois] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const carregaHeroes = async () => {
    try {
      setCarregando(true);
      setErro(null);

      const response = await fetch('https://superheroes-api-one.vercel.app/api/herois');
      if (!response.ok) {
        throw new Error('Erro ao buscar heróis');
      }

      const data = await response.json();
      const lista = Array.isArray(data) ? data : data?.herois || [];
      setHerois(lista);
    } catch (e) {
      setErro(e.message || 'Erro inesperado');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregaHeroes();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.heroCard}>
      {item.foto && (
        <Image
          source={{ uri: item.foto }}
          style={styles.heroImage}
          resizeMode="cover"
        />
      )}
      <View style={styles.heroInfo}>
        <Text style={styles.heroName}>{item.nome}</Text>
        <View style={styles.strengthRow}>
          <Text style={styles.strengthLabel}>FORÇA</Text>
          <Text style={styles.strengthValue}>{item.forca}</Text>
        </View>
        <Text style={styles.skillsLabel}>HABILIDADES</Text>
        <Text style={styles.skillsText} numberOfLines={2}>
          {item.habilidade}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerEyebrow}>SUPER DATABASE</Text>
        <Text style={styles.title}>Lista de Heróis</Text>
      </View>
      {carregando && <Text style={styles.statusText}>Carregando heróis...</Text>}
      {erro && <Text style={styles.errorText}>Erro: {erro}</Text>}
      {!carregando && !erro && herois.length === 0 && (
        <Text style={styles.statusText}>Nenhum herói encontrado.</Text>
      )}
      {!carregando && !erro && (
        <FlatList
          data={herois}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#090B12",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    width: "100%",
    maxWidth: 680,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#F2C94C",
    paddingBottom: 14,
    marginBottom: 18,
  },
  headerEyebrow: {
    color: "#F2C94C",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 3,
    marginBottom: 4,
    textAlign: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
    letterSpacing: -1,
    textAlign: "center",
  },
  list: {
    width: "100%",
  },
  listContent: {
    alignItems: "center",
    paddingBottom: 32,
  },
  heroCard: {
    width: "100%",
    maxWidth: 680,
    height: 150,
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: "#151824",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#292D40",
    marginBottom: 14,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
  },
  heroImage: {
    width: 120,
    height: "100%",
    alignSelf: "stretch",
    backgroundColor: "#24283A",
  },
  heroInfo: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 14,
  },
  heroName: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
    marginBottom: 10,
  },
  strengthRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#F2C94C",
    borderRadius: 7,
    marginBottom: 12,
    overflow: "hidden",
  },
  strengthLabel: {
    color: "#171717",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
    paddingVertical: 6,
    paddingLeft: 8,
  },
  strengthValue: {
    color: "#171717",
    fontSize: 13,
    fontWeight: "900",
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  skillsLabel: {
    color: "#F2C94C",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 3,
  },
  skillsText: {
    color: "#C9CDDA",
    fontSize: 14,
    lineHeight: 20,
  },
  statusText: {
    color: "#C9CDDA",
    fontSize: 16,
    marginTop: 30,
  },
  errorText: {
    color: "#FF7777",
    backgroundColor: "#35191F",
    borderWidth: 1,
    borderColor: "#7D3038",
    borderRadius: 10,
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 30,
  },
});

