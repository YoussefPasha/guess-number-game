import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameOver = () => {
  return (
    <View style={styles.screen}>
      <Text> Game Is Over! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
