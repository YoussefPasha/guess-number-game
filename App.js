import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";

import Colors from "./constants/colors";
import Header from "./components/Header";
import StartGamesScreen from "./screen/StartGamesScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGamesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000",
  },
});
