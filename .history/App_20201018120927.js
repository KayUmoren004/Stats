// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance'
import MainScreen from "./Screens/MainScreen"

function HomeScreen() {
  const {colors} = useTheme();
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: colors.text}}>Home Screen</Text>
      <StatusBar barStyle="auto" />
    </View>
  );
}

function HomeScreen2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen2</Text>
    </View>
  );
}

const Stack = createStackNavigator();


export default function App() {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Main Screen" component={MainScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
    </AppearanceProvider>
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

