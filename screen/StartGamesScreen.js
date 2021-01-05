import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import colors from "../constants/colors";

const StartGamesScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNum, setSelectedNum] = useState();
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNum = parseInt(enteredValue);
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert(
        "invalid number!",
        "Number has to be a number between 1 to 99.",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNum(chosenNum);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText style={styles.title}>You Selected</BodyText>
        <View>
          <NumberContainer>{selectedNum}</NumberContainer>
          <Button
            type="clear"
            title="START GAME"
            onPress={() => props.onStartGame(selectedNum)}
            titleStyle={{ color: colors.primaryColor }}
          />
        </View>
      </Card>
    );
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.screen}>
          <BodyText style={styles.title}>Start A New Game!</BodyText>
          <Card style={styles.inputContainer}>
            <BodyText style={styles.text}>Select a Number!</BodyText>
            <Input
              style={styles.input}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={numberInputHandler}
              value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Reset"
                  type="clear"
                  onPress={resetInputHandler}
                  titleStyle={{ color: colors.accentColor, fontSize: 20 }}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Confirm"
                  type="clear"
                  onPress={confirmInputHandler}
                  titleStyle={{ color: colors.primaryColor, fontSize: 20 }}
                />
              </View>
            </View>
          </Card>
          {confirmedOutput}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: "open-sans",
  },
  title: {
    fontSize: 20,
    marginVertical: 30,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: Dimensions.get("window").width / 3,
    fontFamily: "open-sans",
  },
  input: {
    width: 50,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "900",
    fontFamily: "open-sans",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
    fontFamily: "open-sans",
  },
  text: {
    fontFamily: "open-sans",
    fontWeight: "900",
    fontSize: 19,
  },
});

export default StartGamesScreen;
