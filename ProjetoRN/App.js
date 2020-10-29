import { View, StyleSheet, Button } from 'react-native';
import Inicial from './src/pages/Inicial';
import Loja from './src/pages/Loja';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
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
        <Drawer.Screen name="Home" component={Inicial} /> 
        <Drawer.Screen name="Loja" component={Loja} />
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