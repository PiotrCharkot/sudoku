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
import { auth } from "../firebase";

const LoginScreen = () => {
  const [loaded] = useFonts({
    CaveatBold: require("../../../assets/fonts/Caveat-Bold.ttf"),
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("is this that object??", user);

        navigation.replace("Home");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.formContainer}>
        <Input
          placeholder={"E-post"}
          autoFocus
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
            signIn();
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
                <Text> </Text>Log in<Text> </Text>
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.containerDown}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.textTouchable}
        >
          <Text>
            Don't have an account?{" "}
            <Text style={styles.textDown}> Register here </Text>{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Forgot")}
          style={styles.textTouchable}
        >
          <Text>
            Forgot password? <Text style={styles.textDown}> Click here </Text>{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
