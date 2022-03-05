import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NoteFiled from "../NoteField";

const NumField = (params) => {
  const darkMode = params.darkMode;
  const pressed = params.pressed;
  const fixed = params.fixed;
  const value = params.value;
  const position = params.position;
  const pressedSquare = params.pressedSquare;

  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    setRerender(() => {
      return !rerender;
    });
  }, [params]);

  return (
    <View
      style={
        darkMode
          ? pressed
            ? styles.SmallSquarePressedDarkMode
            : styles.SmallSquareDarkMode
          : pressed
          ? styles.SmallSquarePressed
          : styles.SmallSquare
      }
    >
      <View style={styles.opacityStyle}>
        <Text style={fixed ? styles.valueStyleFixed : styles.valueStyle}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default NumField;

const styles = StyleSheet.create({
  SmallSquare: {
    height: "100%",
    width: "100%",
    borderColor: "#00A4C5",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  SmallSquareDarkMode: {
    height: "100%",
    width: "100%",
    borderColor: "#00A4C5",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  SmallSquarePressed: {
    height: "100%",
    width: "100%",
    borderColor: "#003645",
    backgroundColor: "yellow",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  SmallSquarePressedDarkMode: {
    height: "100%",
    width: "100%",
    borderColor: "#003645",
    backgroundColor: "lightblue",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  opacityStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  valueStyle: {
    color: "transparent",
  },
  valueStyleFixed: {
    color: "brown",
    fontSize: 20,
  },
});
