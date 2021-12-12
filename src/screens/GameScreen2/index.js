import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { db, auth } from "../firebase";

const GameScreen2 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showTime, setShowTime] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [pressed1, setPressed1] = useState(true);

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
                    ? styles.SmallSquareDarkMode
                    : styles.SmallSquarePressed
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

      {/* <View style={styles.gridContainer}>
        <View style={darkMode ? styles.bigSquareDarkMode : styles.bigSquare}>
          <View style={darkMode ? styles.MediumRowDarkMode : styles.MediumRow}>
            <View
              style={
                darkMode ? styles.MediumSquareDarkMode : styles.MediumSquare
              }
            >
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
                <TouchableOpacity>
                  <View
                    style={
                      darkMode
                        ? styles.SmallSquareDarkMode
                        : pressed1
                        ? styles.SmallSquarePressed
                        : styles.SmallSquare
                    }
                  >
                    <Text>8</Text>
                  </View>
                </TouchableOpacity>

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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
            <View
              style={
                darkMode ? styles.MediumSquareDarkMode : styles.MediumSquare
              }
            >
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
            <View
              style={
                darkMode ? styles.MediumSquareDarkMode : styles.MediumSquare
              }
            >
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
          <View style={darkMode ? styles.MediumRowDarkMode : styles.MediumRow}>
            <View
              style={
                darkMode ? styles.MediumSquareDarkMode : styles.MediumSquare
              }
            >
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
            <View
              style={
                darkMode ? styles.MediumSquareDarkMode : styles.MediumSquare
              }
            >
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
            <View
              style={
                darkMode ? styles.MediumSquareDarkMode : styles.MediumSquare
              }
            >
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
          <View style={darkMode ? styles.MediumRowDarkMode : styles.MediumRow}>
            <View
              style={
                darkMode ? styles.MediumSquareDarkMode : styles.MediumSquare
              }
            >
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
            <View
              style={
                darkMode ? styles.MediumSquareDarkMode : styles.MediumSquare
              }
            >
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
            <View
              style={
                darkMode ? styles.MediumSquareDarkMode : styles.MediumSquare
              }
            >
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
              <View
                style={darkMode ? styles.SmallRowDarkMode : styles.SmallRow}
              >
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
      </View> */}
      <View style={styles.numberContainer}></View>
      <View style={styles.buttonsContainer}></View>

      <Text>Game is here</Text>
    </View>
  ) : (
    <View style={styles.containerDarkMode}></View>
  );
};

export default GameScreen2;
