import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Counter from "../components/Counter";
import CourseList from "../components/CourseList";
import { Divider } from "react-native-paper";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Counter />
      <Divider />
      <CourseList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
