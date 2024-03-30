import { StatusBar } from 'expo-status-bar';
// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View,Image, Pressable,TouchableOpacity} from 'react-native';
import {TextInput}  from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signin({navigation}) {
  
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailError, setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [isPasswordSecure, setIsPasswordSecure] = useState(true);

   const validateForm = () => {
    let valid = true
    if (!email.trim()){
      setEmailError('Email is requied')
      valid = false
    } else if (!isValidEmail(email)){
      setEmailError('Invalid email format')
      valid = false
    } else {
      setEmailError('')
    }
    if(!password.trim()){
      setPasswordError('Password is required')
      valid = false
    }else{
      setPasswordError('')
    }
   };

   const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
   };


const handleSubmit = async () => {
  if (validateForm()) {
    console.log('Submitted:', email, password);
    try {
      await AsyncStorage.setItem('data', 'name');
      console.log('Data stored successfully.');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  }
};

//    const handleSubmit = async () => {
//   if (validateForm()) {
//     console.log('Submitted:', email, password)
//       await AsyncStorage.setItem('data','name')
//   }
// }
   
   
  

  return (
    <View style={styles.container}>
        <View >
            <View style={{margin:10,gap:5,top:35}}>
                <Text style={{color:'white'}}>Email Addres</Text>

                <TextInput style={{backgroundColor:'#1a1a1a'}} 
                left={<TextInput.Icon icon='email-outline' type='material-community' size={20}/>}
                mode='outlined' 
                underlineColor='#1a1a1a'
                placeholder='Your email'
                theme={{colors:{background:'transparent'}}} 
                textColor='white'
                onChangeText={setEmail}
                error={!!emailError}
                value={email}
                    />
               {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

                <Text style={{color:'white'}}>password</Text>
                <TextInput 
                style={{backgroundColor:'#1a1a1a'}} 
                secureTextEntry={isPasswordSecure}
                left={<TextInput.Icon icon='lock-outline' type='material-community' size={20}/>}
                right={<TextInput.Icon icon={isPasswordSecure ?'eye-off' : 'eye'} onPress={() => setIsPasswordSecure(!isPasswordSecure) } type='material-community' size={20}/>}
                mode='outlined'
                underlineColor='#1a1a1a'
                placeholder='Password'
                theme={{colors:{background:'transparent'}}}
                textColor='white'
                onChangeText={setPassword}
                error={!!passwordError}
                value={password}
                 />
                 {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}


                <Text style={{color:'white',textAlign:'right'}}>
                Forgot password?
              </Text>
            </View>
            <TouchableOpacity onPress={handleSubmit}>
            <Text style={{textAlign:'center',color:'black',backgroundColor:'#f9be02',padding:15,margin:10,marginTop:50}} >
                Sign in
            </Text>
            </TouchableOpacity>
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
                    Don't have an account? <Text onPress={()=>navigation.navigate('Signup')} style={{color:'#f9be02'}}>Sign up</Text> 
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
    error: {
    color: 'red',
    fontSize: 14,
    marginTop: 5
  },
});