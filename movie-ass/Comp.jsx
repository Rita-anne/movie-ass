import { StyleSheet, Text, View, ScrollView,ImageBackground} from "react-native";
export default function Movi({type,price,clothes}) {
    return(
        <View>
            <View>
<ImageBackground style={{width:300, height:200, marginTop:40,marginHorizontal:5,}} source={{uri:clothes}}>
<Text style={{color:'white',backgroundColor:'#f9be02',width:80,margin:10,borderRadius:10,textAlign:'center'}} >
    #best seller
</Text>
<View style={{height:50,backgroundColor:'rgba(000,000,000,0.5)',top:115,padding:10,display:'flex',flexDirection:'row',justifyContent:'space-between'}} >
<Text style={{color:'white'}}>
    {type}
</Text>
<Text style={{color:'white'}}>
    {price}
</Text>
</View>
</ImageBackground>
</View>
        </View>
    );
}

const styles=StyleSheet.create({
    
})
