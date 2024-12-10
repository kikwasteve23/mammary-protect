import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

// Define the types of the props for the reusable component
type TipCardProps = {
  imageSource: any;
  subHeader: string;
  description: string;
};

const TipCard: React.FC<TipCardProps> = ({
  imageSource,
  subHeader,
  description,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.subHeader}>{subHeader}</Text>
        <Text style={styles.tipDescription}>{description}</Text>
      </View>

      <View style={styles.subContainer}>
        <Image source={imageSource} style={styles.tipImage} />
      </View>
    </View>
  );
};

// Define the styles
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 5,
  },
  subContainer: {
    margin: 5,
    width: "100%",
  },
  subHeader: {
    fontWeight: 500,
    textAlign: "left",
    fontSize: 17,
  },
  tipImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  tipDescription: {
    color: "#222",
    textAlign: "left",
  },
});

export default TipCard;
