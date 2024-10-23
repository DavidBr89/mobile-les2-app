import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Platform,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

const data = [
  { id: 1, title: "1" },
  { id: 2, title: "2" },
  { id: 3, title: "3" },
  { id: 4, title: "4" },
  { id: 5, title: "5" },
  { id: 6, title: "6" },
];

const AboutScreen = () => {
  // Hook om onze dimensions terug te krijgen -> automatisch geüpdated wanneer bvb van portrait naar landscape
  const { fontScale, height, width } = useWindowDimensions();

  const { isDarkMode } = useDarkMode();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Platform.OS === "ios" ? "blue" : "red",
      }}>
      <Text style={{ color: isDarkMode ? "red" : "green" }}>AboutScreen</Text>
      <FlatList
        horizontal
        snapToAlignment="center"
        data={data}
        renderItem={({ item }) => (
          <View
            style={{ width: width, backgroundColor: "yellow", borderWidth: 2 }}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        backgroundColor: "red",
      },
      ios: {
        backgroundColor: "blue",
      },
      default: {
        backgroundColor: "white",
      },
    }),
  },
});
