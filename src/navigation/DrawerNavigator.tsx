import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/tab-screens/HomeScreen";
import DetailsScreen from "../screens/tab-screens/DetailsScreen";
import ProfileScreen from "../screens/tab-screens/ProfileScreen";

const Drawer = createDrawerNavigator() ;
export const DrawerNavigator = () => { 
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
             <Drawer.Screen name="Profile" component={ProfileScreen}/>
            <Drawer.Screen name="Details" component={DetailsScreen}/>
        </Drawer.Navigator>
    )
}