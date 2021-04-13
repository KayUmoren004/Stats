/*
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
        <Tab.Screen name="Notes" component={HomeScreen2}  options={{
          tabBarLabel: 'Notes',
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
        <Stack.Screen name="Notes" component={HomeScreen2} />
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
});*/

import * as React from 'react';
import {Component} from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/Ionicons";
import {AppearanceProvider, useColorScheme} from 'react-native-appearance'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BasicStatsScreen from "./BasicStatsScreen" 
import notesScreen from "./Notes" 
import App from '../App';

function MainScreen() {
    return {

    }
}
const Tab = createBottomTabNavigator();


const BasicStatsStack = createStackNavigator();

function BasicStatsStackScreen() {
    return (
      <BasicStatsStack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#2163f6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <BasicStatsStack.Screen
          name="Stats"
          component={BasicStatsScreen}
          options={{ title: "Basic Stats" }}
        />
      </BasicStatsStack.Navigator>
    );
  }

  const NotesStack = createStackNavigator();

function NotesScreen() {
    return (
      <NotesStack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#2163f6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <NotesStack.Screen
          name="Games Screen"
          component={notesScreen}
          options={{ title: "Notes" }}
        />
      </NotesStack.Navigator>
    );
  }

  export default function MyTabs() {
    const scheme = useColorScheme();
    return (
      <AppearanceProvider>
      <NavigationContainer 
      theme={scheme === "dark" ? DarkTheme : DefaultTheme}
    independent={true}
      
      >
        <Tab.Navigator>
          <Tab.Screen name="Stats" component={BasicStatsStackScreen} options={{
            tabBarLabel: 'Stats',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-home" color={color} size={size}/>
            )
          }} />
          <Tab.Screen name="Notes" component={NotesScreen}  options={{
            tabBarLabel: 'Notes',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-home" color={color} size={size}/>
            )
          }} />
        </Tab.Navigator>
      </NavigationContainer>
      </AppearanceProvider>
    );
  }


