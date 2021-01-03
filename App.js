import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGamesScreen from "./screen/StartGamesScreen";
import GameScreen from "./screen/GameScreen";

export default function App() {
  const [userNumber, setUseNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUseNumber(selectedNumber);
  };

  let content = <StartGamesScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
