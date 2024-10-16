import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      {/* TODO: Denk eens na hoe je er kan voor zorgen, dat ik mijn lijst elementen terug kan gebruiken om te navigeren naar het details scherm */}
      <Tab.Screen
        name="TabHomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="home" color={color} size={size} />
          ),
        }}
      />

      {/* TODO: Maken van een SettingsScreen en zet dit hier in de TabNavigator erbij */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
