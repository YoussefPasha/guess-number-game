import { StyleSheet, Text, View } from "react-native";

import React from "react";

const StartGamesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Game Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default StartGamesScreen;
