import { StyleSheet,Image, Text, View, ScrollView,ImageBackground} from "react-native";
export default function Search({movies,key1,key2,key3}) {
    return(   

        
    <View >
         <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}} >
            <Image style={{width:200,height:100,margin:10}} source={{uri:`https://image.tmdb.org/t/p/w500/${movies}`}} ></Image>
            <View>
             <Text style={{color:'white',fontSize:15}}>
                {key1}
             </Text>
             <Text style={{color:'white',fontSize:15}} >
                {key2}
             </Text>
              <Text style={{color:'white',fontSize:15}} >
                {key3}
             </Text>

            </View>
         </View>  
    </View> 
    );
}