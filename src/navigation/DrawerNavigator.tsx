import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#2d3e4a" },
        headerTintColor: "white",
        drawerStyle: { backgroundColor: "#2d3e4a" },
        drawerActiveTintColor: "white",
      }}>
      <Drawer.Screen
        component={SettingsScreen}
        name="DrawerSettings"
        options={{
          title: "Instellingen",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
