import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Payment() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Make Payments Here</Text>
      <Link href="/" style={styles.button}>
        Go Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fafafa",
  },
  button: {
    color: "#fafafa",
    fontSize: 15,
    textDecorationLine: "underline",
  },
});
