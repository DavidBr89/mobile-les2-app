import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { CourseScreenProps } from "../navigation/types";

const DetailsScreen = () => {
  // Parameters ophalen van de navigatie via de route
  const {
    params: { course },
  } = useRoute<CourseScreenProps<"DetailsScreen">["route"]>();

  const navigation =
    useNavigation<CourseScreenProps<"DetailsScreen">["navigation"]>();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>{course.name}</Text>

      <Button
        mode="contained"
        onPress={() => {
          navigation.goBack();
        }}>
        Ga Terug
      </Button>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
