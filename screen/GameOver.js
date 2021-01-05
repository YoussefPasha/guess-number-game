import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import BodyText from "../components/BodyText";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText style={styles.title}> Game Is Over! </BodyText>
      <Image
        source={require("../assets/success.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <BodyText style={styles.text}>
        Number Of Rounds: {props.NumOfRounds}
      </BodyText>
      <BodyText style={styles.text}>Number Was: {props.realNumber}</BodyText>
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
    fontFamily: "open-sans",
  },
  text: {
    fontWeight: "bold",
    fontSize: 19,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginVertical: 30,
  },
});

export default GameOver;
