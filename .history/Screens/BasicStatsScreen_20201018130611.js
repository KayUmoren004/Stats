import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import {useColorScheme} from 'react-native-appearance'
import { Divider } from "react-native-paper";

function BasicStatsScreen() {
  
  
  const {colors} = useTheme();

    return (
      
      <ScrollView>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      <Text style = {{color: colors.text}}>Goals</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Shots on target</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Shots off target</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Passes Completed</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Passes Misplaced</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Crosses Completed</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Crosses Misplaced</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Fouls</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Yellow Cards</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Red Cards</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Offsides</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Coners</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Throw-In's</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Free Kicks</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />\

      <Text style = {{color: colors.text}}>Penalties</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />

      <Text style = {{color: colors.text}}>Penalties Given away</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </ScrollView>
    );
  
}

export default BasicStatsScreen;
