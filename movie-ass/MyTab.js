import * as React from 'react';
import { Icon } from 'react-native-elements';

//screen
import HomeScreen from './Home';
import SearchScreen from './Search';
import ProfileScreen from './Profile';
import MyList from './MyList';
import { MainNavigation } from './App';

// bottom navigator

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function MyTab(){
    return (
      
        
        
            <Tab.Navigator>
              <Tab.Screen name='search' component={HomeScreen} options={{ headerShown: false,
                  tabBarIcon: ()=>
                  <Icon name='search'/>  
                }}/>



                {/* <Tab.Screen 
        
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ()=>
                        <AntDesign name='home' size={25} options={{ headerShown: false,}} />
                    
                }} 
                    
                 /> */}
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