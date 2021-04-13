import React, { Component, useState } from "react";
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

import { DefaultTheme, DarkTheme, useTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native-appearance";
import { Divider } from "react-native-paper";

function BasicStatsScreen() {
  const [goals, setGoals] = useState(0);
  const [shotofftarget, setShotOffTarget] = useState(0);
  const [shotsontarget, setShotsOnTarget] = useState(0);
  const [passescompleted, setPassesCompleted] = useState(0);
  const [passesmisplaced, setPassesMisplaced] = useState(0);
  const [crossescompleted, setCrossesCompleted] = useState(0);
  const [crossesmisplaced, setCrossesMisplaced] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [yellowcards, setYellowCards] = useState(0);
  const [redcards, setRedCards] = useState(0);
  const [offsides, setOffsides] = useState(0);
  const [corners, setCorners] = useState(0);
  const [throwins, setThrowIns] = useState(0);
  const [freekicks, setFreeKicks] = useState(0);
  const [penalties, setPenalties] = useState(0);
  const [penaltiesgivenaway, setPenaltiesGivenAway] = useState(0);

  const [goalsopp, setGoalsOpp] = useState(0);
  const [shotofftargetopp, setShotOffTargetOpp] = useState(0);
  const [shotsontargetopp, setShotsOnTargetOpp] = useState(0);
  const [passescompletedopp, setPassesCompletedOpp] = useState(0);
  const [passesmisplacedopp, setPassesMisplacedOpp] = useState(0);
  const [crossescompletedopp, setCrossesCompletedOpp] = useState(0);
  const [crossesmisplacedopp, setCrossesMisplacedOpp] = useState(0);
  const [foulsopp, setFoulsOpp] = useState(0);
  const [yellowcardsopp, setYellowCardsOpp] = useState(0);
  const [redcardsopp, setRedCardsOpp] = useState(0);
  const [offsidesopp, setOffsidesOpp] = useState(0);
  const [cornersopp, setCornersOpp] = useState(0);
  const [throwinsopp, setThrowInsOpp] = useState(0);
  const [freekicksopp, setFreeKicksOpp] = useState(0);
  const [penaltiesopp, setPenaltiesOpp] = useState(0);
  const [penaltiesgivenawayopp, setPenaltiesGivenAwayOpp] = useState(0);

  increaseGoalValue = () => {
    setGoals((prevGoals) => prevGoals + 1);
  };

  increaseShotOffTargetValue = () => {
    setShotOffTarget((prevShotOffTarget) => prevShotOffTarget + 1);
  };

  increaseShotsOnTargetValue = () => {
    setShotsOnTarget((prevShotsOnTarget) => prevShotsOnTarget + 1);
  };

  increasePassesCompletedValue = () => {
    setPassesCompleted((prevPassesCompleted) => prevPassesCompleted + 1);
  };

  increasePassesMisplacedValue = () => {
    setPassesMisplaced((prevPassesMisplaced) => prevPassesMisplaced + 1);
  };

  increaseCrossesCompletedValue = () => {
    setCrossesCompleted((prevCrossesCompleted) => prevCrossesCompleted + 1);
  };

  increaseCrossesMisplacedValue = () => {
    setCrossesMisplaced((prevCrossesMisplaced) => prevCrossesMisplaced + 1);
  };

  increaseFoulsValue = () => {
    setFouls((prevFouls) => prevFouls + 1);
  };

  increaseYellowCardsValue = () => {
    setYellowCards((prevYellowCards) => prevYellowCards + 1);
  };

  increaseRedCardsValue = () => {
    setRedCards((prevRedCards) => prevRedCards + 1);
  };

  increaseOffsidesValue = () => {
    setOffsides((prevOffsides) => prevOffsides + 1);
  };

  increaseCornersValue = () => {
    setCorners((prevCorners) => prevCorners + 1);
  };

  increaseThrowInsValue = () => {
    setThrowIns((prevThrowIns) => prevThrowIns + 1);
  };

  increaseFreeKicksValue = () => {
    setFreeKicks((prevFreeKicks) => prevFreeKicks + 1);
  };

  increasePenaltiesValue = () => {
    setPenalties((prevPenalties) => prevPenalties + 1);
  };

  increasePenaltiesGivenAwayValue = () => {
    setPenaltiesGivenAway(
      (prevPenaltiesGivenAway) => prevPenaltiesGivenAway + 1
    );
  };

  decreaseGoalValue = () => {
    setGoals((prevGoals) => prevGoals + 1);
  };

  decreaseShotOffTargetValue = () => {
    setShotOffTarget((prevShotOffTarget) => prevShotOffTarget + 1);
  };

  decreaseShotsOnTargetValue = () => {
    setShotsOnTarget((prevShotsOnTarget) => prevShotsOnTarget + 1);
  };

  decreasePassesCompletedValue = () => {
    setPassesCompleted((prevPassesCompleted) => prevPassesCompleted + 1);
  };

  decreasePassesMisplacedValue = () => {
    setPassesMisplaced((prevPassesMisplaced) => prevPassesMisplaced + 1);
  };

  decreaseCrossesCompletedValue = () => {
    setCrossesCompleted((prevCrossesCompleted) => prevCrossesCompleted + 1);
  };

  decreaseCrossesMisplacedValue = () => {
    setCrossesMisplaced((prevCrossesMisplaced) => prevCrossesMisplaced + 1);
  };

  decreaseFoulsValue = () => {
    setFouls((prevFouls) => prevFouls + 1);
  };

  decreaseYellowCardsValue = () => {
    setYellowCards((prevYellowCards) => prevYellowCards + 1);
  };

  decreaseRedCardsValue = () => {
    setRedCards((prevRedCards) => prevRedCards + 1);
  };

  decreaseOffsidesValue = () => {
    setOffsides((prevOffsides) => prevOffsides + 1);
  };

  decreaseCornersValue = () => {
    setCorners((prevCorners) => prevCorners + 1);
  };

  decreaseThrowInsValue = () => {
    setThrowIns((prevThrowIns) => prevThrowIns + 1);
  };

  decreaseFreeKicksValue = () => {
    setFreeKicks((prevFreeKicks) => prevFreeKicks + 1);
  };

  decreasePenaltiesValue = () => {
    setPenalties((prevPenalties) => prevPenalties + 1);
  };

  decreasePenaltiesGivenAwayValue = () => {
    setPenaltiesGivenAway(
      (prevPenaltiesGivenAway) => prevPenaltiesGivenAway + 1
    );
  };




  increaseGoalValueOpp = () => {
    setGoalsOpp((prevGoalsOpp) => prevGoalsOpp + 1);
  };

  increaseShotOffTargetValueOpp = () => {
    setShotOffTargetOpp((prevShotOffTargetOpp) => prevShotOffTargetOpp + 1);
  };

  increaseShotsOnTargetValueOpp = () => {
    setShotsOnTargetOpp((prevShotsOnTargetOpp) => prevShotsOnTargetOpp + 1);
  };

  increasePassesCompletedValueOpp = () => {
    setPassesCompletedOpp((prevPassesCompletedOpp) => prevPassesCompletedOpp + 1);
  };

  increasePassesMisplacedValueOpp = () => {
    setPassesMisplacedOpp((prevPassesMisplacedOpp) => prevPassesMisplacedOpp + 1);
  };

  increaseCrossesCompletedValueOpp = () => {
    setCrossesCompletedOpp((prevCrossesCompletedOpp) => prevCrossesCompletedOpp + 1);
  };

  increaseCrossesMisplacedValueOpp = () => {
    setCrossesMisplacedOpp((prevCrossesMisplacedOpp) => prevCrossesMisplacedOpp + 1);
  };

  increaseFoulsValueOpp = () => {
    setFoulsOpp((prevFoulsOpp) => prevFoulsOpp + 1);
  };

  increaseYellowCardsValueOpp = () => {
    setYellowCardsOpp((prevYellowCardsOpp) => prevYellowCardsOpp + 1);
  };

  increaseRedCardsValueOpp = () => {
    setRedCardsOpp((prevRedCardsOpp) => prevRedCardsOpp + 1);
  };

  increaseOffsidesValueOpp = () => {
    setOffsidesOpp((prevOffsidesOpp) => prevOffsidesOpp + 1);
  };

  increaseCornersValueOpp = () => {
    setCornersOpp((prevCornersOpp) => prevCornersOpp + 1);
  };

  increaseThrowInsValueOpp = () => {
    setThrowInsOpp((prevThrowInsOpp) => prevThrowInsOpp + 1);
  };

  increaseFreeKicksValueOpp = () => {
    setFreeKicksOpp((prevFreeKicksOpp) => prevFreeKicksOpp + 1);
  };

  increasePenaltiesValueOpp = () => {
    setPenaltiesOpp((prevPenaltiesOpp) => prevPenaltiesOpp + 1);
  };

  increasePenaltiesGivenAwayValueOpp = () => {
    setPenaltiesGivenAwayOpp(
      (prevPenaltiesGivenAwayOpp) => prevPenaltiesGivenAwayOpp + 1
    );
  };

  decreaseGoalValueOpp = () => {
    setGoalsOpp((prevGoalsOpp) => prevGoalsOpp + 1);
  };

  decreaseShotOffTargetValueOpp = () => {
    setShotOffTargetOpp((prevShotOffTargetOpp) => prevShotOffTargetOpp + 1);
  };

  decreaseShotsOnTargetValueOpp = () => {
    setShotsOnTargetOpp((prevShotsOnTargetOpp) => prevShotsOnTargetOpp + 1);
  };

  decreasePassesCompletedValueOpp = () => {
    setPassesCompletedOpp((prevPassesCompletedOpp) => prevPassesCompletedOpp + 1);
  };

  decreasePassesMisplacedValueOpp = () => {
    setPassesMisplacedOpp((prevPassesMisplacedOpp) => prevPassesMisplacedOpp + 1);
  };

  decreaseCrossesCompletedValueOpp = () => {
    setCrossesCompletedOpp((prevCrossesCompletedOpp) => prevCrossesCompletedOpp + 1);
  };

  decreaseCrossesMisplacedValueOpp = () => {
    setCrossesMisplacedOpp((prevCrossesMisplacedOpp) => prevCrossesMisplacedOpp + 1);
  };

  decreaseFoulsValueOpp = () => {
    setFoulsOpp((prevFoulsOpp) => prevFoulsOpp + 1);
  };

  decreaseYellowCardsValueOpp = () => {
    setYellowCardsOpp((prevYellowCardsOpp) => prevYellowCardsOpp + 1);
  };

  decreaseRedCardsValueOpp = () => {
    setRedCardsOpp((prevRedCardsOpp) => prevRedCardsOpp + 1);
  };

  decreaseOffsidesValueOpp = () => {
    setOffsidesOpp((prevOffsidesOpp) => prevOffsidesOpp + 1);
  };

  decreaseCornersValueOpp = () => {
    setCornersOpp((prevCornersOpp) => prevCornersOpp + 1);
  };

  decreaseThrowInsValueOpp = () => {
    setThrowInsOpp((prevThrowInsOpp) => prevThrowInsOpp + 1);
  };

  decreaseFreeKicksValueOpp = () => {
    setFreeKicksOpp((prevFreeKicksOpp) => prevFreeKicksOpp + 1);
  };

  decreasePenaltiesValueOpp = () => {
    setPenaltiesOpp((prevPenaltiesOpp) => prevPenaltiesOpp + 1);
  };

  decreasePenaltiesGivenAwayValueOpp = () => {
    setPenaltiesGivenAwayOpp(
      (prevPenaltiesGivenAwayOpp) => prevPenaltiesGivenAwayOpp + 1
    );
  };

  const { colors } = useTheme();

  return (
    <ScrollView style={styles.container}>
      <View style={{ margin: 10, alignItems: "center" }}>
        <Text style={{ color: colors.text }}> SHS VS OPPONENT</Text>
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        {<Text style={{ color: colors.text }}>{goals}</Text>}

        <TouchableOpacity style={styles.continue}
        onPress={() => {
            decreaseGoalValue();
          }}
        >
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}> Goals </Text>

        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {increaseGoalValueOpp()}}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{goalsopp}</Text>

        <TouchableOpacity style={styles.continue}
         onPress={() => {decreaseGoalValueOpp()}}
        >
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>

        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{shotsontarget}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>Shots on target</Text>

        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            decreaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{shotsontargetopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>

        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{shotofftarget}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Shots off target</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            decreaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{shotofftargetopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{passescompleted}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Passes Completed</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            decreaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{passescompletedopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{passesmisplaced}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Passes Misplaced</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{passesmisplacedopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{crossescompleted}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Crosses Completed</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{crossescompletedopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{crossesmisplaced}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Crosses Misplaced</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{crossesmisplacedopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{fouls}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}> Fouls </Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{foulsopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{yellowcards}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Yellow Cards</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{yellowcardsopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{redcards}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Red Cards</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{redcardsopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{offsides}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Offsides</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{offsidesopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{corners}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Corners</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{cornersopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{throwins}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Throw-In's</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{throwinsopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{freekicks}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Free Kicks</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{freekicksopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{penalties}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Penalties</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{penaltiesopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
      </View>

      <Divider
        style={{ backgroundColor: colors.text, marginBottom: 8, marginTop: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{penaltiesgivenaway}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: colors.text }}>Penalties Given away</Text>
        <TouchableOpacity
          style={styles.continue2}
          onPress={() => {
            increaseGoalValue();
          }}
        >
          <Icon name="ios-add" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={{ color: colors.text }}>{penaltiesgivenawayopp}</Text>

        <TouchableOpacity style={styles.continue}>
          <MaterialCommunityIcons name="minus" size={24} color="#fff" />
        </TouchableOpacity>
        <Divider
          style={{
            backgroundColor: colors.text,
            marginBottom: 8,
            marginTop: 8,
          }}
        />
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
