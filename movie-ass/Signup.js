import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View,Image, Pressable,TouchableOpacity,Dimensions} from 'react-native';
import {TextInput}  from 'react-native-paper';
import React,{useState} from 'react';
import { FIREBASE_AUTH } from './firebaseconfiguretion';
import FlashMessage,{showMessage} from 'react-native-flash-message';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { Icon } from 'react-native-elements';

export default function Signup({navigation}) {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [emailError, setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [confirmPasswordError, setConfirmPasswordError] = useState('');
   const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  //  const [secure, setSecure] = useState(true);

   
    const validateForm = () => {
    let valid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("The Email is invalid");
      valid = false;
    } else {
      setEmailError('')
    }
     if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError('')
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Confirm Password");
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    } else {
      setConfirmPasswordError('')
    }

  };
 

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
   };

   const handleSubmit = async () => {
  if (validateForm()) {
      // Perform form submission
      console.log('Submitted:', email, password)
      await AsyncStorage.setItem('data','name')
  }
}
   
  // const handleSubmit = async () => {
  //   if (validateForm()) {
  //     try {
  //       const response = await createUserWithEmailAndPassword(
  //         FIREBASE_AUTH,
  //         email,
  //         password
  //       );
  //       console.log(response);
  //       console.log("User created Successfully!");
  //       navigation.navigate("Sign up");
  //     } catch (error) {
  //       console.log(error);
  //       showMessage({
  //         message: "Sign Up Failed",
  //         description: error.code.toString(),
  //       });
  //     }
  //   }
  // };


  return (
    <View style={styles.container}>
        <View >
            <View style={{margin:10,gap:5,top:35}}>

                 <Text style={{color:'white'}}>Email Addres</Text>

                <TextInput 
                style={{backgroundColor:'#1a1a1a'}} 
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

                <Text style={{color:'white'}}>Phone number</Text>
                <TextInput 
                style={{backgroundColor:'#1a1a1a'}} 
                left={<TextInput.Icon icon='phone' type='material-community' size={20}/>} 
                mode='outlined' 
                underlineColor='#1a1a1a' 
                textColor='white'
                placeholder='your phone number' 
                theme={{colors:{background:'transparent'}}} 
                />
                   
                <Text style={{color:'white'}}>Birth Date</Text>
                <TextInput 
                style={{backgroundColor:'#1a1a1a'}} 
                left={<TextInput.Icon icon='calendar-blank-outline' type='material-community' size={20}/>} 
                mode='outlined'
                underlineColor='#1a1a1a'
                textColor='white'
                placeholder='dd/mm/yyy'
                theme={{colors:{background:'transparent'}}} 
                />
                  
                <Text style={{color:'white'}}>Gender</Text>
                <TextInput 
                style={{backgroundColor:'#1a1a1a'}}
                left={<TextInput.Icon icon='account-outline' type='material-community' size={20}/>} 
                mode='outlined' 
                underlineColor='#1a1a1a' 
                textColor='white'
                placeholder='Male/Female' 
                theme={{colors:{background:'transparent'}}}  
                />
                  
                 <Text style={{color:'white'}}>password</Text>
                <TextInput 
                style={{backgroundColor:'#1a1a1a'}} 
                secureTextEntry={isPasswordSecure}
                left={<TextInput.Icon icon='lock-outline' type='material-community' size={20}/>}
                right={<TextInput.Icon icon={isPasswordSecure ?'eye-off' : 'eye'} onPress={() => setIsPasswordSecure(!isPasswordSecure) } type='material-community' size={20}/>}
                mode='outlined'
                underlineColor='#1a1a1a'
                placeholder='Password'
                textColor='white'
                onChangeText={setPassword}
                error={!!passwordError}
                value={password}
                theme={{colors:{background:'transparent'}}}
                 />
                 {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

                <Text style={{color:'white'}}>Confirm password</Text>
                <TextInput 
                style={{backgroundColor:'#1a1a1a'}} 
                secureTextEntry={isPasswordSecure}
                left={<TextInput.Icon icon='lock-outline' type='material-community' size={20}/>}
                right={<TextInput.Icon icon={isPasswordSecure ?'eye-off' : 'eye'} onPress={() => setIsPasswordSecure(!isPasswordSecure) } type='material-community' size={20}/>}
                mode='outlined'
                underlineColor='#1a1a1a'
                placeholder='Confirm Password'
                textColor='white'
                error={!!confirmPasswordError}
                value={confirmPassword}
                onChangeText={setConfirmPasswordError}
                theme={{colors:{background:'transparent'}}}
                />
                {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}
            </View>

            <TouchableOpacity onPress={handleSubmit}>
            <Text style={{textAlign:'center',color:'black',backgroundColor:'#f9be02',padding:15,margin:10,marginTop:50}} >
                Sign up
            </Text>
            </TouchableOpacity>
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
   error: {
    color: 'red',
    fontSize: 14,
    marginTop: 5
  },
});

