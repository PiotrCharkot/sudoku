import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { CheckBox } from "react-native-elements";
import styles from "./styles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { db, auth } from "../firebase";

const SettingScreen = () => {
  const [loaded] = useFonts({
    CaveatBold: require("../../../assets/fonts/Caveat-Bold.ttf"),
    Caveat: require("../../../assets/fonts/SyneMono.ttf"),
  });

  const [darkMode, setDarkMode] = useState(false);
  const [showTime, setShowTime] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [showContent, setShowContent] = useState(false);

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

  const darkModeChange = () => {
    setDarkMode(!darkMode);
    console.log("darkomode is on:", darkMode);
  };

  const showTimeChange = () => {
    setShowTime(!showTime);
    console.log("showTime is on:", showTime);
  };

  const soundOnChange = () => {
    setSoundOn(!soundOn);
    console.log("soundOn is on:", soundOn);
  };

  const saveSettings = () => {
    console.log("darkomode is on:", darkMode);
    console.log("showTime is on:", showTime);
    console.log("soundOn is on:", soundOn);

    db.collection("usersData")
      .doc(auth.currentUser.uid)
      .update({
        darkMode: darkMode,
        showTimer: showTime,
        soundOn: soundOn,
      })
      .then(() => {
        console.log("settings  changed");
      })
      .catch((err) => console.log(err));
  };

  if (!loaded || !showContent) {
    return <View style={styles.container}></View>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        <Text
          style={{
            fontFamily: "Caveat",
            fontSize: 30,
            color: "black",
          }}
        >
          Dark mode
        </Text>

        <CheckBox
          checked={darkMode}
          onPress={() => {
            darkModeChange();
          }}
          style={styles.checkbox}
        />
      </View>
      <View style={styles.optionsContainer}>
        <Text
          style={{
            fontFamily: "Caveat",
            fontSize: 30,
            color: "black",
          }}
        >
          Show timer
        </Text>

        <CheckBox
          checked={showTime}
          onPress={() => {
            showTimeChange();
          }}
          style={styles.checkbox}
        />
      </View>
      <View style={styles.optionsContainer}>
        <Text
          style={{
            fontFamily: "Caveat",
            fontSize: 30,
            color: "black",
          }}
        >
          Sound on
        </Text>

        <CheckBox
          checked={soundOn}
          onPress={() => {
            soundOnChange();
          }}
          style={styles.checkbox}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => saveSettings()}>
          <View style={styles.playButton}>
            <ImageBackground
              source={require("../../../assets/buttonBackground.png")}
              style={styles.buttonImg}
              imageStyle={{ borderRadius: 10 }}
              resizeMode="cover"
            >
              <Text
                style={{
                  fontFamily: "Caveat",
                  fontSize: 25,
                  color: "#003645",
                }}
              >
                Save Settings
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;
