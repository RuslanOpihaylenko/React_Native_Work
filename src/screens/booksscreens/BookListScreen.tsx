import { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Alert,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
const Drawer = createDrawerNavigator();
interface IBook {
  title: string;
  author: string;
}
export const BookListScreen = () => {
  const [books, setBooks] = useState<Array<IBook>>([]);

  const loadBooks = async () => {
    const storedBooks = await AsyncStorage.getItem("books");
    if (storedBooks) setBooks(JSON.parse(storedBooks));
  };

  useFocusEffect(
    useCallback(() => {
      loadBooks();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список книг</Text>
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>Автор: {item.author}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  bookItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  bookTitle: { fontSize: 18, fontWeight: "bold" },
  bookAuthor: { fontSize: 16, color: "gray" },
});