import React from "react";

import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from "@react-navigation/native-stack";

import MainScreen from "../screens/MainScreen";
import ProductScreen from "../screens/ProductsScreen";
import CartScreen from "../screens/CartsScreen";

import { Product } from "../datas/data";

export type RootStackParamList = {
    Main: undefined;
    Product: {
        product: Product;
    };
    Cart: {
        product?: Product;
    };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type MainScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "Main"
>;

export type ProductScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "Product"
>;

export type CartScreenProps = NativeStackScreenProps<
    RootStackParamList,
    "Cart"
>;

export default function ShopNavigator() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Product"
                component={ProductScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    );
}