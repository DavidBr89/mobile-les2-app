import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { useNavigation } from "@react-navigation/native";
import AddCourseScreen from "../screens/AddCourseScreen";

// Stap 1: Een nieuwe instantie krijgen van een stackNavigator
const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#2d3e4a" },
        headerTintColor: "white",
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Vakken",
          headerRight: ({ tintColor }) => (
            <TouchableOpacity
              style={{ marginRight: 8 }}
              onPress={() => {
                navigation.navigate("AddCourseScreen");
              }}>
              <MaterialIcon name="plus" color={tintColor} size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={({ route: { params } }) => ({ title: params.course.name })}
      />
      <Stack.Screen name="AddCourseScreen" component={AddCourseScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
