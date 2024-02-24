import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Src1 from './Src1';
import Src2 from './Src2';
import Src3 from './Src3';
import Src4 from './Src4';
import Src5 from './Src5';
import Src6 from './Src6';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
 <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name='Src2' component={Src2} options={{headerShown:false}}/>
<Stack.Screen name='Src1' component={Src1} options={{headerShown:false}} />
<Stack.Screen name='Src3' component={Src3} options={{headerShown:false}}/>
<Stack.Screen name='Src4' component={Src4} options={{headerShown:false}}/>
<Stack.Screen name='Src5' component={Src5} options={{headerShown:false}}/>
</Stack.Navigator>
 </NavigationContainer> 
//  <Src6/>
//  <Src5/>
/* <Src4/> */
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
