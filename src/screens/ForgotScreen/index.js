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
      <View style={styles.formContainer}>
        <Input
          placeholder={"E-post"}
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
                  fontFamily: "CaveatBold",
                  fontSize: 40,
                  color: "#003645",
                }}
              >
                <Text> </Text>Send email<Text> </Text>
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotScreen;
