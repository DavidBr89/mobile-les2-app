import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const courses = [
  { courseId: 1, name: "Web 1" },
  { courseId: 2, name: "Web 2" },
  { courseId: 3, name: "Web 3" },
  { courseId: 4, name: "Mobile" },
];

const CourseList = () => {
  return (
    <View style={styles.container}>
      <Text>CourseList</Text>

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
