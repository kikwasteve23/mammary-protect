import { View, Text, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function () {
  return (
    <>
      <Stack.Screen options={{ title: "Opps! Not Found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go to Home Screen
        </Link>
      </View>
    </>
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
