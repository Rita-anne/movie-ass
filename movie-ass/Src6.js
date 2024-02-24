import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View,Image,Dimensions, TouchableOpacity} from 'react-native';
 const height=Dimensions.get('screen').height

export default function Src6({navigation}) {
  return (
    <View style={styles.container}>
        <View>

        <Image style={{padding:10}}source={require('./assets/movie.jpg')} />
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{color:'#f9be02',}}>Featured</Text>
      <Text style={{color:'white'}}>Series</Text>
      <Text style={{color:'white'}}>Films</Text>
      <Text style={{color:'white'}}>Origin</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:20,marginBottom:10,margin:10}}>
        <TouchableOpacity style={{borderWidth:0.5,borderColor:'white',borderRadius:5}}>
            <Text style={{color:'white',padding:10}}> Popular Today</Text>
        </TouchableOpacity>
         <TouchableOpacity style={{borderWidth:0.5,borderColor:'white',borderRadius:5,}} >
            <Text style={{color:'white',padding:10}}> Marvel</Text>
        </TouchableOpacity>
         <TouchableOpacity style={{borderWidth:0.5,borderColor:'white',borderRadius:5}} >
            <Text style={{color:'white',padding:10}}> Fans Choicey</Text>
        </TouchableOpacity>
         <TouchableOpacity style={{borderWidth:0.5,borderColor:'white',borderRadius:5}} >
            <Text style={{color:'white',padding:10}}> Star War</Text>
        </TouchableOpacity>
      </View>
      <Text style={{color:'white',fontSize:25,fontWeight:'700',margin:10}}>
        New Released
      </Text>
      <View>
        <ScrollView>
<Image style={{}}source={require('../movie-ass/assets/movie1.jpg')} />
<Image style={{}}source={require('../movie-ass/assets/movie2.jpg')} />
<Image style={{}}source={require('../movie-ass/assets/movie3.jpg')} />
<Image style={{}}source={require('../movie-ass/assets/movie4.jpg')} />
{/* <Image style={{}}source={require('../movie-ass/assets/movie5.jpg')} /> */}
<Image style={{}}source={require('../movie-ass/assets/movie6.jpg')} />
</ScrollView>
</View>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 backgroundColor:'#1a1a1a',
 height:height
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});