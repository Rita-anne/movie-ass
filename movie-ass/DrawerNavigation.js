import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Profile";
import Search from "./Search1";
import SearchScreen from "./Search";
var Drawer =createDrawerNavigator();

export default function Nav(){
    return(
        <Drawer.Navigator initialRouteName="More">
            <Drawer.Screen
            name='More'
            component={Profile}
            />
            <Drawer.Screen
            name='Find'
            component={SearchScreen}
            />

        
        </Drawer.Navigator>
    )
}