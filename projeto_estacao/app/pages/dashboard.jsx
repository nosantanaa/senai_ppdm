import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";

const larguraTela = Dimensions.get("window").width;

export default function Dashboard() {
  const dadosGraficoLinha = {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        data: [3, 5, 7, 11, 13, 15, 18, 20, 22, 25, 30, 35],
      },
    ],
    legend: ["Medições"],
  };

  const dadosGraficoPizza = [
    {
      name: "Airport",
      temp: 45,
      color: "#215a13",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Centro",
      temp: 17,
      color: "#8ac039",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Esplanada",
      temp: 27,
      color: "#39c078",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
  ];

  const chartConfig = {
    backgroundColor: "#1976D2",
    backgroundGradientFrom: "#1976D2",
    backgroundGradientTo: "#42A5F5",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
    labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "5",
      strokeWidth: "2",
      stroke: "#ffffff",
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Dashboard Meteorológico</Text>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Medições Mensais</Text>

        <LineChart
          data={dadosGraficoLinha}
          width={larguraTela - 60}
          height={240}
          chartConfig={chartConfig}
          bezier
          style={styles.grafico}
        />
      </View>

      <View style={styles.cardPizza}>
        <Text style={styles.subtitulo}>Temperatura por Região</Text>

        <PieChart
          data={dadosGraficoPizza}
          width={larguraTela - 60}
          height={220}
          chartConfig={chartConfig}
          accessor="temp"
          backgroundColor="transparent"
          paddingLeft="30"
          absolute
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#EAF4FF",
    flexGrow: 1,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 20,
  },

  card: {
    width: larguraTela - 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
  },

  cardPizza: {
    width: larguraTela - 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
    alignItems: "center",
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1565C0",
    textAlign: "center",
    marginBottom: 15,
  },

  grafico: {
    borderRadius: 16,
  },
});