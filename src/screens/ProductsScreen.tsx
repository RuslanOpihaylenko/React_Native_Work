import React from "react";
import { useFavorites } from "../content/FavouriteContent";

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";

import { ProductScreenProps } from "../navigation/ShopNavigator";

export default function ProductScreen({
    route,
    navigation,
}: ProductScreenProps) {

    const { product } = route.params;
    const {
    addToFavorites,
    removeFromFavorites,
    isFavorite,
} = useFavorites();

const favorite = isFavorite(product.id);

const handleFavorite = () => {

    if (favorite) {
        removeFromFavorites(product.id);
    } else {
        addToFavorites(product);
    }

};

    return (
        <ScrollView style={styles.body}>

            <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.goBack()}
            >

                <Text style={styles.backText}>
                    ‹
                </Text>

            </TouchableOpacity>

            <Image
                source={{
                    uri: product.image,
                }}
                style={styles.image}
            />
            <TouchableOpacity
    style={styles.favoriteButton}
    onPress={handleFavorite}
>
    <Text style={styles.favoriteIcon}>
        {favorite ? "♥" : "♡"}
    </Text>
</TouchableOpacity>
            <View style={styles.container}>


                <Text style={styles.name}>
                    {product.name}
                </Text>

                <Text style={styles.price}>
                    ${product.price}.00
                </Text>


                <Text style={styles.rating}>
                    ★ 4.8
                </Text>

                <Text style={styles.description}>
                    {product.description}
                </Text>

                <Text style={styles.title}>
                    Size
                </Text>

                <View style={styles.options}>

                    <TouchableOpacity style={styles.option}>
                        <Text>7</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            styles.selected,
                        ]}
                    >
                        <Text>8</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option}>
                        <Text>9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option}>
                        <Text>10</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option}>
                        <Text>11</Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.title}>
                    Color
                </Text>

                <View style={styles.colors}>

                    <View
                        style={[
                            styles.color,
                            {
                                backgroundColor: "#eeeeee",
                            },
                        ]}
                    />

                    <View
                        style={[
                            styles.color,
                            {
                                backgroundColor: "#ffffff",
                            },
                        ]}
                    />

                    <View
                        style={[
                            styles.color,
                            {
                                backgroundColor: "#dddddd",
                            },
                        ]}
                    />

                    <View
                        style={[
                            styles.color,
                            {
                                backgroundColor: "#333333",
                            },
                        ]}
                    />

                </View>

                <View style={styles.buttons}>

                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() =>
                            navigation.navigate("Cart", {
                                product: product,
                            })
                        }
                    >

                        <Text style={styles.addText}>
                            ADD TO BAG
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buyButton}
                        onPress={() =>
                            navigation.navigate("Cart", {
                                product: product,
                            })
                        }
                    >

                        <Text style={styles.buyText}>
                            BUY NOW
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: "#fff",
    },

    back: {
        position: "absolute",
        zIndex: 10,
        top: 15,
        left: 15,
        width: 40,
        height: 40,
        justifyContent: "center",
    },

    backText: {
        fontSize: 35,
    },

    image: {
        width: "100%",
        height: 400,
        resizeMode: "contain",
        backgroundColor: "#f2f5f5",
    },

    container: {
        padding: 20,
    },

    name: {
        fontSize: 22,
        fontWeight: "bold",
    },

    price: {
        fontSize: 18,
        color: "#4d9b87",
        fontWeight: "bold",
        marginTop: 5,
    },

    rating: {
        position: "absolute",
        right: 20,
        top: 25,
        fontSize: 15,
    },

    description: {
        color: "#777",
        marginTop: 10,
        lineHeight: 20,
    },

    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
    },

    options: {
        flexDirection: "row",
        gap: 8,
    },

    option: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },

    selected: {
        borderColor: "#4d9b87",
        backgroundColor: "#e8f3f0",
    },

    colors: {
        flexDirection: "row",
        gap: 12,
    },

    color: {
        width: 25,
        height: 25,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#aaa",
    },

    buttons: {
        flexDirection: "row",
        marginTop: 25,
        gap: 10,
    },

    addButton: {
        flex: 1,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#4d9b87",
        alignItems: "center",
        justifyContent: "center",
    },

    buyButton: {
        flex: 1,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#4d9b87",
        alignItems: "center",
        justifyContent: "center",
    },

    addText: {
        color: "#fff",
        fontWeight: "bold",
    },

    buyText: {
        color: "#4d9b87",
        fontWeight: "bold",
    },
    imageContainer: {
    position: "relative",
},

favoriteButton: {
    position: "absolute",
    right: 20,
    top: 20,
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
},

favoriteIcon: {
    fontSize: 30,
},
});