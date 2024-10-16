import { StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";

interface MyTextProps extends TextProps {
  label?: string;
}

const MyText = (props: MyTextProps) => {
  // Props -> children
  return (
    <Text {...props} style={{ ...styles.txt, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default MyText;

const styles = StyleSheet.create({
  txt: {
    color: "white",
    fontSize: 28,
  },
});
