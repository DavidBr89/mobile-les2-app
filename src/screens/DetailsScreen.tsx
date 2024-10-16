import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "react-native-paper";

const DetailsScreen = () => {
  // Parameters ophalen van de navigatie via de route
  const {
    params: { course },
  } = useRoute();

  const navigation = useNavigation();

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
