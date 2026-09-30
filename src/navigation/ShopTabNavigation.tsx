import React from "react";
import { View, Text, Image } from "react-native";
import {
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import MainScreen from "../screens/MainScreen";
import FavoritesScreen from "../screens/tab-screens/FavoritesScreen";

import ShopNavigator from "./ShopNavigator";

const Tab = createBottomTabNavigator();

export default function ShopTabNavigator() {

    return (
        <Tab.Navigator>

            <Tab.Screen name="Home" component={ShopNavigator} options={{
                                headerShown: false,
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

            <Tab.Screen
                name="Like"
                component={FavoritesScreen}
                options={{
                    headerShown: false,
                    title: "Like",
                    tabBarIcon: () => (
                        <Text style={{ fontSize: 22 }}>
                            ♡
                        </Text>
                    ),
                }}
            />
            

        </Tab.Navigator>
    );
}