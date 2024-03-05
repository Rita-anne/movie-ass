import * as React from 'react';
import { Icon } from 'react-native-elements';

//screen
import HomeScreen from './Home';
import SearchScreen from './Search';
import ProfileScreen from './Profile';
import MyList from './MyList';

// bottom navigator

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function Src6(){
    return (
        <NavigationContainer>

          <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false,
                  tabBarIcon: ()=>
                  <Icon name='home'/>  
                }}/>

             {/* <Tab.Navigator>
                <Tab.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                    tabBarIcon: ()=>
                        <AntDesign name='home' size={25} />
                    
                }} 
                     
                 /> */}
                <Tab.Screen name='Search' component={SearchScreen} options={{
                  tabBarIcon: ()=>
                  <Icon name='search'/>  
                }}/>
                <Tab.Screen name='Profile' component={ProfileScreen} options={{
                  tabBarIcon: ()=>
                  <Icon name='person'/>    
                }} />
                <Tab.Screen name='MyList' component={MyList} options={{
                  tabBarIcon: ()=>
                  <Icon name='folder'/>    
                }} /> 
               

            {/* </Tab.Navigator> */}
        </NavigationContainer>
    )
}













// import { StatusBar } from 'expo-status-bar';
// import { Button, ScrollView, StyleSheet, Text, View,Image, Pressable,TouchableOpacity} from 'react-native';
// import {TextInput}  from 'react-native-paper';
// import MyTab from './MyTab';

// export default function Src6({navigation}) {
//   return (
// <View style={styles.container}>
//   <View style={styles.navbar} >
//             <View>
//                <Image source={require('./assets/movie.jpg')} />
//             </View>
          
//       <View >
              
//               <ScrollView style={{marginTop:5}} horizontal={true} >

//               <Text style={{color:'#f9be02',paddingHorizontal:30,fontSize:15,}}>
//              Featured
//               </Text>
//               <Text style={{color:'white',paddingHorizontal:30,fontSize:15,}} >
//                 Series
//               </Text>
//               <Text style={{color:'white',paddingHorizontal:30,fontSize:15,}} >
//                 Films
//               </Text>
//               <Text style={{color:'white',paddingHorizontal:30,fontSize:15,}} >
//                 Origin
//               </Text>
//               </ScrollView>
//       </View>
//   </View>
//   <View style={styles.covers}>
//       <View>
//               <ScrollView horizontal={true} >

//               <Text style={{color:'white',paddingHorizontal:35,borderWidth:0.5,borderColor:'white',margin:2,borderRadius:3}}>
//              Popular to Day
//               </Text>
//               <Text style={{color:'white',paddingHorizontal:35,borderWidth:0.5,borderColor:'white',margin:2,borderRadius:3}} >
//                 Marvel
//               </Text>
//               <Text style={{color:'white',paddingHorizontal:35,borderWidth:0.5,borderColor:'white',margin:2,borderRadius:3}} >
//                 Fans Choice
//               </Text>
//               <Text style={{color:'white',paddingHorizontal:35,borderWidth:0.5,borderColor:'white',margin:2,borderRadius:3}} >
//                 Star War
//               </Text>
//               </ScrollView>
//       </View>
//           <View style={{top:10,display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between'}}  >
//               <Text style={{color:'white',fontSize:20,fontWeight:'700'}} >
//             New Release
//               </Text>
//               <Text style={{color:'white',fontSize:20,fontWeight:'100',}} >
//             View Movie
//               </Text>
//           </View>  
//           <View style={{margin:2,top:15}}>
//           <ScrollView horizontal={true}>
//             <View style={{paddingHorizontal:10}} >
//              <Image  style={{width:300,height:150,borderRadius:20}} source={require('./assets/movie1.jpg')} />
//             </View>
//             <View style={{paddingHorizontal:10}} >
//              <Image  style={{width:300,height:150,borderRadius:20}} source={require('./assets/movie2.jpg')} />
//             </View>
//             <View style={{paddingHorizontal:10}} >
//              <Image  style={{width:300,height:150,borderRadius:20}} source={require('./assets/movie3.jpg')} />
//             </View>
//           </ScrollView> 
//           </View>
//           <View style={{top:20,display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between'}}  >
//               <Text style={{color:'white',fontSize:20,fontWeight:'700'}} >
//             Made for you
//               </Text>
//               <Text style={{color:'white',fontSize:20,fontWeight:'100',}} >
//             View Movie
//               </Text>
//           </View>  
//          <View style={{margin:2,top:15}}>
//           <ScrollView horizontal={true}>
//             <View style={{paddingHorizontal:10}} >
//              <Image  style={{width:300,height:150,borderRadius:20}} source={require('./assets/movie4.jpg')} />
//             </View>
//             <View style={{paddingHorizontal:10}} >
//              <Image  style={{width:300,height:150,borderRadius:20}} source={require('./assets/movie6.jpg')} />
//             </View>
//             <View style={{paddingHorizontal:10}} >
//              <Image  style={{width:300,height:150,borderRadius:20}} source={require('./assets/movie8.jpg')} />
//             </View>
//           </ScrollView> 
//           </View> 
//            <View style={{top:15,display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between'}}  >
//               <Text style={{color:'white',fontSize:20,fontWeight:'700'}} >
//             Popular on Muvi
//               </Text>
//               <Text style={{color:'white',fontSize:20,fontWeight:'100',}} >
//             View Movie
//               </Text>
//                <View  >
//              <Image  style={{width:600,height:195,borderRadius:20}} source={require('./assets/movie8.jpg')} />
//             </View> 
//           </View>   
//           {/* <MyTab/> */}
//       <StatusBar style="auto" />
//   </View>

// </View>
   
//   );
// }

// const styles = StyleSheet.create({
//    navbar:{
//       backgroundColor:'black',
//       padding:25,
      
//      },
//      covers:{
// padding:15,
// backgroundColor:'#1a1a1a',
//      },
// });