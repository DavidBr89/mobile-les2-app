import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Accuracy,
  getCurrentPositionAsync,
  LocationObject,
  LocationSubscription,
  useBackgroundPermissions,
  useForegroundPermissions,
  watchPositionAsync,
} from "expo-location";

const LocationScreen = () => {
  const [location, setLocation] = useState<LocationObject>();

  // Permissies opvragen om de locatie te weten te komen
  // Twee soorten -> Foreground en Background

  const [foreGroundStatus, requestForegroundPermission] =
    useForegroundPermissions();
  const [backgroundStatus, requestBackgroundPermission] =
    useBackgroundPermissions();

  useEffect(() => {
    requestForegroundPermission();
    requestBackgroundPermission();
  }, []);

  useEffect(() => {
    // Eénmalig de locatie opvragen van uw gebruiker
    // const fetchLocation = async () => {
    //   const position = await getCurrentPositionAsync({
    //     accuracy: Accuracy.Low,
    //   });
    //   setLocation(position);
    // };
    // if (foreGroundStatus?.granted) {
    //   fetchLocation();
    // }
    //   Updates te ontvangen als de locatie van de gebruiker wijzigt.

    let subscription: LocationSubscription;

    const watchPosition = async () => {
      subscription = await watchPositionAsync(
        { accuracy: Accuracy.High },
        (position) => {
          setLocation(position);
        }
      );
    };

    if (foreGroundStatus?.granted) {
      watchPosition();
    }

    // Cleanup functie
    return () => {
      subscription?.remove();
    };
  }, [foreGroundStatus]);

  if (!foreGroundStatus?.granted || !backgroundStatus?.granted) {
    return <Text>Geen permissies.</Text>;
  }

  return (
    <View>
      <Text>{JSON.stringify(location)}</Text>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({});
