import { View, Text, StyleSheet,Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-paper';


export default function SearchScreen({navigation}) {
  return (
    <View style={styles.container} >
      <View>
      <View >
         <TextInput right={<TextInput.Icon icon="magnify" color="#f9be02"/>} label=''  mode='outlined' underlineColor='#f9be02' placeholder='Search Movie Title' theme={{colors:{background:'transparent'}}}  />
      </View>
  
    <ScrollView horizontal={true}>
      <Text style={{color:'white',marginHorizontal:30,marginTop:10,color:'#f9be02'}} >All Results</Text>
       <Text style={{color:'white',marginHorizontal:30,marginTop:10}} >Series</Text>
        <Text style={{color:'white',marginHorizontal:30,marginTop:10}} >Films</Text>
         <Text style={{color:'white',marginHorizontal:30,marginTop:10}} >Originals</Text>
    </ScrollView>
        <View >
        <Image style={{marginHorizontal:135,marginTop:150}}source={require('./assets/search.png')} />
    <View style={{}}>
    <Text style={{color:'white',textAlign:'center',fontWeight:'500',fontSize:15,padding:5}}> Search Your Movie</Text>
    <Text  style={{color:'white',textAlign:'center',fontWeight:'200',fontSize:15,padding:5}}> Search Movie,Series,Originals of your choice</Text>
    </View>
      <StatusBar style="auto" />
      </View>
  </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
     backgroundColor:'#1a1a1a',
    //  height:'100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
