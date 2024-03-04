import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Src1({navigation}) {

  return (
    <View style={styles.container}>
      
      <ImageBackground style={{width:'100%', height:'100%',}} source={require('./assets/joker.jpg')  } > 
      <View style={{backgroundColor:'rgba(000,000,000,0.8)',}} >
        
      <View style={{margin:20,}} >
<Text style={{color:'white', fontSize:40,marginTop:300,}} >Enjoy your favourite 
               movie everywhere</Text>
               <Text style={{color:'white',fontSize:20,paddingTop:15}}> Browse through our collections and discover hundreds of movies and series that you'll love!</Text>
               <Pressable onPress={()=>navigation.navigate('Src3')}>
               <Text style={{color:'black',fontSize:25, textAlign:'center',marginTop:250,marginBottom:40,backgroundColor:'#f9be02',padding:8}}>Get Started</Text>
               </Pressable>
               </View>
               </View>
               
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
