import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, IconButton } from "react-native-paper";
import { removeFavorite } from "../store/favorites/slice";
import { useAppDispatch, useAppSelector } from "../store";
import {
  decrement,
  increment,
  incrementBy,
  reset,
} from "../store/counter/slice";

const FavoritesScreen = () => {
  // Favorieten uit mijn REDUX store uithalen
  // Om de state uit uw store uit te halen -> useSelector() hook
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const counterState = useAppSelector((state) => state.counter);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, padding: 8, borderBottomWidth: 2 }}>
        <Text>Counter</Text>
        <Text>{counterState}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <IconButton
            onPress={() => {
              dispatch(increment());
            }}
            icon="plus"></IconButton>
          <IconButton
            onPress={() => {
              dispatch(decrement());
            }}
            icon="minus"></IconButton>
          <IconButton
            onPress={() => {
              dispatch(reset());
            }}
            icon="restore"
          />
          <IconButton
            onPress={() => {
              dispatch(incrementBy(5));
            }}
            icon="numeric-5"
          />
        </View>
      </View>
      <FlatList
        style={{ flex: 1 }}
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
