import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import React, { createRef, useRef, useState } from "react";

import {
  Button,
  TextInput as RNPTextInput,
  Switch as RNPSwitch,
  Checkbox,
} from "react-native-paper";
import { Input, Switch as RNESwitch, Slider as RNESlider } from "@rneui/base";
import { useFormik } from "formik";

import * as Yup from "yup";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Voornaam is verplicht"),
  lastName: Yup.string().required("Achternaam is verplicht"),
  email: Yup.string()
    .email("Geen geldig emailadres")
    .required("Email is verplicht"),
  isVerified: Yup.boolean(),
  age: Yup.number().positive().integer().required(),
});

const courses = [
  {
    id: 1,
    label: "Web 1",
    value: "web1",
  },
  {
    id: 2,
    label: "Web 2",
    value: "web2",
  },
  {
    id: 3,
    label: "Web 3",
    value: "web3",
  },
  {
    id: 4,
    label: "Mobile",
    value: "mobile",
  },
];

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

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    dirty,
    isValid,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      isVerified: false,
      age: 0,
      course: courses[2].value,
      isEnabled: true,
    },
    onSubmit: (values) => {
      console.log("Formulier gesubmitted: ", values);
      // REST API CALL -> Data te gaan submitten naar de server
    },
    validationSchema: validationSchema,
  });

  // Stap 1: Referentie aanmaken
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<Input & TextInput>(null);

  return (
    <View style={styles.container}>
      {/* Standaard tekstinvoer van React Native */}
      <Text>React Native tekstinvoer</Text>
      <TextInput
        value={values.firstName}
        // onChange={(event) => setFirstName(event.nativeEvent.text)}
        onChangeText={handleChange("firstName")}
        onBlur={handleBlur("firstName")}
        autoCorrect={false}
        autoComplete="given-name"
        returnKeyType="next"
        placeholder="Voornaam"
        onSubmitEditing={(e) => lastNameRef.current?.focus()}
      />
      {errors.firstName !== undefined && (
        <Text className="text-red-600 text-sm">{errors.firstName}</Text>
      )}

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
        error={errors.lastName !== undefined}
        onBlur={handleBlur("lastName")}
      />
      {errors.lastName !== undefined && (
        <Text className="text-red-600 text-sm">{errors.lastName}</Text>
      )}

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
        errorMessage={errors.email}
        onBlur={handleBlur("email")}
      />

      {/* SWITCH component */}
      {/* React Native Switch */}
      <Switch
        value={values.isVerified}
        onValueChange={(value) => {
          setFieldValue("isVerified", value);
        }}
        thumbColor="blue"
        trackColor={{ false: "red", true: "yellow" }}
      />

      {/* React Native Paper */}
      <RNPSwitch
        value={values.isVerified}
        onValueChange={(value) => {
          setFieldValue("isVerified", value);
        }}
      />

      {/* React Native Elements */}
      <RNESwitch
        value={values.isVerified}
        onValueChange={(value) => {
          setFieldValue("isVerified", value);
        }}
      />

      {/* SLIDERS */}
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <Text>0</Text>
        <RNESlider
          style={{ flexGrow: 1 }}
          value={values.age}
          onValueChange={(value) => {
            setFieldValue("age", value);
          }}
          minimumValue={0}
          maximumValue={125}
          step={1}
        />
        <Text>125</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <Text>0</Text>
        <Slider
          style={{ flexGrow: 1 }}
          value={values.age}
          onValueChange={(value) => {
            setFieldValue("age", value);
          }}
          minimumValue={0}
          maximumValue={125}
          step={10}
          minimumTrackTintColor="red"
          maximumTrackTintColor="yellow"
          thumbTintColor="blue"
        />
        <Text>125</Text>
      </View>

      {/* PICKERS */}

      <Picker
        selectedValue={values.course}
        onValueChange={(value) => {
          setFieldValue("course", value);
        }}>
        {courses.map((c) => (
          <Picker.Item key={c.id} label={c.label} value={c.value} />
        ))}
      </Picker>

      <Checkbox
        status={values.isEnabled ? "checked" : "unchecked"}
        onPress={() => {
          setFieldValue("isEnabled", !values.isEnabled);
        }}
      />

      {dirty && (
        <Button disabled={!isValid} onPress={() => handleSubmit()}>
          Verstuur
        </Button>
      )}
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
