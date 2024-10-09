import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const TextComponent = () => {
  // Hooks -> Je kan enkel maar gebruiken in een function component
  const { top, bottom, left, right } = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: top,
        paddingBottom: bottom,
        paddingLeft: left,
        paddingRight: right,
      }}>
      <Text style={{ color: "white" }}>TextComponent</Text>
      <StatusBar style="light" />
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
