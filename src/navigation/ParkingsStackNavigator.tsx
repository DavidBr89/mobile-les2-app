import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ParkingsScreen from "../screens/ParkingsScreen";
import ParkingWebScreen from "../screens/ParkingWebScreen";
import { ParkingsStackParamsList } from "./types";

const ParkingsStack = createStackNavigator<ParkingsStackParamsList>();

const ParkingsStackNavigator = () => {
  return (
    <ParkingsStack.Navigator>
      <ParkingsStack.Screen name="parkings" component={ParkingsScreen} />
      <ParkingsStack.Screen name="parkingsweb" component={ParkingWebScreen} />
    </ParkingsStack.Navigator>
  );
};

export default ParkingsStackNavigator;

const styles = StyleSheet.create({});
