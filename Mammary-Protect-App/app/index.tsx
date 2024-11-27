import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/logo/logo.png")}
          style={styles.logo}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#222",
  },
  button: {
    fontSize: 15,
    textDecorationLine: "underline",
    color: "#333",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
