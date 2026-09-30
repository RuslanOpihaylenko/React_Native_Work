import React, { useEffect, useState } from "react";

import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    ActivityIndicator,
    Alert,
} from "react-native";

type ServerProduct = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
};

type Category = {
    name: string;
    image: string;
};

export default function CategoriesScreen() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {

        try {

            const response = await fetch(
                "https://fakestoreapi.com/products"
            );

            const products: ServerProduct[] =
                await response.json();

            // Создаём категории
            const categoryMap: {
                [key: string]: string;
            } = {};

            products.forEach((product) => {

                // Для каждой категории берём
                // картинку первого товара
                if (!categoryMap[product.category]) {
                    categoryMap[product.category] =
                        product.image;
                }

            });

            const result: Category[] =
                Object.entries(categoryMap).map(
                    ([name, image]) => ({
                        name,
                        image,
                    })
                );

            setCategories(result);

        } catch (error) {

            console.error(
                "Ошибка загрузки категорий:",
                error
            );

            Alert.alert(
                "Ошибка",
                "Не удалось загрузить категории"
            );

        } finally {

            setLoading(false);

        }
    };

    if (loading) {

        return (
            <View style={styles.loading}>

                <ActivityIndicator
                    size="large"
                />

                <Text style={styles.loadingText}>
                    Загрузка категорий...
                </Text>

            </View>
        );
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Категорії
            </Text>

            <FlatList
                data={categories}
                keyExtractor={(item) => item.name}
                numColumns={2}
                contentContainerStyle={styles.list}

                renderItem={({ item }) => (

                    <View style={styles.category}>

                        <Image
                            source={{
                                uri: item.image,
                            }}
                            style={styles.image}
                        />

                        <Text style={styles.categoryName}>
                            {item.name}
                        </Text>

                    </View>

                )}
            />

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
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 15,
    },

    list: {
        paddingBottom: 20,
    },

    category: {
        width: "48%",
        margin: "1%",
        backgroundColor: "#f3f6f6",
        borderRadius: 12,
        padding: 8,
    },

    image: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        resizeMode: "contain",
        backgroundColor: "#fff",
    },

    categoryName: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 8,
    },

    loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    loadingText: {
        marginTop: 10,
        fontSize: 16,
    },

});