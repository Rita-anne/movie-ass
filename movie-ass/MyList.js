import { View, Text,Button, ScrollView, StyleSheet,Image, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

export default function MyList({navigation}) {
  return (
  
<View style={styles.container}>
  <View>
      <Text onPress={()=>{navigation.navigate('Profile')}} ></Text>
    </View>
        <View >
        <Image style={{marginHorizontal:10}}source={require('./assets/movie.jpg')} />
        
         <ScrollView horizontal={true}>
          <Text style={{color:'#f9be02',marginHorizontal:10}} >
           MyList
          </Text>
          <Text style={{color:'white',marginHorizontal:10}}>
            Downloaded
          </Text>
         </ScrollView>
      </View>
    <ScrollView>
      <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
        <Image style={{width:200,height:100,margin:10}}source={require('./assets/movie1.jpg')} />
       
        <View>
        <Text style={{color:'white'}}>
         Itawewon Class
        </Text>
        <Text style={{color:'white'}}>
         2020
        </Text>
        <Text style={{color:'white',fontWeight:'100'}}>
          Dram, Asian,Comedy
        </Text>
        <Text style={{color:'white',fontWeight:'100'}}>
          Series
        </Text>
        </View>
       <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
        <Image style={{width:200,height:100,margin:10}}source={require('./assets/movie2.jpg')} />
        <View>
        <Text style={{color:'white'}}>
         Itawewon Class
        </Text>
        <Text style={{color:'white'}}>
         2020
        </Text>
        <Text style={{color:'white',fontWeight:'100'}}>
          Dram, Asian,Comedy
        </Text>
        <Text style={{color:'white',fontWeight:'100'}}>
          Series
        </Text>
      </View>
       </View>
       <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
        <Image style={{width:200,height:100,margin:10}}source={require('./assets/movie3.jpg')} />
         <View>
         <Text style={{color:'white'}}>
         Itawewon Class
        </Text>
        <Text style={{color:'white'}}>
         2020
        </Text>
        <Text style={{color:'white',fontWeight:'100'}}>
          Dram, Asian,Comedy
        </Text>
        <Text style={{color:'white',fontWeight:'100'}}>
          Series
        </Text>    
      </View>
      </View>
      </View>
       <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
        <Image style={{width:200,height:100,margin:10}}source={require('./assets/movie4.jpg')} />
         <View>
         <Text style={{color:'white'}}>
         Itawewon Class
        </Text>
        <Text style={{color:'white'}}>
         2020
        </Text>
        <Text style={{color:'white',fontWeight:'100'}}>
          Dram, Asian,Comedy
        </Text>
        <Text style={{color:'white',fontWeight:'100'}}>
          Series
        </Text>
       </View>
       </View>
     </ScrollView> 
      <StatusBar style="auto" />
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
     backgroundColor:'#1a1a1a',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});