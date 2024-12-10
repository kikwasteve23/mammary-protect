import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { Image } from "react-native";
import TipCard from "@/components/Tips/TipCard";

export default function Tips() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.textHead}> HEALTHY TIPS</Text>
        <ScrollView style={styles.container}>
          <TipCard
            imageSource={require("@/assets/images/tips/tip-1.png")}
            subHeader="Regular Screening"
            description="Schedule regular breast cancer 
screenings and follow your healthcare provider's 
recommendations for mammograms and clinical 
breast exams."
          />
          <View style={styles.hr} />
          <TipCard
            imageSource={require("@/assets/images/tips/tip-2.png")}
            subHeader="Healthy Diet"
            description=" Maintain a balanced diet rich in fruits, 
vegetables, and whole grains. Certain foods, like leafy 
greens and berries, may help reduce cancer risk."
          />
          <View style={styles.hr} />
          <TipCard
            imageSource={require("@/assets/images/tips/tip-3.png")}
            subHeader="Regular Exercise"
            description="Engage in regular physical 
activity to maintain a healthy weight and lower your 
risk of breast cancer. Aim for at least 30 minutes of 
moderate exercise most days of the week."
          />
          <View style={styles.hr} />
          <TipCard
            imageSource={require("@/assets/images/tips/tip-4.png")}
            subHeader="Know Your Family History"
            description="Be aware of your family’s 
medical history, especially any instances of breast 
cancer, and discuss it with your healthcare provider 
to understand your risk."
          />
          <View style={styles.hr} />
          <TipCard
            imageSource={require("@/assets/images/tips/tip-5.png")}
            subHeader="Breast Self-Exams:"
            description=" Perform regular breast self-
exams to become familiar with the normal look and 
feel of your breasts, so you can notice any changes 
and report them to your doctor."
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  textHead: {
    color: "#222",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 20,
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
  hr: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 5,
  },
});
