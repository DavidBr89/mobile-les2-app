import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import StackNavigator from "./StackNavigator";
import SettingsScreen from "../screens/SettingsScreen";
import DrawerNavigator from "./DrawerNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      // Opties die voor alle schermen die hieronder staan gaan gelden
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#2d3e4a" },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#aaa",
      }}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="TabHomeScreen"
          component={StackNavigator}
          // Opties die enkel voor dit scherm gelden
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcon name="home" color={color} size={size} />
            ),
            // headerShown: false,
          }}
        />
      </Tab.Group>

      <Tab.Screen
        name="SettingsScreen"
        component={DrawerNavigator}
        options={{
          title: "Instellingen",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
