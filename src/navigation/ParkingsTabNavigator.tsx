import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ParkingsScreen from "../screens/ParkingsScreen";
import ParkingsMapScreen from "../screens/ParkingsMapScreen";
import AddCourseScreen from "../screens/AddCourseScreen";

const ParkingsTab = createBottomTabNavigator();

const ParkingsTabNavigator = () => {
  return (
    <ParkingsTab.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "SourGummy" },
        tabBarLabelStyle: { fontFamily: "SourGummy" },
      }}>
      <ParkingsTab.Screen name="ParkingsList" component={ParkingsScreen} />
      <ParkingsTab.Screen name="ParkingsMap" component={ParkingsMapScreen} />
      <ParkingsTab.Screen name="AddCourseScreen" component={AddCourseScreen} />
    </ParkingsTab.Navigator>
  );
};

export default ParkingsTabNavigator;

const styles = StyleSheet.create({});
