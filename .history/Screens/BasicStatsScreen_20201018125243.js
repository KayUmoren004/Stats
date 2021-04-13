import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import {useColorScheme} from 'react-native-appearance'
import { Divider } from "react-native-paper";

function BasicStatsScreen() {
  
  
  const {colors} = useTheme();

    return (
      
      <ScrollView>
      <Divider style={{ backgroundColor: "#fff",  marginBottom:8, marginTop:8 }} />

      </ScrollView>
    );
  
}

export default BasicStatsScreen;
