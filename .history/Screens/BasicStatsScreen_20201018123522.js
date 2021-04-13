import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import {useColorScheme} from 'react-native-appearance'

function BasicStatsScreen() {
  
  
  const {colors} = useTheme();

    return (
      
      <ScrollView>
        <Text style={{color: colors.text}}> BasicStatsScreen </Text>
      </ScrollView>
    );
  
}

export default BasicStatsScreen;
