import React, { useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen(): React.JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image source={require("@/assets/logo/logo.png")} style={styles.logo} />
        <ActivityIndicator size="large" color="#FF69B4" style={styles.loader} />
        <Text style={styles.text}>Mammary Protect</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  loader: {
    marginTop: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
