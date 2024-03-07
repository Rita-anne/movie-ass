import { View, Text,StyleSheet,Image,button, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Icon } from 'react-native-elements';

export default function Profile({navigation}) {
  return (
 <View style={styles.container}>
   <View>
      <Text onPress={()=>navigation.navigate('Home')} ></Text>
    </View>
    <View >
          <Text style={{fontWeight:'600',fontSize:30,color:'white',margin:10}}>More</Text>
    </View>
    <View style={{paddingTop:50}}> 
        <Image style={{width:180,height:180,borderRadius:80,marginHorizontal:120,}}source={require('./assets/me.jpg')} />
        <Text style={{color:'white',textAlign:'center',padding:4}} >Rita Anne Gakiza</Text>
        <Text style={{color:'white',textAlign:'center',padding:4}} >annegakiza@gmail.com</Text> 
        <Text style={{color:'#f9be02',textAlign:'center',padding:4}}>Edit Profile</Text> 
      <StatusBar style="auto" />
    </View>
  <View>
      <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
        <Icon name='inbox' color='white' />
        <Text style={{color:'white',padding:10,marginHorizontal:20,fontWeight:'500'}}>Inbox</Text>
      </View>
      <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}} >
        <Icon name='account' color='white' type='material-community'/>
        <Text style={{color:'white',padding:10,marginHorizontal:20,fontWeight:'500'}}>Account Setting</Text>
      </View >
      <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}} >
        <Icon name='web' color='white' />
        <Text style={{color:'white',padding:10,marginHorizontal:20,fontWeight:'500'}}>Language</Text>
      </View>
      <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}} >
        <Icon name='help-circle-outline' color='white' type='material-community'/>
        <Text style={{color:'white',padding:10,marginHorizontal:20,fontWeight:'500'}}>Help, FAQ</Text>
      </View>
      <View>
        <Text style={{color:'white',padding:10,marginHorizontal:20,fontWeight:'100'}}>Terms & Condition</Text>
      </View>
      <View>
        <Text style={{color:'white',padding:10,marginHorizontal:20,fontWeight:'100'}}>privacy & policy</Text>
      </View>
  </View>
  <Pressable onPress={()=>navigation.navigate('Src2')}>
    <Text style={{textAlign:'center',color:'pink',borderWidth:0.5,borderColor:'white',padding:4,margin:10}} > Log Out </Text>
  </Pressable>
    </View>

  )
}


const styles = StyleSheet.create({
  container: {

    flex: 1,
     backgroundColor:'#1a1a1a',
    
  },
});
