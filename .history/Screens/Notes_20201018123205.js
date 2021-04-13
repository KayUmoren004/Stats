import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import {useColorScheme} from 'react-native-appearance'

function Notes() {
  
  
  const {colors} = useTheme();

    return (
      
      <View>
        <Text style={{color: colors.text}}> Notes </Text>
      </View>
    );
  
}

export default Notes;
