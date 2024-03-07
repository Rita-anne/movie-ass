import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View,Image, Pressable,TouchableOpacity} from 'react-native';
import {TextInput}  from 'react-native-paper';
import { Icon } from 'react-native-elements';

export default function Src4({navigation}) {
  return (
    <View style={styles.container}>
        <View >
            <View style={{margin:10,gap:5,top:35}}>
                <Text style={{color:'white'}}>Email Addres</Text>
                <TextInput style={{backgroundColor:'#1a1a1a'}} left={<TextInput.Icon icon='email-outline' type='material-community' size={20}/>} mode='outlined' underlineColor='#1a1a1a' placeholder='e.g johndoe@mail.com'   theme={{colors:{background:'transparent'}}} />
                   <Text style={{color:'white'}}>Phone number</Text>
                <TextInput style={{backgroundColor:'#1a1a1a'}} left={<TextInput.Icon icon='phone' type='material-community' size={20}/>} mode='outlined' underlineColor='#1a1a1a' placeholder='e.g johndoe@mail.com' theme={{colors:{background:'transparent'}}} />
                   <Text style={{color:'white'}}>Birth Date</Text>
                <TextInput style={{backgroundColor:'#1a1a1a'}} left={<TextInput.Icon icon='calendar-blank-outline' type='material-community' size={20}/>} mode='outlined' underlineColor='#1a1a1a' placeholder='e.g johndoe@mail.com' theme={{colors:{background:'transparent'}}} />
                   <Text style={{color:'white'}}>Gender</Text>
                <TextInput style={{backgroundColor:'#1a1a1a'}} left={<TextInput.Icon icon='account-outline' type='material-community' size={20}/>} mode='outlined' underlineColor='#1a1a1a' placeholder='e.g johndoe@mail.com' theme={{colors:{background:'transparent'}}}  />
                   <Text style={{color:'white'}}>password</Text>
                <TextInput style={{backgroundColor:'#1a1a1a'}} left={<TextInput.Icon icon='lock-outline' type='material-community' size={20}/>} mode='outlined' underlineColor='#1a1a1a' placeholder='e.g johndoe@mail.com' theme={{colors:{background:'transparent'}}} />
                   <Text style={{color:'white'}}>Confirm password</Text>
                <TextInput style={{backgroundColor:'#1a1a1a'}} left={<TextInput.Icon icon='lock-outline' type='material-community' size={20}/>} mode='outlined' underlineColor='#1a1a1a' placeholder='e.g johndoe@mail.com' theme={{colors:{background:'transparent'}}}  />
            </View>
            <Pressable onPress={()=>navigation.navigate('Signin')}>
            <Text style={{textAlign:'center',color:'black',backgroundColor:'#f9be02',padding:15,margin:10,marginTop:50}} >
                Sign up
            </Text>
            </Pressable>
            <View style={{gap:10}}>
            <Text style={{color:'white',textAlign:'center'}}>
                By signing up I accept terms of use and privacy policy
            </Text>
            <Text style={{color:'white',textAlign:'center'}}>
                or signing up with
            </Text>
            <TouchableOpacity 
            style={{borderWidth:0.5,borderColor:'white',color:'white',marginRight:10, marginLeft:10,}}>
                <Text style={{color:'white',textAlign:'center',padding:10,}}>
                    Google
            </Text>
                </TouchableOpacity> 
                <TouchableOpacity 
            style={{borderWidth:0.5,borderColor:'white',color:'white',marginRight:10, marginLeft:10,}}>
                <Text onPress={()=>navigation.navigate('Src6')} style={{color:'white',textAlign:'center',padding:10,}}>
                    Watch Movie
            </Text>
                </TouchableOpacity> 
            
            
            
            <TouchableOpacity style={{backgroundColor:'#1a1a1a',marginRight:10,marginLeft:10,textAlign:'center',color:'white'}} label='' mode='outlined' underlineColor='#1a1a1a' placeholder='Watch Movie' theme={{colors:{background:'transparent'}}} textColor='green' />
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

