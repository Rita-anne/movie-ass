import React from 'react';
import {View, Text,StyleSheet,Image, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements';


// const HomeScreen = ({navigation}) => {
   
export default function HomeScreen({navigation}) {
return (
    <View style={styles.container}>
        <View style={{backgroundColor:'blue'}}>
        <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between'}} >
        <Image style={{}}source={require('./assets/movie.jpg')} />
        <Icon name='bell-outline' color='white' type='material-community'/>
      <StatusBar style="auto" />
      </View>
      <ScrollView style={{marginTop:10}} horizontal={true}>
        <Text style={{color:'#f9be02',marginHorizontal:30}} >
        Featured
        </Text>
        <Text style={{color:'white',marginHorizontal:30}} >
          Series  
        </Text>
        <Text style={{color:'white',marginHorizontal:30}}>
            Films
        </Text>
        <Text style={{color:'white',marginHorizontal:30}}>
          Originals  
        </Text>
      </ScrollView>
      </View>
      <View>
      <ScrollView style={{marginTop:10}} horizontal={true}>
<Text style={{color:'white',marginHorizontal:30,borderWidth:1,borderColor:'white',padding:5,borderRadius:3}} >
        Popural Today
        </Text>
        <Text style={{color:'white',marginHorizontal:30,borderWidth:1,borderColor:'white',padding:5,borderRadius:3}} >
          Marvel
        </Text>
        <Text style={{color:'white',marginHorizontal:30,borderWidth:1,borderColor:'white',padding:5,borderRadius:3}}>
            Fans Choice
        </Text>
        <Text style={{color:'white',marginHorizontal:30,borderWidth:1,borderColor:'white',padding:5,borderRadius:3}}>
          Star War 
        </Text>
      </ScrollView>
      </View>
      <View>
        <ScrollView>
            <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
             <Text style={{color:'white',fontSize:20,fontWeight:'500',}}> New Release</Text>
             <Text style={{color:'white',fontSize:20,fontWeight:'100',}}> View More</Text>
            </View>
            
            <ScrollView horizontal={true}>
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie1.jpg')} />
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie2.jpg')} />
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie3.jpg')} />
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie4.jpg')} />

            </ScrollView>

             <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
             <Text style={{color:'white',fontSize:20,fontWeight:'500',}}> Made For You</Text>
             <Text style={{color:'white',fontSize:20,fontWeight:'100',}}> View More</Text>
            </View>
            
            <ScrollView horizontal={true}>
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie6.jpg')} />
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie8.jpg')} />
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie3.jpg')} />
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie4.jpg')} />

            </ScrollView>
            <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
             <Text style={{color:'white',fontSize:20,fontWeight:'500',}}> Made For You</Text>
             <Text style={{color:'white',fontSize:20,fontWeight:'100',}}> View More</Text>
            </View>
            <ScrollView>
           <Image style={{width:400,height:200,margin:5,borderRadius:10}}source={require('./assets/movie4.jpg')} />
           <Image style={{width:400,height:200,margin:5,borderRadius:10}}source={require('./assets/movie3.jpg')} />
           <Image style={{width:400,height:200,margin:5,borderRadius:10}}source={require('./assets/movie8.jpg')} />
            </ScrollView>
        </ScrollView>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {

    // flex: 1,
     backgroundColor:'#1a1a1a',
     height:'100%'
     
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

      


  

// const styles = StyleSheet.create({})

// export default HomeScreen;