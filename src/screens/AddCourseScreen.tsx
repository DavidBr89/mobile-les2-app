import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";

import { Button, TextInput as RNPTextInput } from "react-native-paper";
import { Input } from "@rneui/base";
import { useFormik } from "formik";

const AddCourseScreen = () => {
  // Manuele manier zonder - FORMIK
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // const [formState, setFormState] = useState({
  //   firstName: "",
  //   lastName: "",
  //   street: "",
  // });

  // const handleChangeText = (text: string) => {};

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log("Formulier gesubmitted: ", values);
    },
  });

  // Stap 1: Referentie aanmaken
  const lastNameRef = useRef();
  const emailRef = useRef();

  return (
    <View style={styles.container}>
      {/* Standaard tekstinvoer van React Native */}
      <Text>React Native tekstinvoer</Text>
      <TextInput
        value={values.firstName}
        // onChange={(event) => setFirstName(event.nativeEvent.text)}
        onChangeText={handleChange("firstName")}
        autoCorrect={false}
        autoComplete="given-name"
        returnKeyType="next"
        placeholder="Voornaam"
        onSubmitEditing={(e) => lastNameRef.current?.focus()}
      />

      {/* React Native paper tekstinvoer */}
      <Text>React Native Paper tekstinvoer</Text>
      <RNPTextInput
        value={values.lastName}
        onChangeText={handleChange("lastName")}
        autoComplete="family-name"
        autoCorrect={false}
        returnKeyType="next"
        placeholder="Achternaam"
        ref={lastNameRef}
        onSubmitEditing={(event) => emailRef.current?.focus()}
      />

      {/* React Native Elements tekstinvoer */}
      <Text>React Native Elements tekstinvoer</Text>
      <Input
        ref={emailRef}
        value={values.email}
        onChangeText={handleChange("email")}
        autoComplete="email"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        returnKeyType="done"
        placeholder="Email"
      />

      <Button onPress={() => handleSubmit()}>Verstuur</Button>
    </View>
  );
};

export default AddCourseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
