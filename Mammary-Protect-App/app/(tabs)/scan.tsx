import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Scan() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.text}> Upload Image</Text>
        <Link href="/" style={styles.button}>
          Go Home
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});
