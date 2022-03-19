import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginSceen";
import RegisterScreen from "../screens/RegisterScreen";
import SettingScreen from "../screens/SettingsScreen";
import ForgotScreen from "../screens/ForgotScreen";
import ChooseGameScreen from "../screens/ChooseGameScreen";
import GameScreen3 from "../screens/GameScreen3";
import AnimScreen from "../screens/AnimatedTest";
import RankingScreen from "../screens/RankingScreen";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Choose"
          component={ChooseGameScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game3"
          component={GameScreen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Anim"
          component={AnimScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ranking"
          component={RankingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
