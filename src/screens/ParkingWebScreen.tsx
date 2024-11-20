import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { ParkingsScreenProps } from "../navigation/types";
import WebView from "react-native-webview";
import { TextInput } from "react-native-paper";

const ParkingWebScreen = () => {
  const {
    params: { url },
  } = useRoute<ParkingsScreenProps<"parkingsweb">["route"]>();

  return (
    <View style={{ flex: 1 }}>
      <TextInput />
      <WebView style={{ flex: 1 }} source={{ uri: url }} />
    </View>
  );
};

export default ParkingWebScreen;

const styles = StyleSheet.create({});
