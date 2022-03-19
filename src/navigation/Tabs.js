import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStickyNote, faChartBar } from "@fortawesome/free-solid-svg-icons";
import RankEasyScreen from "../screens/RankEasyScreen";
import RankMediumScreen from "../screens/RankMediumScreen";
import RankHardScreen from "../screens/RankHardScreen";
import RankProScreen from "../screens/RankProScreen";
import { View, Text, StyleSheet, Platform } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#003645",
          borderTopColor: "#003645",
          height: Platform.OS === 'ios' ? 80 : 60,
        },
        tabBarShowLabel: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#003645",
        },
        headerTitleStyle: {
          color: "green",
          fontSize: 22,
          fontWeight: "bold",
          
        },
      }}
    >
      <Tab.Screen
        name="Easy"
        component={RankEasyScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.iconWrapper}>
                <FontAwesomeIcon
                  color={focused ? "green" : "grey"}
                  icon={faChartBar}
                  size={25}
                />
                <Text style={{ color: focused ? "green" : "grey", top: 3 }}>
                  Easy
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Medium"
        component={RankMediumScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.iconWrapper}>
                <FontAwesomeIcon
                  color={focused ? "green" : "grey"}
                  icon={faChartBar}
                  size={25}
                />
                <Text style={{ color: focused ? "green" : "grey", top: 3 }}>
                  Medium
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Hard"
        component={RankHardScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.iconWrapper}>
                <FontAwesomeIcon
                  color={focused ? "green" : "grey"}
                  icon={faChartBar}
                  size={25}
                />
                <Text style={{ color: focused ? "green" : "grey", top: 3 }}>
                  Hard
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Pro"
        component={RankProScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.iconWrapper}>
                <FontAwesomeIcon
                  color={focused ? "green" : "grey"}
                  icon={faChartBar}
                  size={25}
                />
                <Text style={{ color: focused ? "green" : "grey", top: 3 }}>
                  Pro
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  iconWrapper: {
    height: "100%",
    width: "100%",
    alignItems: 'center',
    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-start',
    top: 8,
  },
});
