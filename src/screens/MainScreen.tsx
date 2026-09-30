import React from "react";
import {
    DrawerActions,
} from "@react-navigation/native";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    TextInput,
} from "react-native";

import { products, Product } from "../datas/data";

import { MainScreenProps } from "../navigation/ShopNavigator";

export default function MainScreen({
    navigation,
}: MainScreenProps) {

    const renderProduct = ({
        item,
    }: {
        item: Product;
    }) => {
        return (
            <TouchableOpacity
                style={styles.product}
                onPress={() =>
                    navigation.navigate("Product", {
                        product: item,
                    })
                }
            >

                <Image
                    source={{
                        uri: item.image,
                    }}
                    style={styles.productImage}
                />

                <Text style={styles.productName}>
                    {item.name}
                </Text>

                <Text style={styles.productPrice}>
                    ${item.price}.00
                </Text>

            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.body}>

            <View style={styles.top}>
                 <TouchableOpacity
        style={styles.menuButton}
        onPress={() =>
            navigation.dispatch(
                DrawerActions.openDrawer()
            )
        }
    >

        <Text style={styles.menuIcon}>
            ☰
        </Text>

    </TouchableOpacity>
                <View style={styles.topText}>

                    <Text style={styles.logo}>
                        AURA SHOP
                    </Text>

                </View>

                <TouchableOpacity
                    style={styles.topButton}
                    onPress={() =>
                        navigation.navigate("Cart", {})
                    }
                >

                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/107/107831.png",
                        }}
                        style={styles.cartIcon}
                    />

                </TouchableOpacity>

            </View>

            <View style={styles.searchContainer}>

                <TextInput
                    placeholder="Search"
                    style={styles.search}
                />

            </View>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderProduct}
                numColumns={2}
                contentContainerStyle={styles.content}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: "#fff",
    },

    top: {
        height: 80,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },

    topText: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
        color: "#4d9b87",
        fontSize: 22,
        fontWeight: "bold",
    },

    topButton: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },

    cartIcon: {
        width: 25,
        height: 25,
    },

    searchContainer: {
        padding: 15,
    },

    search: {
        height: 45,
        backgroundColor: "#f1f3f3",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
    },

    content: {
        padding: 10,
    },

    product: {
        width: "48%",
        margin: "1%",
        backgroundColor: "#f5f7f7",
        borderRadius: 10,
        padding: 8,
    },

    productImage: {
        width: "100%",
        height: 170,
        borderRadius: 8,
    },

    productName: {
        fontSize: 14,
        fontWeight: "500",
        marginTop: 8,
    },

    productPrice: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 4,
        color: "#555",
    },
    menuButton: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
},

menuIcon: {
    fontSize: 25,
},
});