import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import React from "react";

const StartGamesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start A New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number!</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              onPress={() => {}}
              color={Colors.accentColor}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              onPress={() => {}}
              color={Colors.primaryColor}
            />
          </View>
        </View>
      </Card>
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
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
});

export default StartGamesScreen;
