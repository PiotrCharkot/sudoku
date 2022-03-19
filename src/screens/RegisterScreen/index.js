import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db, auth } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const RegisterScreen = () => {
  const [loaded] = useFonts({
    CaveatBold: require("../../../assets/fonts/Caveat-Bold.ttf"),
    Caveat: require("../../../assets/fonts/SyneMono.ttf"),
  });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [anonymousDarkMode, setAnonymousDarkMode] = useState("");
  const [anonymousShowTimer, setAnonymousShowTimer] = useState("");
  const [anonymousSoundOn, setAnonymousSoundOn] = useState("");

  const [anonymousBestTimeM, setAnonymousBestTimeM] = useState(0);
  const [anonymousNumberOfGamesM, setAnonymousNumberOfGamesM] = useState(0);
  const [anonymousFinishedGamesM, setAnonymousFinishedGamesM] = useState(0);
  const [anonymousTotalTimeM, setAnonymousTotalTimeM] = useState(0);

  const [anonymousBestTime, setAnonymousBestTime] = useState(0);
  const [anonymousNumberOfGames, setAnonymousNumberOfGames] = useState(0);
  const [anonymousFinishedGames, setAnonymousFinishedGames] = useState(0);
  const [anonymousTotalTime, setAnonymousTotalTime] = useState(0);

  const [anonymousBestTimeH, setAnonymousBestTimeH] = useState(0);
  const [anonymousNumberOfGamesH, setAnonymousNumberOfGamesH] = useState(0);
  const [anonymousFinishedGamesH, setAnonymousFinishedGamesH] = useState(0);
  const [anonymousTotalTimeH, setAnonymousTotalTimeH] = useState(0);

  const [anonymousBestTimeP, setAnonymousBestTimeP] = useState(0);
  const [anonymousNumberOfGamesP, setAnonymousNumberOfGamesP] = useState(0);
  const [anonymousFinishedGamesP, setAnonymousFinishedGamesP] = useState(0);
  const [anonymousTotalTimeP, setAnonymousTotalTimeP] = useState(0);

  const getDataFromFB = (doc) => {
    setAnonymousDarkMode(doc.data().darkMode);
    setAnonymousShowTimer(doc.data().showTimer);
    setAnonymousSoundOn(doc.data().soundOn);

    setAnonymousBestTime(doc.data().bestTime);
    setAnonymousNumberOfGames(doc.data().numberOfGames);
    setAnonymousFinishedGames(doc.data().numberOfFinishedGames);
    setAnonymousTotalTime(doc.data().totalTime);

    setAnonymousBestTimeM(doc.data().bestTimeM);
    setAnonymousNumberOfGamesM(doc.data().numberOfGamesM);
    setAnonymousFinishedGamesM(doc.data().numberOfFinishedGamesM);
    setAnonymousTotalTimeM(doc.data().totalTimeM);

    setAnonymousBestTimeH(doc.data().bestTimeH);
    setAnonymousNumberOfGamesH(doc.data().numberOfGamesH);
    setAnonymousFinishedGamesH(doc.data().numberOfFinishedGamesH);
    setAnonymousTotalTimeH(doc.data().totalTimeH);

    setAnonymousBestTimeP(doc.data().bestTimeP);
    setAnonymousNumberOfGamesP(doc.data().numberOfGamesP);
    setAnonymousFinishedGamesP(doc.data().numberOfFinishedGamesP);
    setAnonymousTotalTimeP(doc.data().totalTimeP);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("authUser in reg: ", authUser);
      db.collection("usersData")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id === auth.currentUser.uid) {
              getDataFromFB(doc);
            }
          });
        });
    });
    return unsubscribe;
  }, []);

  const navigation = useNavigation();

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user
          .updateProfile({
            displayName: username,
          })
          .then(
            db.collection("usersData").doc(auth.currentUser.uid).set({
              darkMode: anonymousDarkMode,
              showTimer: anonymousShowTimer,
              soundOn: anonymousSoundOn,
              bestTime: anonymousBestTime,
              numberOfFinishedGames: anonymousFinishedGames,
              numberOfGames: anonymousNumberOfGames,
              totalTime: anonymousTotalTime,

              bestTimeM: anonymousBestTimeM,
              numberOfFinishedGamesM: anonymousFinishedGamesM,
              numberOfGamesM: anonymousNumberOfGamesM,
              totalTimeM: anonymousTotalTimeM,

              bestTimeH: anonymousBestTimeH,
              numberOfFinishedGamesH: anonymousFinishedGamesH,
              numberOfGamesH: anonymousNumberOfGamesH,
              totalTimeH: anonymousTotalTimeH,

              bestTimeP: anonymousBestTimeP,
              numberOfFinishedGamesP: anonymousFinishedGamesP,
              numberOfGamesP: anonymousNumberOfGamesP,
              totalTimeP: anonymousTotalTimeP,
            })
          )
          .catch((error) => alert(error.message));

        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const registerAnonymous = () => {
    auth
      .createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: username,
        photoURL: null,
        uid: anonymousID,
      })
      .then((authUser) => {
        console.log("AA", anonymousID);
        authUser.user.updateProfile({
          uid: anonymousID,
        });
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.formContainer}>
        <Input
          placeholder={"Username"}
          autoFocus
          type={"text"}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          placeholder={"E-post"}
          type={"email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder={"Passord"}
          secureTextEntry
          type={"password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          onPress={() => {
            register();
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
                <Text> </Text>Register<Text> </Text>
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
