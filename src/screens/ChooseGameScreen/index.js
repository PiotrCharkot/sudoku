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
    Caveat: require("../../../assets/fonts/SyneMono.ttf"),
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
          <TouchableOpacity
            onPress={() =>
              navigation.replace("Game3", {
                gameType: "Easy",
              })
            }
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
                    fontSize: 30,
                    color: "#003645",
                  }}
                >
                  Easy
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.replace("Game3", {
                gameType: "Medium",
              })
            }
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
                    fontSize: 30,
                    color: "#003645",
                  }}
                >
                  Medium
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.replace("Game3", {
                gameType: "Hard",
              })
            }
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
                    fontSize: 30,
                    color: "#003645",
                  }}
                >
                  Hard
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Game3", {
                gameType: "Pro",
              })
            }
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
                    fontSize: 30,
                    color: "#003645",
                  }}
                >
                  Pro
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
