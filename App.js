import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import {useNavigation} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* import { createNativeStackNavigator } from '@react-navigation/native-stack'; */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {MaterialCommunityIcons} from '@expo/vector-icons';


import SeleccionScreen from './src/screens/SeleccionScreen';
import Categoria from './src/screens/Categoria';
import HistorialFavoritos from './src/screens/HistorialFavoritos';
import Home from './src/screens/Home';
import Libro from './src/screens/Libro';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';



SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 1000);

/* const Stack = createNativeStackNavigator(); */
const Stack = createStackNavigator();
const AlmostNativeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

<Stack.Group ></Stack.Group>
{/*
export const PrivateStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!auth.currentUser.displayName && (
          <Stack.Screen name = "Login"
                        component = { Login }
                        options = {0}/>
        )}
        <Stack.Screen name = "TabNav"
                      component = { TabNav }
                      options = {0}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
*/}
export const PublicStack = () => {
  <NavigationContainer>
    <Stack.Navigator screenOptions = {0}>
      <Stack.Screen name = "LoginScreen"
                    component = { LoginScreen }
                    options = {0}/>
    </Stack.Navigator>
  </NavigationContainer>
}

function LibroSeccion() {
  const navigation = useNavigation();
  return (
    <Navigator options = {{headerShown: false}}>
      <Screen name = "Libro" style ={{headerShown: false}}component = {Libro} options = {{headerShown: false}}/>
      <Screen name = "SeleccionScreen" style ={{headerShown: false}}component = {SeleccionScreen} options = {{headerShown: false}}/>
    </Navigator>
  )
}

function TabNav() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator screenOptions = {({ route }) => ({
      tabBarIcon: ({focused, color, size, padding }) => {
        let iconName;
        if(route.name === "Home") {
          iconName = focused ?
          'home-variant' : 'home-variant-outline';
        } else if(route.name === 'Categoria') {
          iconName = focused ?
          'compass' : 'compass-outline';
        } else if(route.name === 'HistorialFavoritos') {
          iconName = focused ?
          'account-circle' : 'account-circle-outline';
        }
        return (
          <MaterialCommunityIcons
            name = {iconName}
            size = {size}
            color = {color}
            style = {{paddingBottom: padding}}/>
          )
      }
    })}>
      <Tab.Screen name = "Home" style ={{headerShown: false}} component = {Home} options = {{headerShown: false}}/>
      <Tab.Screen name = "Categoria" style ={{headerShown: false}} component = {Categoria} options = {{headerShown: false}}/>
      <Tab.Screen name = "HistorialFavoritos" style ={{headerShown: false}}component = {HistorialFavoritos} options = {{headerShown: false}}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "LoginScreen" style ={{headerShown: false}} component = {LoginScreen} options = {{headerShown: false}}/>
      <Stack.Screen name = "RegisterScreen" style ={{headerShown: false}} component = {RegisterScreen} options = {{headerShown: false}}/>
      <Stack.Screen name = "TabNav" component = {TabNav} options = {{headerShown: false}}/>
      <Stack.Screen name = "Libro" component = {Libro} options = {{headerShown: false}}/>
      <Stack.Screen name = "SeleccionScreen" component = {SeleccionScreen} options = {{headerShown: false}}/>

      {/*<Stack.Screen options={styles.PantallaInicioSesion} name="SeleccionScreen" component={SeleccionScreen}/>*/}
    </Stack.Navigator>
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
  PantallaInicioSesion: {
    headerShown: false
  },
});
