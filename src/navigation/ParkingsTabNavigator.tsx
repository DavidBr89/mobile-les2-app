import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ParkingsScreen from "../screens/ParkingsScreen";
import ParkingsMapScreen from "../screens/ParkingsMapScreen";
import AddCourseScreen from "../screens/AddCourseScreen";
import DrawerNavigator from "./DrawerNavigator";
import ParkingsStackNavigator from "./ParkingsStackNavigator";
import FavoritesScreen from "../screens/FavoritesScreen";

const ParkingsTab = createBottomTabNavigator();

const ParkingsTabNavigator = () => {
  return (
    <ParkingsTab.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "SourGummy" },
        tabBarLabelStyle: { fontFamily: "SourGummy" },
      }}>
      <ParkingsTab.Screen
        options={{ headerShown: false }}
        name="ParkingsList"
        component={ParkingsStackNavigator}
      />
      <ParkingsTab.Screen name="ParkingsMap" component={ParkingsMapScreen} />
      <ParkingsTab.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <ParkingsTab.Screen name="AddCourseScreen" component={AddCourseScreen} />
      <ParkingsTab.Screen
        options={{
          headerShown: false,
        }}
        name="NativeDrawer"
        component={DrawerNavigator}
      />
    </ParkingsTab.Navigator>
  );
};

export default ParkingsTabNavigator;

const styles = StyleSheet.create({});
