import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import React from "react";
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
  },
});
