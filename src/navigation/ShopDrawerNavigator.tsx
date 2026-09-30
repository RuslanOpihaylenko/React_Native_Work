import React from "react";
import { Image } from "react-native";
import {
    createDrawerNavigator,
} from "@react-navigation/drawer";

import ShopTabNavigator from "./ShopTabNavigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import MyOrdersScreen from "../screens/tab-screens/MyOrdersScreen";

const Drawer =
    createDrawerNavigator();

export default function ShopDrawerNavigator() {

    return (
        <Drawer.Navigator>

            <Drawer.Screen
                name="Home"
                component={ShopTabNavigator}
                options={{
                    headerShown: false,
                    drawerLabel: "Головна",
                    drawerIcon: ({focused}) => (
                                            <Image
                                            source={require("../../assets/home_icon.jpg")}
                                            style={{
                                            height: 34,
                                            width: 34,
                                            opacity: focused ? 1 : 0.5
                                            }}
                                            />
                                        ),
                }}
            />

            <Drawer.Screen
                name="Категорії"
                component={CategoriesScreen}
                options={{
                    drawerLabel: "Категорії",
                     drawerIcon: ({focused}) => (
                                            <Image
                                            source={require("../../assets/catigory_icon.png")}
                                            style={{                            
                                            height: 34,
                                            width: 34,
                                            opacity: focused ? 1 : 0.5
                                            }}
                                            />
                                        ),
                }}
            />
            <Drawer.Screen
                name="Мої замовлення"
                component={MyOrdersScreen}
                options={{
                    drawerLabel: "Мої замовлення",
                    drawerIcon: ({focused}) => (
                                            <Image
                                            source={require("../../assets/details_icon.png")}
                                            style={{
                                            tintColor: "green",
                                            height: 34,
                                            width: 34,
                                            opacity: focused ? 1 : 0.5
                                            }}
                                            />
                                        ),
                }}
            />
            <Drawer.Screen
                name="Налаштування"
                component={MyOrdersScreen}
                options={{
                    drawerLabel: "Налаштування",
                    drawerIcon: ({focused}) => (
                                            <Image
                                            source={require("../../assets/profile_icon.jpg")}
                                            style={{
                                            height: 34,
                                            width: 34,
                                            opacity: focused ? 1 : 0.5
                                            }}
                                            />
                                        ),
                }}
            />
        </Drawer.Navigator>
    );
}