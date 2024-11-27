import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";

export default function Home() {
  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/home-image.png")}
            style={styles.homeImage}
          />
        </View>

        {/* Text and Links */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Welcome to Mammary Protect Advanced, user-friendly breast cancer
            screening at home with thermography and echography.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => {
                /* navigate to Register */
              }}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => {
                /* Navigate to Login */
              }}
            >
              <Text style={styles.buttonText}>Have an account?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  textContainer: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 30,
    marginTop: 40,
  },

  text: {
    color: "#222",
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 5,
    marginBottom: 20,
  },

  buttonContainer: {
    marginTop: 10,
  },

  button: {
    backgroundColor: "#BC37FA",
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    marginBottom: 10,
  },
  homeImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
