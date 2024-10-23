import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { DrawerProps } from "../navigation/types";

const SettingsScreen = () => {
  const navigation =
    useNavigation<DrawerProps<"DrawerSettings">["navigation"]>();

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate("AboutScreen");
        }}>
        Navigeer naar About
      </Button>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
