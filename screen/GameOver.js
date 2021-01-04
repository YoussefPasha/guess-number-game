import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text> Game Is Over! </Text>
      <Text>Number Of Rounds: {props.NumOfRounds}</Text>
      <Text>Number Was: {props.realNumber}</Text>
      <Button
        color={colors.primaryColor}
        title="NEW GAME"
        onPress={props.configNewGame}
      />
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
