import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function About() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../../assets/images/bg.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.textHeader}>ABOUT US</Text>
          <Text style={styles.text}>
            Mammary Protect revolutionizes breast cancer screening with an
            innovative, wearable device that combines thermography and
            echography.{"\n"}
            {"\n"}The app empowers users to conduct comprehensive breast health
            assessments from the comfort of their home, providing timely and
            accurate insights.{"\n"}
            {"\n"}Designed for ease of use, Mammary Protect ensures proactive
            care and peace of mind, making advanced screening accessible to
            everyone.{"\n"}
            {"\n"}Join us in transforming breast health monitoring with
            cutting-edge technology and user-centric design.
          </Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.textHeader}>SUBSCRIPTION</Text>
          <Text style={styles.text}>
            Unlock the full potential of Mammary Protect with the subscription
            plans.{"\n"}
            {"\n"}Enjoy enhanced features, regular updates, and personalized
            support to help you stay proactive about your breast health.{"\n"}
            {"\n"}
            Subscribe today to access premium tools and detailed analyses,
            ensuring you have the best resources for your well-being.{"\n"}
            {"\n"}Join us in transforming breast health monitoring with
            cutting-edge technology and user-centric design.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/scan")}
          >
            <Text style={styles.buttonText}>Contact us for More Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
  },
  subContainer: {
    justifyContent: "space-between",
    margin: 10,
    paddingTop: 10,
  },
  text: {
    color: "#222",
  },
  textHeader: {
    fontWeight: "bold",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
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
});
