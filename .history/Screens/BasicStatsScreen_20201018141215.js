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
import Icon from "react-native-vector-icons/Ionicons";

import { DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import {useColorScheme} from 'react-native-appearance'
import { Divider } from "react-native-paper";

function BasicStatsScreen() {
  
  
  const {colors} = useTheme();

    return (
      
      <ScrollView style={styles.container}>

      <View style={{margin:10, alignItems:"center"}}>
        <Text style={{color: colors.text}}>            SHS                           VS                           OPPONENT</Text>
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>


      <Text style = {{color: colors.text}}>        Goals        </Text>

      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >

      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>

      <Text style = {{color: colors.text}}>Shots on target</Text>

      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Shots off target</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Passes Completed</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Passes Misplaced</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Crosses Completed</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Crosses Misplaced</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>   Fouls   </Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Yellow Cards</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Red Cards</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Offsides</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Corners</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Throw-In's</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Free Kicks</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Penalties</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
       <View style={{flexDirection:"row",   justifyContent: "space-evenly",
            alignItems: "center", }} >
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Text style = {{color: colors.text}}>Penalties Given away</Text>
      <TouchableOpacity
            style={styles.continue2}
            
          >
            <Icon name="ios-add" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style = {{color: colors.text}}>0</Text>

          <TouchableOpacity
            style={styles.continue}
            
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
      <Divider style={{ backgroundColor: colors.text,  marginBottom:8, marginTop:8 }} />
      </View>

      </ScrollView>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
   
  },
  col: {
    flex: 1,
    margin: 20,
    flexDirection: "row",
  },
  text: {
    flex: 3,
    margin: 10,
    color: "#fff",
  },
  title: {
    marginBottom: 40,
    fontSize: 30,
    color: "#fff",
    justifyContent: "center",
  },
  spinner: {
    flex: 1,
    width: 10,
    minWidth: 100,
    //margin:10
  },
  continue: {
    width: 30,
    height: 30,
    borderRadius: 70 / 2,
    backgroundColor: "#5e92f3",
    alignItems: "center",
    justifyContent: "center",
    //marginLeft: "60%",
  },
  continue2: {
    width: 30,
    height: 30,
    borderRadius: 70 / 2,
    backgroundColor: "#a00f3d",
    alignItems: "center",
    justifyContent: "center",
    //marginLeft: "60%",
  },
  simbol: {
    marginLeft: 10,
    marginRight: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 50,
    color: "#fff",
  },
});


export default BasicStatsScreen;
