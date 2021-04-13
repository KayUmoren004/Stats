// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/Ionicons";
import {AppearanceProvider, useColorScheme} from 'react-native-appearance'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
  const {colors} = useTheme();
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: colors.text}}>Home Screen</Text>
      <StatusBar barStyle="auto" />
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-home" color={color} size={size}/>
          )
        }} />
        <Tab.Screen name="Home2" component={HomeScreen2}  options={{
          tabBarLabel: 'Home2',
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-home" color={color} size={size}/>
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    </AppearanceProvider>
  );
}

 function App() {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={HomeScreen2} />
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

