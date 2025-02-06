import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function About() {
  const contactInfo = {
    email: "support@mammaryprotect.com",
    phone: "+1 234 567 8900",
    address: "123 Health Street, Medical District, NY 10001",
  };

  const socialLinks = [
    { icon: "logo-facebook", url: "https://facebook.com" },
    { icon: "logo-twitter", url: "https://twitter.com" },
    { icon: "logo-instagram", url: "https://instagram.com" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/200" }}
          style={styles.logo}
        />
        <Text style={styles.title}>Mammary Protect</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.text}>
          Mammary Protect is dedicated to advancing breast health awareness and
          providing innovative solutions for early detection and prevention of
          breast-related health issues.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        {Object.entries(contactInfo).map(([key, value]) => (
          <View key={key} style={styles.contactItem}>
            <Ionicons
              name={
                key === "email"
                  ? "mail-outline"
                  : key === "phone"
                  ? "call-outline"
                  : "location-outline"
              }
              size={20}
              color="#666"
            />
            <Text style={styles.contactText}>{value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.socialSection}>
        <Text style={styles.sectionTitle}>Follow Us</Text>
        <View style={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <TouchableOpacity
              key={index}
              style={styles.socialButton}
              onPress={() => Linking.openURL(link.url)}
            >
              <Ionicons name={link.icon} size={24} color="#fff" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 Mammary Protect. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: "center",
    padding: 30,
    backgroundColor: "#fff",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  version: {
    color: "#666",
    marginTop: 5,
  },
  section: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#666",
  },
  socialSection: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
    alignItems: "center",
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialButton: {
    backgroundColor: "#2196F3",
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#666",
    fontSize: 14,
  },
});
