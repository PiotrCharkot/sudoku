import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Timer = (params) => {
  return (
    <View>
      <Text
        style={
          params.gameWon
            ? styles.textEnd
            : params.darkMode
            ? styles.textDarkMode
            : styles.text
        }
      >
        {params.time.hour < 10 ? "0" + params.time.hour : params.time.hour}:
        {params.time.minute < 10
          ? "0" + params.time.minute
          : params.time.minute}
        :
        {params.time.second < 10
          ? "0" + params.time.second
          : params.time.second}
      </Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  text: {},
  textEnd: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textDarkMode: {
    color: "white",
  },
});
