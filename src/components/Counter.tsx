import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import CounterButtons from "./CounterButtons";

const Counter = () => {
  const { top, bottom, left, right } = useSafeAreaInsets();

  const [counter, setCounter] = useState(0);
  const [isRefresh, setIsRefresh] = useState(false);

  //   Om code uit te voeren nadat uw component gerenderd werd
  //   Altijd bij elke rerender
  useEffect(() => {
    console.log("Test bericht vanuit useEffect type 1");
  });

  //   Deze code gaat enkel maar uitgevoerd bij de eerste rerender
  useEffect(() => {
    console.log("Test bericht vanuit useEffect type 2");
  }, []);

  //   Deze code gaat enkel maar uitgevoerd worden bij het wijzigen van de isRefresh state, maar ook bij de eerste rerender
  useEffect(() => {
    console.log("Test bericht vanuit useEffect type 3");
  }, [isRefresh]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={{ flex: 1, paddingTop: top, paddingBottom: bottom }}>
      <Text style={{ textAlign: "center", marginTop: 24, fontSize: 28 }}>
        {counter}
      </Text>

      <CounterButtons
        setCounter={setCounter}
        increment={increment}
        decrement={decrement}
      />

      <Button
        onPress={() => {
          setIsRefresh(!isRefresh);
        }}>
        Toggle Refresh
      </Button>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
