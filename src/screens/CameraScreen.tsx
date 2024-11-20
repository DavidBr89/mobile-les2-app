import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Camera,
  CameraCapturedPicture,
  CameraType,
  CameraView,
  useCameraPermissions,
  useMicrophonePermissions,
} from "expo-camera";
import { Button } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";

const CameraScreen = () => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [photo, setPhoto] = useState<CameraCapturedPicture | undefined>();
  const [status, requestPermission] = useCameraPermissions();
  const [microStatus, requestMicroPermission] = useMicrophonePermissions();

  //   Het beste is om de useIsFocused te gebruiken als de focus verdwijnt van het scherm, dat de camera niet meer getoond wordt.
  const isFocused = useIsFocused();

  //   Permissie opvragen
  useEffect(() => {
    requestPermission();
    requestMicroPermission();
  }, []);

  const cameraRef = useRef<CameraView>(null);

  if (!status?.granted || !microStatus?.granted) {
    return (
      <View>
        <Text>Je hebt geen permissies!</Text>
        <Text>
          {status?.canAskAgain
            ? "Kan de permissie opgevraagd worden"
            : "Niet dan"}
        </Text>
        {/* Het is niet zo dat je zomaar opnieuw de permissies kan gaan opvragen */}
        <Button onPress={requestPermission}>Vraag permissie op!</Button>
      </View>
    );
  }

  if (photo !== undefined) {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: photo.uri,
            width: 400,
            height: 400,
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <CameraView
          ref={cameraRef}
          facing="back"
          onCameraReady={() => {
            console.log("Camera is ready");
            setIsCameraReady(true);
          }}
          // Camera nu qr codes en streepjescode met 13 cijfers gaat herkennen
          barcodeScannerSettings={{ barcodeTypes: ["qr", "ean13"] }}
          onBarcodeScanned={(result) => {
            console.log(result.data);
          }}
          style={{ flex: 1 }}></CameraView>
      )}
      <Button
        onPress={async () => {
          try {
            if (isCameraReady) {
              const picture = await cameraRef.current?.takePictureAsync({
                base64: true,
              });
              setPhoto(picture);
              console.log(picture);
            }
          } catch (error) {
            console.log(error);
          }
        }}>
        Foto
      </Button>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
