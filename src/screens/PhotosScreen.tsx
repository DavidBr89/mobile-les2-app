import {
  StyleSheet,
  Text,
  View,
  Image,
  GestureResponderEvent,
} from "react-native";
import React, { useEffect, useState } from "react";

import {
  useMediaLibraryPermissions,
  launchImageLibraryAsync,
  ImagePickerResult,
} from "expo-image-picker";
import { Button } from "react-native-paper";

const PhotosScreen = () => {
  const [images, setImages] = useState<ImagePickerResult>();

  const [status, requestPermission] = useMediaLibraryPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  const handlePhoto = async (event: GestureResponderEvent) => {
    const result = await launchImageLibraryAsync({
      //   allowsEditing: true,
      allowsMultipleSelection: true,
      //   exif: true,
      mediaTypes: ["images"],
      quality: 0,
    });
    console.log(result);

    setImages(result);
  };

  if (!status?.granted) {
    <Text>Geen permissies</Text>;
  }

  return (
    <View>
      {images?.assets?.map((i) => (
        <Image
          key={i.assetId}
          source={{ uri: i.uri, width: 200, height: 200 }}
        />
      ))}

      {/* <Image /> */}
      <Button onPress={handlePhoto}>Kies foto</Button>
    </View>
  );
};

export default PhotosScreen;

const styles = StyleSheet.create({});
