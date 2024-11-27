import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import CourseList from "./src/components/CourseList";
import TextComponent from "./src/components/TextComponent";

// Provider (SafeAreaProvider) -> Context kan gebruiken in mijn app
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import Counter from "./src/components/Counter";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";
import DarkModeContextProvider from "./src/contexts/DarkModeContext";
import ParkingsTabNavigator from "./src/navigation/ParkingsTabNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: "#dedede",
    // secondary: "#ededed",
  },
};

// Dit is om uw SplashScreen tegen te houden
SplashScreen.preventAutoHideAsync();

export default function App() {
  // return <CourseList />;

  // return (
  //   <View style={styles.container}>
  //     {/* RODE VIEW */}
  //     <View style={{ flex: 1, backgroundColor: "red", padding: 16 }}>
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

  //     {/* GROENE VIEW */}
  //     <View style={{ flex: 4, backgroundColor: "green" }}>
  //       <TextInput
  //         style={{
  //           borderWidth: 2,
  //           borderColor: "grey",
  //           padding: 8,
  //           margin: 8,
  //         }}
  //         placeholder="Email"
  //         // defaultValue="david.breckx@hogent.be"
  //         keyboardType="email-address"
  //         autoComplete="email"
  //         autoCorrect={false}
  //         autoCapitalize="none"
  //       />

  //       <TextInput
  //         style={{
  //           borderWidth: 2,
  //           borderColor: "grey",
  //           padding: 8,
  //           margin: 8,
  //           alignSelf: "stretch",
  //         }}
  //         placeholder="Wachtwoord"
  //         // defaultValue="david.breckx@hogent.be"
  //         autoComplete="current-password"
  //         autoCorrect={false}
  //         autoCapitalize="none"
  //         secureTextEntry
  //         // onChange={(event) => {
  //         //   console.log(event.nativeEvent.text);
  //         // }}
  //         onChangeText={(text) => console.log(text)}
  //       />
  //     </View>

  //     <View style={{ flex: 3, backgroundColor: "blue" }}>
  //       <Text>Blauwe view</Text>
  //     </View>

  //     <StatusBar style="auto" />
  //   </View>
  // );

  // return (
  //   <SafeAreaProvider>
  //     {/* Context kan maar pas gebruikt worden als child van de Provider */}
  //
  //       {/* <TextComponent /> */}
  //       <Counter />
  //     </PaperProvider>
  //   </SafeAreaProvider>
  // );

  const queryClient = new QueryClient();

  const [isLoaded, error] = useFonts({
    SourGummy: require("./assets/fonts/SourGummy.ttf"),
  });

  useEffect(() => {
    if (isLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded, error]);

  if (!isLoaded && !error) {
    return null;
  }

  return (
    // REDUX Provider
    <Provider store={store}>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer>
          {/* <StackNavigator /> */}
          <QueryClientProvider client={queryClient}>
            <DarkModeContextProvider>
              {/* <TabNavigator /> */}
              <ParkingsTabNavigator />
            </DarkModeContextProvider>
          </QueryClientProvider>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "yellow",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
