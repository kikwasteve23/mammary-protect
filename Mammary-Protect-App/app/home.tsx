// app/index.tsx
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Home(): React.JSX.Element {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/home-image.png")}
            style={styles.homeImage}
            contentFit="cover"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Mammary Protect</Text>
          <Text style={styles.subtitle}>Advanced Breast Cancer Screening</Text>
          <Text style={styles.description}>
            User-friendly breast cancer screening at home with thermography and
            echography.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.registerButton]}
            activeOpacity={0.7}
            onPress={() => router.push("/register")}
          >
            <Ionicons name="person-add-outline" size={24} color="#fff" />
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.loginButton]}
            activeOpacity={0.7}
            onPress={() => router.push("/login")}
          >
            <Ionicons name="log-in-outline" size={24} color="#fff" />
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  imageContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  homeImage: {
    width: "100%",
    height: 300,
    borderRadius: 15,
  },
  textContainer: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
  },
  buttonContainer: {
    gap: 15,
    marginBottom: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    gap: 10,
  },
  registerButton: {
    backgroundColor: "#FF69B4",
  },
  loginButton: {
    backgroundColor: "#2196F3",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
