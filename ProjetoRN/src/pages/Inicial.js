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


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

export default function Inicial({navigation}) {
            return(
                    <View style={styles.fundo} >
                         <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', position:"relative", marginRight:360}}>
                            <SimpleLineIcons name="menu" size={50} color="white"  onPress={() => navigation.openDrawer()} />
                     </View>
                     <View>
                        <Text style={styles.title}>WB Violões</Text>
                        </View>
                     <View style={styles.pslogo}>
                        <Image style={styles.tinyLogo}
                        source={require('../img/guitar.png')}>         
                        </Image>
                        </View>
                    </View>
        );
}

const styles = StyleSheet.create({
    container: {
        position:"relative",
        flex:1,
        textAlign: "center",
        color:"#FFF",
        fontSize:40,
        marginBottom:100,
    },
    tinyLogo:{
    position:"relative",
    transform: [{ rotate: '-40deg' }],
    width: 300,
    height: 200,
    marginBottom:70,
  },
  fundo: {
      flex:2,
      backgroundColor: "#000",
  },
  title:{
      position:"relative",
        flex:1,
        textAlign: "center",
        color:"#FFF",
        fontSize:40,
        marginBottom:150,
  },
  pslogo:{
      position:"relative",
      marginBottom:130,
      marginLeft:50,
  }
});
