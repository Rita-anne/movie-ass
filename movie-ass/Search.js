import { View, Text, StyleSheet,Image, Pressable, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import Search from './Search1';



export default function SearchScreen({navigation}) {




        const options={
          method:'GET',
          headers:{
            accept:'application/json',
             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWIxMDBmMzY0MGM1ZDU2NDkzOTgyYjU0YmU4ZjdmOCIsInN1YiI6IjY1ZDg2ZDg2YTI4NGViMDE4NTg3ZmEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bBG1lo4fPNahfs-ewwWV-hmmBAir7MBeqH62yweqAGo'
          }
        };

        const [search,setSearch] = useState([])
        const [searchdata,setSearchdata] =useState('')

        React.useEffect(()=> {
          if (searchdata.length > 0){
            Searchapi()
          }else{
            setSearch([])
          }

        },[searchdata])

      const Searchapi=()=>{
  fetch(`https://api.themoviedb.org/3/search/movie?query=${searchdata}&include_adult=false&language=en-US&page=1`, options)
  .then(response => response.json())
  .then((response)=>{
    setSearch(response.results)
    console.log(response.results)
  } )
  
    
  .catch(err => console.error(err));
}





  return (
    <View style={styles.container} >
      <View>
      <View style={{paddingTop:30}}>
         <TextInput right={<TextInput.Icon icon="magnify" color="#f9be02"/>} label=''  mode='outlined' underlineColor='#f9be02' placeholder='Search Movie Title' textColor='white' theme={{colors:{background:'transparent'}}} onChangeText={(e)=>setSearchdata(e)} value={searchdata} />
      </View>
  <View>
    <ScrollView horizontal={true}>
      <Text style={{color:'white',marginHorizontal:30,marginTop:10,color:'#f9be02'}} >All Results</Text>
       <Text style={{color:'white',marginHorizontal:30,marginTop:10}} >Series</Text>
        <Text style={{color:'white',marginHorizontal:30,marginTop:10}} >Films</Text>
         <Text style={{color:'white',marginHorizontal:30,marginTop:10}} >Originals</Text>
    </ScrollView>
    </View>
  </View>

<ScrollView>
       <FlatList 
       data={search}
       renderItem={({item})=>
       <Search movies={item.poster_path} key1={item.original_title} key2={item.popularity} key3={item.release_date}/>}/>
</ScrollView>

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
     backgroundColor:'#1a1a1a',
    //  height:'100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});



