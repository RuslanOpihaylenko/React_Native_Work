import { useState, useCallback, useEffect } from "react";
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
export const DeleteBookScreen = ({ navigation }: any) => {
    const loadBooks = async() => {
        try{
            const storedBooks = await AsyncStorage.getItem("books");

            const books = storedBooks 
            ? JSON.parse(storedBooks)
            : [];

            setBookCount(books.length);
        }
        catch(error){
             console.error("Ошибка загрузки книг:", error);
        }
    }
     useEffect(()=> {
        loadBooks();
    }, []);
  const [title, setTitle] = useState("");
  const [bookCount, setBookCount] = useState(0);

  const deleteBook = async () => {
    if (!title) {
      Alert.alert("Ошибка", "Не найдено название");
      return;
    }

    try {
      const storedBooks = await AsyncStorage.getItem("books");
      const books = storedBooks ? JSON.parse(storedBooks) : [];

      const updateBooks = books.filter((book : any) => book.title !== title.trim());

      if(updateBooks.length === books.length) {
         Alert.alert("Ошибка", "Книга с таким названием не найдена");
        return;
      }
      await AsyncStorage.setItem("books", JSON.stringify(updateBooks));

      setBookCount(updateBooks.length);
      setTitle("");
      
      Alert.alert("Успех", "Книга удалена!");
      navigation.navigate("Список книг");
    } catch (error) {
      console.error("Ошибка при удалении книги", error);
    }
  };
  const deleteAllBooks = async () => {
    Alert.alert(
        "Удаление всех книг",
      "Вы действительно хотите удалить все книги?",
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: async() => {
            try{
                await AsyncStorage.removeItem("books");
                setBookCount(0);
                setTitle("");
                loadBooks();
                Alert.alert("Успех", "Все книги удалены!")
                navigation.navigate("Список книг");
            }catch(error){
                console.error(
                "Ошибка при удалении всех книг:",
                error
              );
            }
          }
        }
      ]
    )
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Удалить книгу</Text>
      <TextInput
        style={styles.input}
        placeholder="Название книги"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Удалить" onPress={deleteBook} />
      {bookCount > 0 && (
        <View style={styles.deleteAll}>
          <Button
            title="Удалить все книги"
            color="red"
            onPress={deleteAllBooks}
          />
        </View>
      )}
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
  deleteAll: {
    marginTop: 20,
  },
});