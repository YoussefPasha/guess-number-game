import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Button } from "react-native-elements";
import BodyText from "../components/BodyText";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import colors from "../constants/colors";
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
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
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
      currentLow.current = currentGuess;
    }
    const nextNum = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNum);
    setRounds((curRounds) => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <BodyText style={styles.text}>Opponent's Guess</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          type="clear"
          titleStyle={{ color: colors.accentColor }}
          onPress={() => nextGuessHandler("lower")}
        />
        <Button
          title="GREATER"
          type="clear"
          titleStyle={{ color: colors.primaryColor }}
          onPress={() => nextGuessHandler("greater")}
        />
      </Card>
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
    marginTop: 20,
    width: 300,
    fontFamily: "open-sans",
    maxWidth: "80%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default GameScreen;
