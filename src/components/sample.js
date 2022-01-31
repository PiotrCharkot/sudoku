import React, { useRef, useEffect } from "react";
import { View, Text, Animated, Easing } from "react-native";

const AnimScreen = () => {
  const opacity1 = useRef(new Animated.Value(0)).current;
  const opacity2 = useRef(new Animated.Value(0)).current;
  const opacity3 = useRef(new Animated.Value(0)).current;
  const radius1 = useRef(new Animated.Value(0)).current;
  const radius2 = useRef(new Animated.Value(0)).current;
  const radius3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(125, [
      Animated.timing(opacity1, {
        delay: 1000,
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(opacity2, {
        delay: 1000,
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(opacity3, {
        delay: 1000,
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(radius1, {
        delay: 1000,
        toValue: 50,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
       c
      ></Animated.View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "yellow",
          marginBottom: 10,
          opacity: opacity2,
          borderRadius: radius1,
        }}
      ></Animated.View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "yellow",
          marginBottom: 10,
          opacity: opacity3,
          borderRadius: radius1,
        }}
      ></Animated.View>
    </View>
  );
};

export default AnimScreen;

import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const AnimatedTest = () => {
  const opacity1 = useRef(new Animated.Value(1)).current;
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          useNativeDriver: true,
          toValue: { x: 0, y: 0 },
        }).start();
      },
    })
  ).current;
  Animated.timing(opacity1, {
    useNativeDriver: true,
    toValue: pan.x.interpolate({
      inputRange: [0, 500],
      outputRange: [1, 0],
    }),
  }).start();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag & Release this box!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
          opacity: opacity1,
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});

export default AnimatedTest;



<TouchableOpacity
                  style={styles.opacityStyle}
                  onPress={() => pressedSquare(5)}
                >
                  {fixed5 ? (
                    <NumField
                      darkMode={darkMode}
                      pressed={pressed5}
                      fixed={fixed5}
                      value={value5}
                      position={5}
                      notes={notes}
                    />
                  ) : (
                    <NoteFiled position={5} notes={notes} pressed={pressed5} />
                  )}
                </TouchableOpacity>
                