import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; 

export default function Profile({navigation}) {
            return(

                
                    <View style={styles.fundo} >
                         <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', position:"relative", marginRight:360 }}>
                             <SimpleLineIcons name="menu" size={50} color="white"  onPress={() => navigation.openDrawer()} />
                             <Text style={styles.title}>Perfil</Text>
                             <View style={{flex: 1, flexDirection: 'row', marginLeft:150, marginTop:100,}}>>
                                 
                            <Image 
                                style={styles.prod} source={require('../img/pp.jpg')}>   
                                 </Image>
                                 <View style={{ marginLeft:10, marginTop:-20}}>
                                 <Text style={styles.legenda}>William Gabriel de Barros</Text>
                                 <Text style={styles.legenda}>2ºDS Turma B</Text> 
                                 </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', marginLeft:150}}>>
                            <Image 
                                style={styles.prod} source={require('../img/fotodiscord.png')}>         
                            </Image>
                            <View style={{ marginLeft:10, marginTop:-20}}>
                                 <Text style={styles.legenda}>Lucas Seles Silva de Oliveira</Text>
                                 <Text style={styles.legenda}>2ºDS Turma B</Text>      
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
      width:100,
      height:100,
      borderRadius: 50,
  },
  legenda:{
    alignItems:'stretch',
      flexDirection:'row',
    color:"#FFF",
    fontSize:18,
  },
})