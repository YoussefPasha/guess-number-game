import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
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
        <Text style={styles.colorfulText}>{props.realNumber}</Text>.
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
    fontSize: 20,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  image: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    marginVertical: Dimensions.get("window").height / 30,
  },
  colorfulText: {
    color: colors.accentColor,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default GameOver;
