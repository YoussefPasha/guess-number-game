import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
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
        Your phone needed{" "}
        <Text style={styles.colorfulText}>{props.NumOfRounds}</Text> rounds
      </BodyText>
      <BodyText style={styles.text}>
        to guess the number{" "}
        <Text style={styles.colorfulText}>{props.realNumber}</Text>
      </BodyText>
      <Button
        type="clear"
        titleStyle={{
          color: colors.primaryColor,
          fontSize: 20,
        }}
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
  colorfulText: {
    color: colors.accentColor,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default GameOver;
