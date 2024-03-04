import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View,Image, Pressable } from 'react-native';

export default function Src2({navigation}) {
  return (
    <View style={styles.container}>
        <View >
        <Pressable  onPress={()=>navigation.navigate('Src1')}>
        <Image style={{top:350,left:150}}source={require('./assets/movie.jpg')} />
        </Pressable>
        {/* <Text>HELOO</Text> */}
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
