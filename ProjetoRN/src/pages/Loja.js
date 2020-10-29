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


export default function Loja({navigation}) {
            return(
                    <View style={styles.fundo} >
                         <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', position:"relative", marginRight:360 }}>
                             <SimpleLineIcons name="menu" size={50} color="white"  onPress={() => navigation.openDrawer()} />
                             <Text style={styles.title}>Produtos</Text>
                              <Image 
                                style={styles.prod} source={require('../img/violao.jpeg')}>         
                            </Image>
                            
                            <Image 
                                style={styles.prod} source={require('../img/violindo.png')}>         
                            </Image>
                     </View>
                     
                     
                     <Text style={styles.leg}><br/><br/><br/><br/><br/><br/><br/><br/>Violão Elétrico Aço Série America
                     Kansas Mahogany NM Tagim
                     Natural Mahogany (NW)
                     <br/>
                     <br/><bold>R$ 1.390,00 em até</bold>
                     <br/>10x de R$139,00 sem juros<br/>
                     <View >
                     <View style={styles.bot}><Button title="Comprar" color="#00e64d" onPress={() => Alert.alert('Produto Adquirido')}></Button> </View>
                     </View>
                     
                     <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                     
                     Violão Elétrico Aço Série America
                     Kansas Mahogany NM Tagim
                     Natural Mahogany (NW) + Capa
                     <br/>
                     <br/><bold>R$ 1.490,00 em até</bold>
                     <br/>10x de R$149,00 sem juros<br/>
                     <View >
                     <View style={styles.bot}><Button title="Comprar" color="#00e64d" onPress={() => Alert.alert('Produto Adquirido')}></Button> </View>
                     </View>
                     </Text>

                     
                     
                     
                    
                    </View>
                            
        );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        textAlign: "center",
        color:"#FFF",
        alignContent:"center",
        fontSize:40,
        MarginBottom:500,
    },
    prod:{
    marginLeft:150,
    marginTop:80,
    width: 200,
    height: 200,
    borderRadius:30,
  },
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
  leg:{
    position:"relative",
    flex:1,
    color:"#FFF",
    fontSize:13,
    marginLeft:220,
    marginBottom:205,
  },
  bot:{
      flex:1,
      fontSize:24,
  },
  prod2:{
    marginLeft:150,
    width: 200,
    height: 200,
    borderRadius:30,
  }
});
