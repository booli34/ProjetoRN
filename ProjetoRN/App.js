import { View, StyleSheet, Button } from 'react-native';
import Inicial from './src/pages/Inicial';
import Loja from './src/pages/Loja';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import * as React from 'react';
import {
  Screen,
  screensEnabled,
  // @ts-ignore
  shouldUseActivityState,  // eslint-disable-line
} from 'react-native-screens';


 
const Drawer = createDrawerNavigator();

export default function App() {  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Inicial} options={{
            drawerIcon: ({color, size}) => (
                <Entypo name="home" size={size} color={color} />
            )
        }} /> 
        <Drawer.Screen name="Loja" component={Loja} options={{
            drawerIcon: ({color, size}) => (
                <FontAwesome5 name="shopping-cart" size={size} color={color} />
            )
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  ); 
}


const styles = StyleSheet.create({
    fundo: {
        flex:1,
        backgroundColor: "#000000"
    }
});