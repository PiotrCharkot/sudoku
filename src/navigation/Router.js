import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginSceen";
import RegisterScreen from "../screens/RegisterScreen";
import SettingScreen from "../screens/SettingsScreen";
import ForgotScreen from "../screens/ForgotScreen";
import ChooseGameScreen from "../screens/ChooseGameScreen";
import GameScreen from "../screens/GameScreen";
import GameScreen2 from "../screens/GameScreen2";
import { View, Text } from "react-native";

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
          name="Game"
          component={GameScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game2"
          component={GameScreen2}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
