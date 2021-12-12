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
  });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [anonymousDarkMode, setAnonymousDarkMode] = useState("");
  const [anonymousShowTimer, setAnonymousShowTimer] = useState("");
  const [anonymousSoundOn, setAnonymousSoundOn] = useState("");

  const getDataFromFB = (doc) => {
    setAnonymousDarkMode(doc.data().darkMode);
    setAnonymousShowTimer(doc.data().showTimer);
    setAnonymousSoundOn(doc.data().soundOn);
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

  // console.log("user in registration", auth.currentUser);
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
                  fontFamily: "CaveatBold",
                  fontSize: 40,
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
