import { View, Text,Button, ScrollView, StyleSheet,Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import List from './Mylistcomp';

export default function MyList({navigation}) {

  const[movie,setmovie]=useState([])
  const options={
    method:'GET',
    headers:{
     accept:'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWIxMDBmMzY0MGM1ZDU2NDkzOTgyYjU0YmU4ZjdmOCIsInN1YiI6IjY1ZDg2ZDg2YTI4NGViMDE4NTg3ZmEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bBG1lo4fPNahfs-ewwWV-hmmBAir7MBeqH62yweqAGo'
    }

  };
  useEffect(()=>{
fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response.json())
  .then((response)=> {
    setmovie(response.results)
    console.log(response.results)
  })
  .catch(err => console.error(err));
  },[])


  return (
  
<View style={styles.container}>
        <View >
        <Image style={{marginHorizontal:10}}source={require('./assets/movie.jpg')} />
        
         <ScrollView horizontal={true}>
          <Text style={{color:'#f9be02',marginHorizontal:10}} >
           MyList
          </Text>
          <Text style={{color:'white',marginHorizontal:10}}>
            Downloaded
          </Text>
         </ScrollView>
      </View>
    <ScrollView>
      {movie.map((item)=>
      <List movies={item.poster_path} key1={item.original_title} key2={item.popularity}   key3={item.release_date} />
       )}
    
    </ScrollView>
      <StatusBar style="auto" />
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
     backgroundColor:'#1a1a1a',
   
  },
});