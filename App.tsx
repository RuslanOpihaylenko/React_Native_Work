import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/DetailsStackNavigator';
import MainScreen from './src/screens/MainScreen';
import { AppTabNavigator } from './src/navigation/AppTabNavigator';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';
import ShopNavigator from './src/navigation/ShopNavigator';
import { FavoritesProvider } from './src/content/FavouriteContent';
import ShopTabNavigator from './src/navigation/ShopTabNavigation';
import ShopDrawerNavigator from './src/navigation/ShopDrawerNavigator';

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <ShopDrawerNavigator/>
      </NavigationContainer>
    </FavoritesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// import { NavigationContainer } from "@react-navigation/native";
// import AppTabNavigator from "./src/navigation/AppTabNavigator";
// import { DrawerNavigator } from "./src/navigation/DrawerNavigator";

// export default function App() {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// }

// import { useState, useCallback } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   FlatList,
//   Alert,
//   StyleSheet,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
// import {BookListScreen} from "./src/screens/booksscreens/BookListScreen";
// import { AddBookScreen } from "./src/screens/booksscreens/AddBookScreen";
// import { DeleteBookScreen } from "./src/screens/booksscreens/DeleteBookScreen";
// const Drawer = createDrawerNavigator();
// interface IBook {
//   title: string;
//   author: string;
// }
// // 📌 Экран списка книг (автообновление при возврате на экран)


// // 📌 Экран добавления книги


// // 📌 Основной компонент с Drawer Navigation
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Список книг">
//         <Drawer.Screen name="Список книг" component={BookListScreen} />
//         <Drawer.Screen name="Добавить книгу" component={AddBookScreen} />
//         <Drawer.Screen name="Удалить книгу" component={DeleteBookScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// // 📌 Стили
// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
//   input: {
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 8,
//   },
//   bookItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
//   bookTitle: { fontSize: 18, fontWeight: "bold" },
//   bookAuthor: { fontSize: 16, color: "gray" },
// });