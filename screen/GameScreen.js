import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Alert, ScrollView, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import BodyText from "../components/BodyText";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import colors from "../constants/colors";

const renderListItem = (guess, index) => (
  <View
    key={index}
    style={{
      ...styles.listItem,
      width: Dimensions.get("window").width > 400 ? "60%" : "80%",
    }}
  >
    <BodyText style={{ fontWeight: "600", fontSize: 17 }}>#{index}</BodyText>
    <BodyText style={{ fontWeight: "600", fontSize: 17 }}>{guess}</BodyText>
  </View>
);

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (directions) => {
    if (
      (directions === "lower" && currentGuess < props.userChoice) ||
      (directions === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You Know That Is Wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (directions === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNum = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNum);
    setPastGuesses((curPasGuesses) => [nextNum, ...curPasGuesses]);
  };

  if (availableDeviceHeight < 500) {
    return (
      <View style={styles.screen}>
        <BodyText style={styles.text}>Opponent's Guess</BodyText>
        <View style={styles.controls}>
          <Button
            icon={
              <Ionicons name="md-remove" size={30} color={colors.accentColor} />
            }
            type="clear"
            titleStyle={{ color: colors.accentColor }}
            onPress={() => nextGuessHandler("lower")}
          />
          <NumberContainer>{currentGuess}</NumberContainer>
          <Button
            icon={
              <Ionicons name="md-add" size={30} color={colors.primaryColor} />
            }
            type="clear"
            titleStyle={{ color: colors.primaryColor }}
            onPress={() => nextGuessHandler("greater")}
          />
        </View>
        <View style={styles.listContainer}>
          <ScrollView contentContainerStyle={styles.list}>
            {pastGuesses.map((guess, index) =>
              renderListItem(guess, pastGuesses.length - index)
            )}
          </ScrollView>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <BodyText style={styles.text}>Opponent's Guess</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card
        style={{
          ...styles.buttonContainer,
          marginTop: availableDeviceHeight > 600 ? 20 : 5,
        }}
      >
        <Button
          icon={
            <Ionicons name="md-remove" size={30} color={colors.accentColor} />
          }
          type="clear"
          titleStyle={{ color: colors.accentColor }}
          onPress={() => nextGuessHandler("lower")}
        />
        <Button
          icon={
            <Ionicons name="md-add" size={30} color={colors.primaryColor} />
          }
          type="clear"
          titleStyle={{ color: colors.primaryColor }}
          onPress={() => nextGuessHandler("greater")}
        />
      </Card>
      <View
        style={{
          ...styles.listContainer,
          width: availableDeviceWidth > 400 ? "60%" : "80%",
        }}
      >
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    fontFamily: "open-sans",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 400,
    fontFamily: "open-sans",
    maxWidth: "80%",
  },
  listContainer: {
    flex: 1,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: colors.primaryColor,
    borderWidth: 2,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default GameScreen;
