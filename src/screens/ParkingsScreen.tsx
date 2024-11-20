import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import Axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ParkingsScreenProps } from "../navigation/types";

const ParkingsScreen = () => {
  //   const [parkings, setParkings] = useState<Parking[]>([]);
  //   const [isLoading, setIsLoading] = useState(false);

  //   Met fetch API
  //   const fetchParkings = async () => {
  //     try {
  //       // GET request
  //       const response = await fetch(
  //         "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records",
  //         {
  //           method: "POST",
  //           body: JSON.stringify([{ id: 1, name: "Test" }]),
  //         }
  //       );

  //       const data = await response.json();
  //       setParkings(data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   Met AXIOS
  //   const fetchParkingsWithAxios = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await Axios.get(
  //         "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records",
  //         {}
  //       );

  //       setParkings(response.data.results);
  //     } catch (error) {
  //       // Foutmelding dat je aan uw gebruiker kan laten tonen
  //       Alert.alert("Fout!", "Fout bij het laden van de parkings!");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   //   React Query

  const queryClient = useQueryClient();

  const navigation =
    useNavigation<ParkingsScreenProps<"parkings">["navigation"]>();

  //   GET Request
  const { data, error, isLoading, isError, refetch, dataUpdatedAt } = useQuery({
    queryKey: ["fetchParkings"],
    queryFn: () => {
      return Axios.get<{ totalCount: number; results: Parking[] }>(
        "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records",
        {}
      );
    },
    // enabled: false,
    refetchInterval: 5 * 60 * 1000,
  });

  //   useEffect(() => {
  //     // fetchParkings();

  //     fetchParkingsWithAxios();

  //     // const timerId = setInterval(() => {
  //     //   console.log("tick");
  //     // }, 1000);
  //     // // Cleanup functie - Component unmounted -> Deze functie opgeroepen
  //     // return () => {
  //     //   clearInterval(timerId);
  //     // };
  //   }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (isError) {
    Alert.alert("Fout opgetreden!", error.message);
    return (
      <View>
        <Text>Kon geen data ophalen</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          // In elke component kunt gebruiekn
          queryClient.fetchQuery({
            queryKey: ["fetchParkings"],
          });

          //   Lokaal in deze component kan gebruikt worden
          refetch();
        }}>
        Haal data op
      </Button>
      <Text>{new Date(dataUpdatedAt).toLocaleString()}</Text>
      <FlatList
        data={data?.data.results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ padding: 16 }}
              onPress={() => {
                navigation.navigate("parkingsweb", {
                  url: item.urllinkaddress,
                });
              }}>
              <Text style={styles.parkingTitle}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        // Pull to refresh -> Naar beneden trekken om uw data opnieuw op te halen
        onRefresh={refetch}
        refreshing={isLoading}
      />
    </View>
  );
};

export default ParkingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parkingTitle: {
    fontFamily: "SourGummy",
  },
});
