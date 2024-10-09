import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import icon from "./assets/icon.png";
import CourseList from "./src/components/CourseList";

export default function App() {
  return <CourseList />;

  // return (
  //   <ScrollView style={styles.container}>
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //     <View style={{ backgroundColor: "red", padding: 16 }}>
  //       <Text style={{ fontSize: 28 }}>Mobile</Text>
  //       <Image
  //         source={{
  //           uri: "https://www.technology4u.in/wp-content/uploads/2021/07/react-native.png",
  //           width: 300,
  //           height: 100,
  //         }}
  //         resizeMode="contain"
  //         // width={300}
  //         // height={300}
  //       />

  //       <Image source={icon} style={{ width: 150, height: 50 }} />
  //     </View>

  //     <TextInput
  //       style={{
  //         borderWidth: 2,
  //         borderColor: "grey",
  //         padding: 8,
  //         margin: 8,
  //         marginBottom: 800,
  //       }}
  //       placeholder="Email"
  //       // defaultValue="david.breckx@hogent.be"
  //       keyboardType="email-address"
  //       autoComplete="email"
  //       autoCorrect={false}
  //       autoCapitalize="none"
  //     />

  //     <TextInput
  //       style={{
  //         borderWidth: 2,
  //         borderColor: "grey",
  //         padding: 8,
  //         margin: 8,
  //       }}
  //       placeholder="Wachtwoord"
  //       // defaultValue="david.breckx@hogent.be"
  //       autoComplete="current-password"
  //       autoCorrect={false}
  //       autoCapitalize="none"
  //       secureTextEntry
  //       // onChange={(event) => {
  //       //   console.log(event.nativeEvent.text);
  //       // }}
  //       onChangeText={(text) => console.log(text)}
  //     />

  //     <StatusBar style="auto" />
  //   </ScrollView>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
