import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View,Image, Pressable,TouchableOpacity} from 'react-native';
import {TextInput}  from 'react-native-paper';

export default function Signin({navigation}) {

  return (
    <View style={styles.container}>
        <View >
            <View style={{margin:10,gap:5,top:35}}>
                <Text style={{color:'white'}}>Email Addres</Text>
                <TextInput style={{backgroundColor:'#1a1a1a'}} left={<TextInput.Icon icon='email-outline' type='material-community' size={20}/>} mode='outlined' underlineColor='#1a1a1a' placeholder='e.g johndoe@mail.com' theme={{colors:{background:'transparent'}}} textColor='green' />
                <Text style={{color:'white'}}>password</Text>
                <TextInput style={{backgroundColor:'#1a1a1a'}} left={<TextInput.Icon icon='lock-outline' type='material-community' size={20}/>} mode='outlined' underlineColor='#1a1a1a' placeholder='e.g johndoe@mail.com' theme={{colors:{background:'transparent'}}} textColor='green' />
                <Text style={{color:'white',textAlign:'right'}}>
                Forgot password?
              </Text>
            </View>
            <Pressable onPress={()=>navigation.navigate('Src6')}>
            <Text style={{textAlign:'center',color:'black',backgroundColor:'#f9be02',padding:15,margin:10,marginTop:50}} >
                Sign in
            </Text>
            </Pressable>
            <View style={{gap:30}}>
            
            <Text style={{color:'white',textAlign:'center'}}>
                or signing in with
            </Text>
            <TouchableOpacity 
            style={{borderWidth:0.5,borderColor:'white',color:'white',marginRight:10, marginLeft:10,}}>
                <Text style={{color:'white',textAlign:'center',padding:10,}}>
                    Google
            </Text>
                </TouchableOpacity> 
                <TouchableOpacity 
            style={{borderWidth:0.5,borderColor:'white',color:'white',marginRight:10, marginLeft:10,marginTop:20}}>
                <Text  onPress={()=>navigation.navigate('Src6')} style={{color:'white',textAlign:'center',padding:10,}}>
                    Watch Movie
            </Text>
                </TouchableOpacity> 
                <Text style={{textAlign:'center', color:'white'}} >
                    Don't have an account? <Text onPress={()=>navigation.navigate('Src4')} style={{color:'#f9be02'}}>Sign up</Text> 
                </Text>

            </View>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
     backgroundColor:'#1a1a1a',
  },
});