import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Counter from "../components/Counter";
import CourseList from "../components/CourseList";
import { Button, Divider } from "react-native-paper";
import DarkModeView from "../components/DarkModeView";
import DarkModeContextProvider, {
  useDarkMode,
} from "../contexts/DarkModeContext";

const HomeScreen = () => {
  const { toggleDarkMode } = useDarkMode();

  return (
    <DarkModeView>
      <Counter />
      <Divider />
      <Button onPress={toggleDarkMode}>Toggle dark mode</Button>
      <CourseList />
    </DarkModeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
