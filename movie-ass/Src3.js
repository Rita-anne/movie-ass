import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

export default function Src3() {
  return (
    <View style={styles.container}>
        <View style={{paddingBottom:60}}>
        <Image  style={{top:50,left:150}} source={require('./assets/movie.jpg')} />
        <Image  style={{top:200,left:150,}} source={require('./assets/back.jpg')} />
        <Text style={{top:210,color:'white',textAlign:'center',fontSize:30,fontWeight:'500' }}>Welcome to Muvi</Text>
        <Text style={{top:250,color:'white',textAlign:'center',fontSize:25,fontWeight:'100'}} >Free movie streaming all your needs everytime and everywhere</Text>
        <Text style={{top:380,textAlign:'center',backgroundColor:'#cca300',margin:15,padding:5}} > Watch Movie </Text>
        <Text style={{top:390,textAlign:'center',color:'white',margin:10}}>Sign in</Text>
      <StatusBar style="auto" />
      </View>
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


















// import { StatusBar } from 'expo-status-bar';
// import { Button, ScrollView, StyleSheet, Text, View,Image } from 'react-native';

// export default function Src3() {
//   return (
//     <View style={styles.container}>
//     <Image  style={{top:30,left:150,}} source={require('./assets/movie.jpg')} />  
//     <Image  style={{top:200,left:150,}} source={require('./assets/back.jpg')} />
//     <Text style={{top:210,color:'black',textAlign:'center'}}>Welcome to Muvi</Text> 
//     <Text style={{top:250,color:'black',textAlign:'center'}} >Free movie streaming all your needs everytime and everywhere</Text> 
//       <StatusBar style="auto" />
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {

    
//      backgroundColor:'#1c1c17',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });