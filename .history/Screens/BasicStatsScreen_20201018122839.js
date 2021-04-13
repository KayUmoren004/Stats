import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import {useColorScheme} from 'react-native-appearance'

const {colors} = useTheme();
class BasicStatsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      
      <View>
        <Text style={{color: colors.text}}> BasicStatsScreen </Text>
      </View>
    );
  }
}

export default BasicStatsScreen;
