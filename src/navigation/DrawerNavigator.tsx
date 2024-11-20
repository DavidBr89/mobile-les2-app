import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "../screens/SettingsScreen";
import AboutScreen from "../screens/AboutScreen";
import CameraScreen from "../screens/CameraScreen";
import LocationScreen from "../screens/LocationScreen";
import PhotosScreen from "../screens/PhotosScreen";
import ContactsScreen from "../screens/ContactsScreen";

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
      <Drawer.Screen
        component={AboutScreen}
        name="AboutScreen"
        options={{
          title: "About",
        }}
      />
      <Drawer.Screen component={CameraScreen} name="Camera" />
      <Drawer.Screen component={LocationScreen} name="Locatie" />
      <Drawer.Screen component={PhotosScreen} name="Foto's" />
      <Drawer.Screen component={ContactsScreen} name="Contacten" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
