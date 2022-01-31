import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const AnimatedTest = () => {
  const scale = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.stagger(1700, [
        Animated.timing(scale, {
          toValue: 1.5,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          transform: [{ scaleX: scale }, { scaleY: scale }],

          borderRadius: 50,
          borderColor: "white",
          borderWidth: 5,
          shadowColor: "white",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 8.68,
        }}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  circle: {
    width: 200,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 5,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 8.68,
  },
});

export default AnimatedTest;
