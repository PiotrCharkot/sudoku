import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { db, auth } from "../firebase";
import NoteFiled from "../../components/NoteField";
import NumField from "../../components/NumField";

const GameScreen2 = () => {
  const urlLink = "https://knotty-alpine-puppy.glitch.me/gridData";
  const [darkMode, setDarkMode] = useState(false);
  const [showTime, setShowTime] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [notesOn, setNotesOn] = useState(true);
  const [dummy, setDummy] = useState(false);
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);
  const [pressed4, setPressed4] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [fixed1, setFixed1] = useState(false);
  const [fixed2, setFixed2] = useState(true);
  const [fixed3, setFixed3] = useState(false);
  const [fixed4, setFixed4] = useState(false);
  const [choosenNum, setChoosenNum] = useState("A");
  const [notes, setNotes] = useState([
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
  ]);
  const arrOfChoice = [pressed1, pressed2, pressed3, pressed4];
  const arrOfChoice1 = [setPressed1, setPressed2, setPressed3, setPressed4];
  const arrOFValues = [value1, value2, value3, value4];
  const arrOfFixed = [setFixed1, setFixed2, setFixed3, setFixed4];
  const arrOfFixed1 = [fixed1, fixed2, fixed3, fixed4];

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(urlLink);
      const res = await result.json();
      console.log(res);

      setValue1(res.row1[0]);
      setValue2(res.row1[1]);
      setValue3(res.row1[2]);
      setValue4(res.row1[3]);
    };

    fetchData();
    return () => {
      fetchData;
    };
  }, []);

  const pressedSquare = (ind) => {
    console.log("noootes", notes);
    arrOfChoice1.forEach((el) => el(false));
    if (!arrOfFixed1[ind - 1]) {
      arrOfChoice1[ind - 1](!arrOfChoice[ind - 1]);
      if (!arrOfChoice[ind - 1]) {
        setChoosenNum(ind);
      } else {
        setChoosenNum("A");
      }
    } else {
      setChoosenNum("A");
    }
  };

  const updateNotes = (num) => {
    if (choosenNum > 0) {
      if (num === 1) {
        notes[choosenNum - 1].a = !notes[choosenNum - 1].a;
      } else if (num === 2) {
        notes[choosenNum - 1].b = !notes[choosenNum - 1].b;
      } else if (num === 3) {
        notes[choosenNum - 1].c = !notes[choosenNum - 1].c;
      }
      setNotes(() => {
        return notes;
      });
      setDummy(() => {
        return !dummy;
      });
    }
  };

  const chooseNumber = (num) => {
    if (notesOn) {
      updateNotes(num);
    } else if (arrOFValues[choosenNum - 1] === num.toString()) {
      arrOfFixed[choosenNum - 1](true);
      arrOfChoice1[choosenNum - 1](false);
      setChoosenNum("A");
    }

    console.log(
      "square: ",
      choosenNum,
      "value in square: ",
      arrOFValues[choosenNum - 1],
      "number passed in params: ",
      num
    );
  };

  const getDataFromFB = (doc) => {
    setDarkMode(doc.data().darkMode);
    setShowTime(doc.data().showTimer);
    setSoundOn(doc.data().soundOn);
    setShowContent(true);
  };

  useEffect(() => {
    db.collection("usersData")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.id === auth.currentUser.uid) {
            getDataFromFB(doc);
          }
        });
      });
  }, []);

  return showContent ? (
    <View style={darkMode ? styles.containerDarkMode : styles.container}>
      <View style={styles.topContainer}></View>

      <View style={styles.gridContainer}>
        <View style={styles.bigRow}>
          <View style={darkMode ? styles.bigSquareDarkMode : styles.bigSquare}>
            <View style={styles.row}>
              <View
                style={
                  darkMode
                    ? pressed1
                      ? styles.SmallSquarePressedDarkMode
                      : styles.SmallSquareDarkMode
                    : pressed1
                    ? styles.SmallSquarePressed
                    : styles.SmallSquare
                }
              >
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(1)}
                >
                  {fixed1 ? (
                    <Text
                      style={
                        fixed1 ? styles.valueStyleFixed : styles.valueStyle
                      }
                    >
                      {value1}
                    </Text>
                  ) : (
                    <NoteFiled notes={notes} position={1} />
                  )}
                </TouchableOpacity>
              </View>
              <View
                style={
                  darkMode
                    ? pressed2
                      ? styles.SmallSquarePressedDarkMode
                      : styles.SmallSquareDarkMode
                    : pressed2
                    ? styles.SmallSquarePressed
                    : styles.SmallSquare
                }
              >
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(2)}
                >
                  <Text
                    style={fixed2 ? styles.valueStyleFixed : styles.valueStyle}
                  >
                    {value2}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={
                  darkMode
                    ? pressed3
                      ? styles.SmallSquarePressedDarkMode
                      : styles.SmallSquareDarkMode
                    : pressed3
                    ? styles.SmallSquarePressed
                    : styles.SmallSquare
                }
              >
                <TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(3)}
                >
                  <Text
                    style={fixed3 ? styles.valueStyleFixed : styles.valueStyle}
                  >
                    {value3}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <NumField
                darkMode={darkMode}
                pressed={pressed4}
                fixed={fixed4}
                value={value4}
                position={4}
                notes={notes}
                //pressedSquare={pressedSquare(4)}
              />
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
            </View>
            <View style={styles.row}>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
            </View>
          </View>
          <View style={darkMode ? styles.bigSquareDarkMode : styles.bigSquare}>
            <View style={styles.row}>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
            </View>
            <View style={styles.row}>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
            </View>
            <View style={styles.row}>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
            </View>
          </View>
          <View style={darkMode ? styles.bigSquareDarkMode : styles.bigSquare}>
            <View style={styles.row}>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
            </View>
            <View style={styles.row}>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
            </View>
            <View style={styles.row}>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
              <View
                style={
                  darkMode ? styles.SmallSquareDarkMode : styles.SmallSquare
                }
              ></View>
            </View>
          </View>
        </View>
      </View>

      <View
        style={
          darkMode ? styles.numberContainerDarkMode : styles.numberContainer
        }
      >
        <TouchableOpacity
          onPress={() => {
            chooseNumber(1);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(2);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(3);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(4);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(5);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(6);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>6</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(7);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>7</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(8);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>8</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            chooseNumber(9);
          }}
        >
          <View style={styles.valueOpacity}>
            <Text style={styles.valueChoice}>9</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}></View>
    </View>
  ) : (
    <View style={styles.containerDarkMode}></View>
  );
};

export default GameScreen2;
