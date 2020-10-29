import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
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
                         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
                     </View>
                        <Text style={styles.container}>WB Violões</Text>
                        <Image style={styles.tinyLogo} source = {require('../img/guitar.png')} />
                    </View>
        );
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        color:"#FFF",
        margin:100,
        fontSize:40
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
  }
});
