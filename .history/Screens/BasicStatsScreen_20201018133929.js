import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import { DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import {useColorScheme} from 'react-native-appearance'
import { Divider } from "react-native-paper";

function BasicStatsScreen() {
  
  
  const {colors} = useTheme();

    return (
      
      <ScrollView>
      
      <View>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Ionicons name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

      <Text style = {{color: colors.text}}>Goals</Text>

      <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Shots on target</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Shots off target</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Passes Completed</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Passes Misplaced</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Crosses Completed</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Crosses Misplaced</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Fouls</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Yellow Cards</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Red Cards</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Offsides</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Coners</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Throw-In's</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Free Kicks</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Penalties</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <View>
      <Text style = {{color: colors.text}}>Penalties Given away</Text>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      </ScrollView>
    );
  
}

export default BasicStatsScreen;
