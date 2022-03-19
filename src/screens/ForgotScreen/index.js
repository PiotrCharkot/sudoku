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

const ForgotScreen = () => {
  const [loaded] = useFonts({
    CaveatBold: require("../../../assets/fonts/Caveat-Bold.ttf"),
    Caveat: require("../../../assets/fonts/SyneMono.ttf"),
  });
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  const sendEmail = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Please check your email...");
        navigation.replace("Home");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.textTop}>Enter your email to restore password.</Text>
      <View style={styles.formContainer}>
        <Input
          placeholder={"e-mail"}
          autoFocus
          type={"email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TouchableOpacity
          onPress={() => {
            sendEmail(email);
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
                Send email
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotScreen;
