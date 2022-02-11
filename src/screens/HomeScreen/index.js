import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { db, auth } from "../firebase";

const HomeScreen = () => {
  const [loaded] = useFonts({
    CaveatBold: require("../../../assets/fonts/Caveat-Bold.ttf"),
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
                  // numberOfGames: 0,
                  // numberOfFinishedGames: 0,
                  // bestTime: 0,
                  // totalTime: 0,
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
                    fontFamily: "CaveatBold",
                    fontSize: 40,
                    color: "#003645",
                  }}
                >
                  <Text> </Text> Play <Text> </Text>
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
                      fontFamily: "CaveatBold",
                      fontSize: 40,
                      color: "#003645",
                    }}
                  >
                    <Text> </Text> Log out<Text> </Text>
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
                      fontFamily: "CaveatBold",
                      fontSize: 40,
                      color: "#003645",
                    }}
                  >
                    <Text> </Text> Log in<Text> </Text>
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <View style={styles.playButton}>
              <ImageBackground
                source={require("../../../assets/buttonBackground.png")}
                style={styles.buttonImg}
                imageStyle={{ borderRadius: 10 }}
                resizeMode="cover"
              >
                <Text
                  style={{
                    fontFamily: "CaveatBold",
                    fontSize: 40,
                    color: "#003645",
                  }}
                >
                  <Text> </Text> Top Scores<Text> </Text>
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
                    fontFamily: "CaveatBold",
                    fontSize: 40,
                    color: "#003645",
                  }}
                >
                  <Text> </Text> Settings<Text> </Text>
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
