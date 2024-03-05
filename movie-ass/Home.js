import React ,{useState,useEffect}from 'react';
import {View, Text,StyleSheet,Image, ScrollView,Pressable} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements';


// const HomeScreen = ({navigation}) => {
   
export default function HomeScreen({navigation}) {
const[movie,setmovie]=useState([])
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWIxMDBmMzY0MGM1ZDU2NDkzOTgyYjU0YmU4ZjdmOCIsInN1YiI6IjY1ZDg2ZDg2YTI4NGViMDE4NTg3ZmEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bBG1lo4fPNahfs-ewwWV-hmmBAir7MBeqH62yweqAGo'
  }
};
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then((response)=>{
    setmovie(response.results)
    console.log(response.results)
  } )
    
  .catch(err => console.error(err));
},[])





return (
    <View style={styles.container}>
        <View style={{backgroundColor:'#001a1a'}}>
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
                    {movie.map((item) =>
                        <Image key={item.id} style={{width:250,height:150,marginHorizontal:5,borderRadius:10}} source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} />
                   ) }
                
                   <Pressable  onPress={()=>navigation.navigate('Action')}>
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie2.jpg')} />
                    </Pressable>
                   <Pressable  onPress={()=>navigation.navigate('Action')}>
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie3.jpg')} />
                   </Pressable>
                   <Pressable  onPress={()=>navigation.navigate('Action')}>
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie4.jpg')} />
                   </Pressable>
            </ScrollView>

             <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
             <Text style={{color:'white',fontSize:20,fontWeight:'500',}}> Made For You</Text>
             <Text style={{color:'white',fontSize:20,fontWeight:'100',}}> View More</Text>
            </View>
            
            <ScrollView horizontal={true}>
                  <Pressable  onPress={()=>navigation.navigate('Action')}>
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie6.jpg')} />
                  </Pressable>
                  <Pressable  onPress={()=>navigation.navigate('Action')}>
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie8.jpg')} />
                  </Pressable>
                  <Pressable  onPress={()=>navigation.navigate('Action')}>
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie3.jpg')} />
                  </Pressable>
                  <Pressable  onPress={()=>navigation.navigate('Action')}>
                <Image style={{width:250,height:150,marginHorizontal:5,borderRadius:10}}source={require('./assets/movie4.jpg')} />
                 </Pressable>
            </ScrollView>
            <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
             <Text style={{color:'white',fontSize:20,fontWeight:'500',}}> Made For You</Text>
             <Text style={{color:'white',fontSize:20,fontWeight:'100',}}> View More</Text>
            </View>
            <ScrollView>
            <Pressable  onPress={()=>navigation.navigate('Action')}>
           <Image style={{width:400,height:200,margin:5,borderRadius:10}}source={require('./assets/movie4.jpg')} />
            </Pressable>
           <Pressable  onPress={()=>navigation.navigate('Action')}>
           <Image style={{width:400,height:200,margin:5,borderRadius:10}}source={require('./assets/movie3.jpg')} />
           </Pressable>
           <Pressable  onPress={()=>navigation.navigate('Action')}>
           <Image style={{width:400,height:200,margin:5,borderRadius:10}}source={require('./assets/movie8.jpg')} />
             </Pressable>
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