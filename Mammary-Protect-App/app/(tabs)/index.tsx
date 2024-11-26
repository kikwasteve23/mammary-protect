import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ImageBackground
      source={{ uri: "https://example.com/background.jpg" }}
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Link href="/about" style={styles.button}>
          About Page
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fafafa",
  },
  button: {
    fontSize: 15,
    textDecorationLine: "underline",
    color: "#fafafa",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
