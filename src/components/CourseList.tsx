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
import React from "react";

const courses = [
  { courseId: 1, name: "Web 1" },
  { courseId: 2, name: "Web 2" },
  { courseId: 3, name: "Web 3" },
  { courseId: 4, name: "Mobile" },
];

const CourseList = () => {
  // Als referentie event handler -> event typen met TypeScript
  const handlePress = (event: GestureResponderEvent) => {
    console.log("Er is geklikt op de knop!: ", event.target);
  };

  return (
    <View style={styles.container}>
      <Text>CourseList</Text>

      <Button title="Klik mij (Button)" onPress={handlePress}></Button>

      <TouchableOpacity
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
      </TouchableOpacity>

      <Pressable
        style={{
          marginTop: 16,
          backgroundColor: "blue",
          paddingHorizontal: 16,
        }}
        onPress={() => {
          console.log("Geklikt op de Pressable!");
        }}>
        <Text>Klik mij (Pressable)</Text>
      </Pressable>

      {/* Opgelet met map -> performantie redenen */}
      {/* {courses.map((c) => (
        <View key={c.id} style={{ marginVertical: 500 }}>
          <Text>{c.name}</Text>
        </View>
      ))} */}

      {/* Als we met lijsten/arrays van data gaan werken -> FlatList */}
      <FlatList
        renderItem={({ item, index }) => {
          return (
            <View style={styles.listView}>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        data={courses}
        // KeyExtractor -> key moet van het type string zijn
        keyExtractor={(item) => item.courseId.toString()}
      />
    </View>
  );
};

export default CourseList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    paddingHorizontal: 16,
  },
  listView: {
    marginVertical: 500,
  },
});
