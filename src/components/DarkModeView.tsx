import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

const DarkModeView = (props: PropsWithChildren) => {
  const { isDarkMode } = useDarkMode();

  return (
    <View style={{ backgroundColor: isDarkMode ? "black" : "white", flex: 1 }}>
      {props.children}
    </View>
  );
};

export default DarkModeView;

const styles = StyleSheet.create({});
