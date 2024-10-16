import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import MyText from "./MyText";
import { Button } from "react-native-paper";

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
      {/* Gebruik makend van Nativewind (Tailwind) om te stylen */}
      <Text className="text-white text-6xl font-thin">Tailwind Text</Text>

      <MyText>Home Scherm</MyText>
      <MyText>Eigen tekst</MyText>

      <MyText
        onPress={() => {
          console.log("Geklikt op de tekst!");
        }}
        style={{ color: "yellow" }}>
        Nog een extra tekst
      </MyText>

      <Button
        mode="contained"
        onPress={() => {
          console.log("Geklikt op de Paper button");
        }}>
        Klik mij
      </Button>

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
