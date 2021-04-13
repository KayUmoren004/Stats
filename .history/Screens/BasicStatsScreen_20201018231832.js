import React, { Component, useState } from 'react';
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

  const [goals, setGoals] = useState(0)
  const [shotofftarget, setShotOffTarget] = useState(0)
  const [shotsontarget, setShotsOnTarget] = useState(0)
  const [passescompleted, setPassesCompleted] = useState(0)
  const [passesmisplaced, setPassesMisplaced] = useState(0)
  const [crossescompleted, setCrossesCompleted] = useState(0)
  const [crossesmisplaced, setCrossesMisplaced] = useState(0)
  const [fouls, setFouls] = useState(0)
  const [yellowcards, setYellowCards] = useState(0)
  const [redcards, setRedCards] = useState(0)
  const [offsides, setOffsides] = useState(0)
  const [corners, setCorners] = useState(0)
  const [throwins, setThrowIns] = useState(0)
  const [freekicks, setFreeKicks] = useState(0)
  const [penalties, setPenalties] = useState(0)
  const [penaltiesgivenaway, setpenaltiesGivenAway] = useState(0)

  const [goalsopp, setGoalsOpp] = useState(0)
  const [shotofftargetopp, setShotOffTargetOpp] = useState(0)
  const [shotsontargetopp, setShotsOnTargetOpp] = useState(0)
  const [passescompletedopp, setPassesCompletedOpp] = useState(0)
  const [passesmisplacedopp, setPassesMisplacedOpp] = useState(0)
  const [crossescompletedopp, setCrossesCompletedOpp] = useState(0)
  const [crossesmisplacedopp, setCrossesMisplacedOpp] = useState(0)
  const [foulsopp, setFoulsOpp] = useState(0)
  const [yellowcardsopp, setYellowCardsOpp] = useState(0)
  const [redcardsopp, setRedCardsOpp] = useState(0)
  const [offsidesopp, setOffsidesOpp] = useState(0)
  const [cornersopp, setCornersOpp] = useState(0)
  const [throwinsopp, setThrowInsOpp] = useState(0)
  const [freekicksopp, setFreeKicksOpp] = useState(0)
  const [penaltiesopp, setPenaltiesOpp] = useState(0)
  const [penaltiesgivenawayopp, setpenaltiesGivenAwayOpp] = useState(0)
  
  
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
      <Text style = {{color: colors.text}}>             Fouls          </Text>
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
    //backgroundColor: "#000",
   
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
