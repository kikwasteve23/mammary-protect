// app/(drawer)/terms/index.js
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using the Mammary Protect application, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
    },
    {
      title: "2. Medical Disclaimer",
      content:
        "The information provided in this application is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.",
    },
    {
      title: "3. User Account",
      content:
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.",
    },
    {
      title: "4. Privacy Policy",
      content:
        "Your use of the application is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.",
    },
    {
      title: "5. Subscription Terms",
      content:
        "Premium features require a paid subscription. Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. You can manage and cancel subscriptions through your account settings.",
    },
    {
      title: "6. User Content",
      content:
        "By submitting content to our application, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute such content within the application.",
    },
    {
      title: "7. Limitations of Liability",
      content:
        "To the maximum extent permitted by law, Mammary Protect shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the application.",
    },
    {
      title: "8. Changes to Terms",
      content:
        "We reserve the right to modify these terms at any time. Continued use of the application after such modifications constitutes acceptance of the updated terms.",
    },
    {
      title: "9. Termination",
      content:
        "We reserve the right to terminate or suspend your account and access to the application at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Terms & Conditions</Text>
        <Text style={styles.headerDate}>Last updated: February 6, 2025</Text>
      </View>

      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <Text style={styles.sectionContent}>{section.content}</Text>
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Contact us at legal@mammaryprotect.com for any questions regarding
          these terms.
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
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  headerDate: {
    marginTop: 5,
    color: "#666",
  },
  section: {
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#666",
    textAlign: "center",
  },
});
