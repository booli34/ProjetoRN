import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
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
                            <Text style={styles.leg}>
                                Violão Elétrico Aço Série America
                            </Text>
                     </View> 
                    </View>
        );
}

const styles = StyleSheet.create({
    container: {
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
    fontSize:15,
    marginLeft:300,
    marginBottom:300,
  }
});
