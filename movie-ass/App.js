import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Src1 from './Src1';
import Src2 from './Src2';
import Src3 from './Src3';
import Src4 from './Src4';
import Action from './Action'
// import Signin from './Src5';
import Signin from './Signin';
import Src6 from './Src6';
import MyTab from './MyTab';
import HomeScreen from './Home';
import SearchScreen from './Search';
import MyList from './MyList';
import ProfileScreen from './Profile';
import { Icon } from 'react-native-elements';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




const MainNavigation=()=>{
  return(
    <Stack.Navigator>
<Stack.Screen name='Src2' component={Src2} options={{headerShown:false}}/>
<Stack.Screen name='Src1' component={Src1} options={{headerShown:false}} />
<Stack.Screen name='Src3' component={Src3} options={{headerShown:false}}/>
<Stack.Screen name='Src4' component={Src4} options={{headerShown:false}}/>
<Stack.Screen name='Signin' component={Signin} options={{headerShown:false}}/>
<Stack.Screen name='Src6' component={TabNavigation} options={{headerShown:false}}/>
<Stack.Screen name='Action' component={Action} options={{headerShown:false}}/>
</Stack.Navigator>
  )
}

const TabNavigation=()=>{
  return (
      
        
        
            <Tab.Navigator>
                <Tab.Screen 
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ()=>
                        <AntDesign name='home' size={25} />
                    
                }} 
                    
                 />
                <Tab.Screen name='Search' component={SearchScreen} options={{ headerShown: false,
                  tabBarIcon: ()=>
                  <Icon name='search'/>  
                }}/>
                <Tab.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false,
                  tabBarIcon: ()=>
                  <Icon name='person'/>    
                }} />
                <Tab.Screen name='MyList' component={MyList} options={{ headerShown: false,
                  tabBarIcon: ()=>
                  <Icon name='folder'/>    
                }} /> 
               

            </Tab.Navigator>
       
    )
}

export default function App() {
return (
<NavigationContainer>
<MainNavigation/>
</NavigationContainer> 
/* <MyTab/>  */
/* <Src6/>   */
/* <Action/> */
//  <Src5/>
/* <Src4/>  */
    // <Src3/>
/* <Src2/> */
    // <Src1/>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
 );
 }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
