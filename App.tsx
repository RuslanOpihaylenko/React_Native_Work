import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/DetailsStackNavigator';
import MainScreen from './src/screens/MainScreen';
import { AppTabNavigator } from './src/navigation/AppTabNavigator';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {
  return (
    // <NavigationContainer>
    //    <AppNavigator></AppNavigator>
    // </NavigationContainer>
    // <MainScreen/>
    <NavigationContainer>
      {/* <AppTabNavigator/> */}
      {/* <DrawerNavigator/> */}
      <ShopNavigator/>
    </NavigationContainer>
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
