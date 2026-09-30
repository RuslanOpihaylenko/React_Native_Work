import React from "react";

import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

import { useFavorites } from "../../content/FavouriteContent";

export default function FavoritesScreen() {

    const {
        favorites,
        removeFromFavorites,
    } = useFavorites();

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Улюблені товари
            </Text>

            {favorites.length === 0 ? (

                <View style={styles.emptyContainer}>

                    <Text style={styles.emptyIcon}>
                        ♡
                    </Text>

                    <Text style={styles.emptyText}>
                        Улюблених товарів поки немає
                    </Text>

                </View>

            ) : (

                <FlatList
                    data={favorites}
                    keyExtractor={(item) =>
                        item.id.toString()
                    }
                    numColumns={2}
                    contentContainerStyle={styles.list}
                    renderItem={({ item }) => (

                        <View style={styles.product}>

                            <Image
                                source={{
                                    uri: item.image,
                                }}
                                style={styles.image}
                            />

                            <Text style={styles.name}>
                                {item.name}
                            </Text>

                            <Text style={styles.price}>
                                ${item.price}.00
                            </Text>

                            <TouchableOpacity
                                style={styles.removeButton}
                                onPress={() =>
                                    removeFromFavorites(item.id)
                                }
                            >

                                <Text>
                                    ♥
                                </Text>

                            </TouchableOpacity>

                        </View>

                    )}
                />

            )}

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 15,
    },

    list: {
        paddingBottom: 20,
    },

    product: {
        width: "48%",
        margin: "1%",
        padding: 8,
        borderRadius: 10,
        backgroundColor: "#f5f7f7",
        position: "relative",
    },

    image: {
        width: "100%",
        height: 170,
        borderRadius: 8,
        resizeMode: "cover",
    },

    name: {
        fontSize: 14,
        marginTop: 8,
    },

    price: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 4,
    },

    removeButton: {
        position: "absolute",
        right: 15,
        top: 15,
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    emptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    emptyIcon: {
        fontSize: 60,
        color: "#aaa",
    },

    emptyText: {
        marginTop: 15,
        fontSize: 16,
        color: "#777",
    },

});