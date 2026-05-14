import { Text, View, SafeAreaView, FlatList, StyleSheet, Image } from "react-native";
import Header from './components/Header'
import tarefas from './dados/tarefas';


function ItemTarefa({item}){
  return(
    <View style={estilos.card}>
      <Image source={item.photo} style={estilos.foto}/>
      <Text style={estilos.titulo}>{item.title}</Text>
      <Text style={estilos.status}>{item.status}</Text>
      <Text style={estilos.desc}>{item.description}</Text>
    </View>
  )
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo='sesi produtividade'/>
      <FlatList 
      data={tarefas} 
      keyExtractor={item => String(item.id)} 
      renderItem={({item}) => <ItemTarefa item={item}/>}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    padding:10
  },
  card:{
    backgroundColor:'#fff',
    padding:10,
    marginBottom:10,
    borderRadius:10
  },
  foto:{
    width:100,
    height:100,
    borderRadius:10
  },
  titulo:{
    fontSize:18,
    fontWeight:'bold'
  },
  status:{
    color:'blue'
  },
  desc:{
    color:'#555'
  }
})