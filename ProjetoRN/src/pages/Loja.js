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
    tinyLogo:{
        transform: [{ rotate: '-40deg' }],
    marginLeft:100,
    marginTop:50,
    width: 200,
    height: 200
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
  }
});
