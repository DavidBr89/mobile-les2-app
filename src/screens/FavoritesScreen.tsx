import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "react-native-paper";
import { removeFavorite } from "../store/favorites/slice";
import { useAppDispatch, useAppSelector } from "../store";

const FavoritesScreen = () => {
  // Favorieten uit mijn REDUX store uithalen
  // Om de state uit uw store uit te halen -> useSelector() hook
  const favorites = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Text style={{ padding: 8, marginBottom: 16 }}>{item.name}</Text>
              <IconButton
                onPress={() => {
                  dispatch(removeFavorite(item.id));
                }}
                icon="trash-can-outline"
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
