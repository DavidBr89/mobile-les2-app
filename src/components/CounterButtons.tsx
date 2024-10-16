import { StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { Button } from "react-native-paper";

interface CounterButtonsProps {
  setCounter: Dispatch<SetStateAction<number>>;
  increment: () => void;
  decrement: () => void;
}

const CounterButtons = ({
  setCounter,
  increment,
  decrement,
}: CounterButtonsProps) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <Button
        mode="contained"
        onPress={() => {
          //   decrement();
          setCounter((currentState) => currentState - 1);
        }}>
        -
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          //   increment();
          setCounter((currentState) => currentState + 1);
        }}>
        +
      </Button>
    </View>
  );
};

export default CounterButtons;

const styles = StyleSheet.create({});
