import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { db, auth } from "../firebase";

const HomeScreen = () => {
  const [loaded] = useFonts({
    CaveatBold: require("../../../assets/fonts/Caveat-Bold.ttf"),
    Caveat: require("../../../assets/fonts/SyneMono.ttf"),
  });

  const [loged, setLoged] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser && !authUser.isAnonymous) {
        setLoged(true);
        console.log("auth current:", auth.currentUser);
      } else if (authUser && authUser.isAnonymous) {
        auth.signInAnonymously();

        console.log("current user:", auth);
      } else {
        auth
          .signInAnonymously()
          .then((authUser) => {
            authUser.user
              .updateProfile({
                displayName: "",
              })
              .then(
                db.collection("usersData").doc(auth.currentUser.uid).set({
                  darkMode: false,
                  showTimer: true,
                  soundOn: true,
                  bestTime: 0,
                  numberOfFinishedGames: 0,
                  numberOfGames: 0,
                  totalTime: 0,
                  bestTimeM: 0,
                  numberOfFinishedGamesM: 0,
                  numberOfGamesM: 0,
                  totalTimeM: 0,
                  bestTimeH: 0,
                  numberOfFinishedGamesH: 0,
                  numberOfGamesH: 0,
                  totalTimeH: 0,
                  bestTimeP: 0,
                  numberOfFinishedGamesP: 0,
                  numberOfGamesP: 0,
                  totalTimeP: 0,
                })
              )
              .catch((error) => alert(error.message));
          })
          .catch((error) => alert(error.message));
      }
    });
    return unsubscribe;
  }, []);

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Home");
      })
      .catch(() => {
        console.log("Could not log out!");
      });
  };

  const navigation = useNavigation();

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/gadientBlue-Blue.png")}
        resizeMode="cover"
        style={styles.backgroundImg}
      >
        <View style={styles.logoContainer}>
          <Image source={require("../../../assets/LogoSudokuSmall.png")} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Choose")}>
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
                    fontSize: Platform.OS === 'ios' ? 30 : 23,
                    color: "#003645",
                  }}
                >
                  Play
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          {loged ? (
            <TouchableOpacity
              onPress={() => {
                signOut();
              }}
            >
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
                      fontSize: Platform.OS === 'ios' ? 30 : 23,
                      color: "#003645",
                    }}
                  >
                    Log out
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
                      fontSize: Platform.OS === 'ios' ? 30 : 23,
                      color: "#003645",
                    }}
                  >
                    Log in
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => navigation.navigate("Ranking")}>
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
                    fontSize: Platform.OS === 'ios' ? 30 : 23,
                    color: "#003645",
                  }}
                >
                  Results
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
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
                    fontSize: Platform.OS === 'ios' ? 30 : 23,
                    color: "#003645",
                  }}
                >
                  Settings
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
