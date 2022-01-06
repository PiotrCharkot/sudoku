import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const NoteFiled = (params) => {
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);
  const [text4, setText4] = useState(false);
  const [text5, setText5] = useState(false);
  const [text6, setText6] = useState(false);
  const [text7, setText7] = useState(false);
  const [text8, setText8] = useState(false);
  const [text9, setText9] = useState(false);

  const setText = () => {
    setText1(() => params.notes[params.position - 1].a);
    setText2(() => params.notes[params.position - 1].b);
    setText3(() => params.notes[params.position - 1].c);
    setText4(() => params.notes[params.position - 1].d);
    setText5(() => params.notes[params.position - 1].e);
    setText6(() => params.notes[params.position - 1].f);
    setText7(() => params.notes[params.position - 1].g);
    setText8(() => params.notes[params.position - 1].h);
    setText9(() => params.notes[params.position - 1].i);
  };

  useEffect(() => {
    setText();
  }, [params]);

  return (
    <View style={params.pressed ? styles.containerPressed : styles.container}>
      <View style={styles.row}>
        <Text style={text1 ? styles.text : styles.textHide}>1</Text>
        <Text style={text2 ? styles.text : styles.textHide}>2</Text>
        <Text style={text3 ? styles.text : styles.textHide}>3</Text>
      </View>
      <View style={styles.row}>
        <Text style={text4 ? styles.text : styles.textHide}>4</Text>
        <Text style={text5 ? styles.text : styles.textHide}>5</Text>
        <Text style={text6 ? styles.text : styles.textHide}>6</Text>
      </View>
      <View style={styles.row}>
        <Text style={text7 ? styles.text : styles.textHide}>7</Text>
        <Text style={text8 ? styles.text : styles.textHide}>8</Text>
        <Text style={text9 ? styles.text : styles.textHide}>9</Text>
      </View>
    </View>
  );
};

export default NoteFiled;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    borderColor: "black",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  containerPressed: {
    height: "100%",
    width: "100%",
    backgroundColor: "yellow",
    borderColor: "black",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "green",
    fontSize: 12,
    opacity: 0.4,
  },
  textHide: {
    fontSize: 12,
    opacity: 0,
  },
});
