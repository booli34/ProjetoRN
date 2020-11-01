import React from 'react';
import { Text, View, StyleSheet, Image, Button, FlatList, TouchableOpacityBase, onPress, Alert  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { SimpleLineIcons } from '@expo/vector-icons'; 
// Professor, nas prints o senhor deve ter visto que essa página havia sido uma gambiarra, isso aconteceu por conta de
// que o William (minha dupla) iria viajar e estavamos sem tempo para terminar até sábado (data da entrega). por conta disso
// tive que improvisar no layout para ele conseguir entregar, mas agora q eu tive um tempinho arrumei sem usar aquele monte de br
// espero que entenda o desespero de 2 alunos tentando entregar a lição.
// ass: Lucas Seles :)

export default function Loja({navigation}) {
            return(
                    <View style={styles.fundo} >
                         <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', position:"relative", marginRight:360 }}>
                             <SimpleLineIcons name="menu" size={50} color="white"  onPress={() => navigation.openDrawer()} />
                             <Text style={styles.title}>Produtos</Text>
                             <View style={{flex: 1, flexDirection: 'row', marginLeft:150, marginTop:100,}}>>
                                 
                            <Image 
                                style={styles.prod} source={require('../img/violao.jpeg')}>   
                                 </Image>
                                 <View style={{ marginLeft:10, marginTop:-20}}>
                                 <Text style={styles.legenda}>Violão Elétrico Aço Série America</Text>
                                 <Text style={styles.legenda}>Kansas Mahogany NM Tagim</Text>
                                 <Text style={styles.legenda}>Natural Mahogany (NW)</Text>
                                 <Text style={styles.legenda}>R$ 1.390,00 em até</Text> 
                                 <Text style={styles.legenda}>R10x de R$139,00 sem juros</Text>
                                 <Button title="Comprar" color="#00e64d" onPress={() => Alert.alert('Produto Adquirido')}></Button>
                                 </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', marginLeft:150}}>>
                            <Image 
                                style={styles.prod} source={require('../img/violindo.png')}>         
                            </Image>
                            <View style={{ marginLeft:10, marginTop:-20}}>
                                 <Text style={styles.legenda}>Violão Elétrico Aço Série America</Text>
                                 <Text style={styles.legenda}> Kansas Mahogany NM Tagim</Text>
                                 <Text style={styles.legenda}>Natural Mahogany (NW)+ Capa</Text>
                                 <Text style={styles.legenda}>R$ 1.490,00 em até</Text> 
                                 <Text style={styles.legenda}>R10x de R$149,00 sem juros</Text>
                                 <Button title="Comprar" color="#00e64d" onPress={() => Alert.alert('Produto Adquirido')}></Button>      
                            </View>       
                            </View>
                        </View>
                     </View>
                    
)};

const styles = StyleSheet.create({
        fundo: {
        flex:1,
        backgroundColor: "#000",
        },
        title:{
      position:"absolute",
        flex:1,
        textAlign: "center",
        color:"#FFF",
        fontSize:40,
        marginLeft:400,
  },
  prod:{
      marginTop:-40,
      justifyContent:"flex-start",
      width:150,
      height:150,
      borderRadius:30,
      marginLeft:50,
  },
  legenda:{
    alignItems:'stretch',
      flexDirection:'row',
    color:"#FFF",
    fontSize:13,
  },
})
