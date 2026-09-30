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
export const AddBookScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
const [bookCount, setBookCount] = useState(0);

  const saveBook = async () => {
    if (!title || !author) {
      Alert.alert("Ошибка", "Введите название и автора книги");
      return;
    }

    try {
      const storedBooks = await AsyncStorage.getItem("books");
      const books = storedBooks ? JSON.parse(storedBooks) : [];

      const newBook = { title, author };
      books.push(newBook);

      await AsyncStorage.setItem("books", JSON.stringify(books));

      setBookCount(books.length);
      setTitle("");
      setAuthor("");
      Alert.alert("Успех", "Книга добавлена!");
      navigation.navigate("Список книг");
    } catch (error) {
      console.error("Ошибка при сохранении книги", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добавить книгу</Text>
      <TextInput
        style={styles.input}
        placeholder="Название книги"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Автор"
        value={author}
        onChangeText={setAuthor}
      />
      <Button title="Сохранить" onPress={saveBook} />
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