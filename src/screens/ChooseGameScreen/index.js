import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated
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
  const slide = useRef(new Animated.Value(-400)).current
  const slide1 = useRef(new Animated.Value(-400)).current
  const slide2 = useRef(new Animated.Value(-400)).current
  const slide3 = useRef(new Animated.Value(-400)).current

  const navigation = useNavigation();

  useEffect(() => {
    Animated.spring(slide, {
      toValue: 0,
      useNativeDriver: true,
      friction: 3,
      delay:200
    }).start()

    Animated.spring(slide1, {
      toValue: 0,
      useNativeDriver: true,
      friction: 3,
      delay:250
    }).start()

    Animated.spring(slide2, {
      toValue: 0,
      useNativeDriver: true,
      friction: 3,
      delay:300
    }).start()

    Animated.spring(slide3, {
      toValue: 0,
      useNativeDriver: true,
      friction: 3,
      delay:350
    }).start()
  }, [])

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
            <Animated.View style={[styles.playButton, {transform: [{ translateX: slide }]}]}>
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
                  Easy
                </Text>
              </ImageBackground>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.replace("Game3", {
                gameType: "Medium",
              })
            }
          >
            <Animated.View style={[styles.playButton, {transform: [{ translateX: slide1 }]}]}>
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
                  Medium
                </Text>
              </ImageBackground>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.replace("Game3", {
                gameType: "Hard",
              })
            }
          >
            <Animated.View style={[styles.playButton, {transform: [{ translateX: slide2 }]}]}>
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
                  Hard
                </Text>
              </ImageBackground>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Game3", {
                gameType: "Pro",
              })
            }
          >
            <Animated.View style={[styles.playButton, {transform: [{ translateX: slide3 }]}]}>
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
                  Pro
                </Text>
              </ImageBackground>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ChooseGameScreen;
