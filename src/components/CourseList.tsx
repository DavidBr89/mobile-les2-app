import {
  Button,
  FlatList,
  GestureResponderEvent,
  GestureResponderHandlers,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { Divider } from "react-native-paper";

import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { CourseScreenProps } from "../navigation/types";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDarkMode } from "../contexts/DarkModeContext";

const courses = [
  { courseId: 1, name: "Web 1" },
  { courseId: 2, name: "Web 2" },
  { courseId: 3, name: "Web 3" },
  { courseId: 4, name: "Mobile" },
];

const CourseList = () => {
  // Hook om te kunnen navigeren
  const navigation =
    useNavigation<CourseScreenProps<"HomeScreen">["navigation"]>();

  // Als referentie event handler -> event typen met TypeScript
  const handlePress = (event: GestureResponderEvent) => {
    console.log("Er is geklikt op de knop!: ", event.target);
  };

  const { left, right } = useSafeAreaInsets();

  // const { isDarkMode } = useContext(DarkModeContext);
  const { isDarkMode } = useDarkMode();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? "black" : "white",
    },
    listView: {
      height: 50,
      padding: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });

  return (
    <View
      style={{
        ...styles.container,
        paddingLeft: left,
        paddingRight: right,
      }}>
      {/* <Text>CourseList</Text> */}

      {/* <Button title="Klik mij (Button)" onPress={handlePress}></Button> */}

      {/* <TouchableOpacity
        style={{
          backgroundColor: "blue",
          paddingHorizontal: 16,
          height: 40,
        }}
        onPress={(event) => {
          console.log("Geklikt op de Touchable Opacity: ");
        }}
        onLongPress={() => {
          console.log("Lang geklikt op de Touchable Opacity");
        }}>
        <Text style={{ textAlign: "center", color: "white" }}>
          Klik mij (Touchable Opacity)
        </Text>
      </TouchableOpacity> */}

      {/* <Pressable
        style={{
          marginTop: 16,
          backgroundColor: "blue",
          paddingHorizontal: 16,
        }}
        onPress={() => {
          console.log("Geklikt op de Pressable!");
        }}>
        <Text>Klik mij (Pressable)</Text>
      </Pressable> */}

      {/* Opgelet met map -> performantie redenen */}
      {/* {courses.map((c) => (
        <View key={c.id} style={{ marginVertical: 500 }}>
          <Text>{c.name}</Text>
        </View>
      ))} */}

      {/* Als we met lijsten/arrays van data gaan werken -> FlatList */}
      <FlatList
        style={{}}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={styles.listView}
              onPress={() => {
                navigation.navigate("DetailsScreen", { course: item });
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: isDarkMode ? "white" : "black",
                }}>
                {item.name}
              </Text>
              <MaterialIcon name="chevron-right" size={24} color="#dedede" />
            </TouchableOpacity>
          );
        }}
        data={courses}
        // KeyExtractor -> key moet van het type string zijn
        keyExtractor={(item) => item.courseId.toString()}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

export default CourseList;
