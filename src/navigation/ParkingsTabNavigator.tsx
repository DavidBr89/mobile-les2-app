import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ParkingsScreen from "../screens/ParkingsScreen";
import ParkingsMapScreen from "../screens/ParkingsMapScreen";

const ParkingsTab = createBottomTabNavigator();

const ParkingsTabNavigator = () => {
  return (
    <ParkingsTab.Navigator>
      <ParkingsTab.Screen name="ParkingsList" component={ParkingsScreen} />
      <ParkingsTab.Screen name="ParkingsMap" component={ParkingsMapScreen} />
    </ParkingsTab.Navigator>
  );
};

export default ParkingsTabNavigator;

const styles = StyleSheet.create({});
