import React from "react";

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

import { CartScreenProps } from "../navigation/ShopNavigator";

export default function CartScreen({
    route,
    navigation,
}: CartScreenProps) {

    const product = route.params?.product;

    const price = product ? product.price : 0;
    const shipping = product ? 15 : 0;
    const tax = product ? 13.5 : 0;
    const total = price + shipping + tax;

    return (
        <View style={styles.body}>

            <View style={styles.header}>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >

                    <Text style={styles.back}
                    onPress={() => navigation.goBack()}>
                        ‹
                    </Text>

                </TouchableOpacity>

                <Text style={styles.title}>
                    YOUR BAG
                </Text>

            </View>

            {product ? (

                <View style={styles.product}>

                    <Image
                        source={{
                            uri: product.image,
                        }}
                        style={styles.image}
                    />

                    <View style={styles.info}>

                        <Text style={styles.name}>
                            {product.name.toUpperCase()}
                        </Text>

                        <Text>
                            Size 9
                        </Text>

                        <Text style={styles.price}>
                            ${product.price}.00
                        </Text>

                    </View>

                    <Text style={styles.quantity}>
                        − 1 +
                    </Text>

                </View>

            ) : (

                <Text style={styles.empty}>
                    Your bag is empty
                </Text>

            )}

            <TouchableOpacity style={styles.row}>

                <View>

                    <Text style={styles.rowTitle}>
                        Shipping Address
                    </Text>

                    <Text>
                        45 Bright St, NYC
                    </Text>

                </View>

                <Text>›</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.row}>

                <View>

                    <Text style={styles.rowTitle}>
                        Payment Method
                    </Text>

                    <Text>
                        💳 Visa •••• 7890
                    </Text>

                </View>

                <Text>›</Text>

            </TouchableOpacity>

            <View style={styles.summary}>

                <Text style={styles.summaryTitle}>
                    Order Summary
                </Text>

                <View style={styles.summaryRow}>

                    <Text>
                        Subtotal
                    </Text>

                    <Text>
                        ${price.toFixed(2)}
                    </Text>

                </View>

                <View style={styles.summaryRow}>

                    <Text>
                        Shipping
                    </Text>

                    <Text>
                        ${shipping.toFixed(2)}
                    </Text>

                </View>

                <View style={styles.summaryRow}>

                    <Text>
                        Tax
                    </Text>

                    <Text>
                        ${tax.toFixed(2)}
                    </Text>

                </View>

                <View style={styles.summaryRow}>

                    <Text style={styles.totalText}>
                        Total
                    </Text>

                    <Text style={styles.totalText}>
                        ${total.toFixed(2)}
                    </Text>

                </View>

            </View>

            <TouchableOpacity
                style={styles.orderButton}
            >

                <Text style={styles.orderText}>
                    PLACE ORDER - ${total.toFixed(2)}
                </Text>

            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },

    header: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    back: {
        position: "absolute",
        left: -150,
        fontSize: 35,
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
    },

    product: {
        flexDirection: "row",
        backgroundColor: "#f2f5f5",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
    },

    image: {
        width: 80,
        height: 80,
        resizeMode: "contain",
    },

    info: {
        flex: 1,
        marginLeft: 10,
    },

    name: {
        fontWeight: "bold",
    },

    price: {
        color: "#4d9b87",
        fontWeight: "bold",
        marginTop: 5,
    },

    quantity: {
        color: "#555",
    },

    empty: {
        textAlign: "center",
        margin: 30,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },

    rowTitle: {
        fontWeight: "bold",
        marginBottom: 5,
    },

    summary: {
        marginTop: 20,
    },

    summaryTitle: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10,
    },

    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 4,
    },

    totalText: {
        fontWeight: "bold",
        fontSize: 18,
    },

    orderButton: {
        marginTop: 20,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#4d9b87",
        alignItems: "center",
        justifyContent: "center",
    },

    orderText: {
        color: "#fff",
        fontWeight: "bold",
    },

});