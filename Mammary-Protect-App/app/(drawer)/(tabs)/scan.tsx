import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Scan() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Camera permission is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleScan = async () => {
    if (!image) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push("/results");
    } catch (error) {
      alert("Error during scan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image ? (
          <>
            <Image source={{ uri: image }} style={styles.image} />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => setImage(null)}
            >
              <Ionicons name="close-circle" size={30} color="#FF4444" />
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.placeholder}>
            <Ionicons name="image-outline" size={80} color="#ccc" />
            <Text style={styles.placeholderText}>No image selected</Text>
          </View>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Ionicons name="images-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
          <Ionicons name="camera-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.scanButton,
          (!image || loading) && styles.disabledButton,
        ]}
        onPress={handleScan}
        disabled={!image || loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <Ionicons name="scan" size={24} color="#fff" />
            <Text style={styles.scanButtonText}>Scan Image</Text>
          </>
        )}
      </TouchableOpacity>

      <Text style={styles.disclaimer}>
        This scan is for preliminary assessment only. Please consult with a
        healthcare professional for proper diagnosis.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  imageContainer: {
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  removeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  placeholder: {
    alignItems: "center",
  },
  placeholderText: {
    marginTop: 10,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  uploadButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  cameraButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    marginLeft: 8,
    fontSize: 16,
  },
  scanButton: {
    flexDirection: "row",
    backgroundColor: "#FF69B4",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  scanButtonText: {
    color: "#fff",
    marginLeft: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  disclaimer: {
    color: "#666",
    textAlign: "center",
    fontSize: 12,
  },
});
