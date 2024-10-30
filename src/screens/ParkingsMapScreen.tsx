import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MapView, { Marker } from "react-native-maps";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const ParkingsMapScreen = () => {
  //   GET Request
  const { data, error, isLoading, isError, refetch, dataUpdatedAt } = useQuery({
    queryKey: ["fetchParkings"],
    queryFn: () => {
      return Axios.get<{ totalCount: number; results: Parking[] }>(
        "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records",
        {}
      );
    },
  });

  return (
    <MapView style={styles.container}>
      {data?.data.results.map((p) => (
        <Marker
          key={p.id}
          coordinate={{ latitude: p.location.lat, longitude: p.location.lon }}
        />
      ))}
    </MapView>
  );
};

export default ParkingsMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
