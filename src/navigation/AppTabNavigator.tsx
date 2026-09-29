import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from "react-native";
import HomeScreen from "../screens/tab-screens/HomeScreen";
import DetailsScreen from "../screens/tab-screens/DetailsScreen";
import ProfileScreen from "../screens/tab-screens/ProfileScreen";
import DetailsStackNavigator from "./DetailsStackNavigator";
export type RootTabParamList = {
    Home: undefined;
    Profile: undefined;
    Details: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
export const AppTabNavigator = () => {
    return(
      <Tab.Navigator>
            <Tab.Screen name="Home" component={DetailsStackNavigator} options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={require("../../assets/home_icon.jpg")}
                        style={{
                            height: 34,
                            width: 34,
                            opacity: focused ? 1 : 0.5
                        }}
                        />
                    )
                }}/>
            <Tab.Screen name="Profile" component={DetailsStackNavigator} options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={require("../../assets/profile_icon.jpg")}
                        style={{
                            height: 34,
                            width: 34,
                            opacity: focused ? 1 : 0.5
                        }}
                        />
                    )
                }} listeners={() => ({
          tabPress: () => {
            console.log("Pressed -> Profile");
          },
        })}/>
            <Tab.Screen name="Details" component={DetailsStackNavigator} options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                        source={require("../../assets/details_icon.png")}
                        style={{
                            height: 30,
                            width: 30,
                            opacity: focused ? 1 : 0.5
                        }}
                        />
                    )
                }}/>
          </Tab.Navigator>
    );
};