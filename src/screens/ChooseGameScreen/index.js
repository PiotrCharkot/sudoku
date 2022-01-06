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

const ChooseGameScreen = () => {
  const [loaded] = useFonts({
    CaveatBold: require("../../../assets/fonts/Caveat-Bold.ttf"),
  });

  const [loged, setLoged] = useState(false);

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
          <TouchableOpacity onPress={() => navigation.replace("Game")}>
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
                  <Text> </Text> Easy <Text> </Text>
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.replace("Game2")}>
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
                  <Text> </Text> Medium<Text> </Text>
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.replace("Game3")}>
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
                  <Text> </Text> Hard<Text> </Text>
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Game")}>
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
                  <Text> </Text> Pro<Text> </Text>
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ChooseGameScreen;
