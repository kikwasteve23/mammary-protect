import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import ImageViewer from "@/components/General/ImageViewer";
import Button from "@/components/Buttons/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import ShowButton from "@/components/Buttons/ShowButton";
import IconButton from "@/components/Buttons/IconButton";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Scan() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {
    setSelectedImage(undefined);
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    if (!selectedImage) {
      alert("No image selected!");
      return;
    }

    try {
      // Request media library permissions
      const permission = await MediaLibrary.requestPermissionsAsync();
      if (permission.granted) {
        // Save image to local file system first
        const fileUri = FileSystem.documentDirectory + "savedImage.jpg";

        // Download the image and save it to the local file system
        await FileSystem.downloadAsync(selectedImage, fileUri);

        // Save to media library (photos gallery)
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        await MediaLibrary.createAlbumAsync("BreastCancerApp", asset, false);

        alert("Image saved successfully!");
      } else {
        alert("Permission to access media library is required!");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving image.");
    }
  };

  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer
            imgSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
        </View>
        {showAppOptions ? (
          <>
            <View style={styles.uploadContainer}>
              <View style={styles.optionsContainer}>
                <View style={styles.optionsRow}>
                  <IconButton icon="refresh" label="Reset" onPress={onReset} />
                  <ShowButton onPress={onAddSticker} />
                  <IconButton
                    icon="save-alt"
                    label="Save"
                    onPress={onSaveImageAsync}
                  />
                </View>
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>BREAST CANCER DIAGNOSTICS APP</Text>
            </View>
            <View style={styles.uploadContainer}>
              <Text>Upload Ultra Sound Image</Text>
              <View style={styles.footerContainer}>
                <Button
                  theme="primary"
                  label="Choose a photo"
                  onPress={pickImageAsync}
                />
                <Button
                  label="Use this photo"
                  onPress={() => setShowAppOptions(true)}
                />
              </View>
            </View>
          </>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 10,
  },
  uploadContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  headerContainer: {
    alignItems: "center",
  },
  header: {
    padding: 10,
    fontSize: 20,
    fontWeight: 500,
  },
  text: {
    color: "#222",
  },
  button: {
    color: "#333",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginTop: 0,
  },
  footerContainer: {
    justifyContent: "space-evenly",
    width: "80%",
  },
  optionsContainer: {
    position: "relative",
    flex: 1 / 3,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
