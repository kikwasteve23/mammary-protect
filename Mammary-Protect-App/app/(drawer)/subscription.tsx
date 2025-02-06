import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const plans = {
    free: {
      name: "Free",
      price: "$0",
      period: "/month",
      features: [
        "Basic health tips",
        "Limited articles access",
        "Community support",
      ],
      color: "#67c23a",
    },
    monthly: {
      name: "Premium Monthly",
      price: "$9.99",
      period: "/month",
      features: [
        "All health tips & articles",
        "Personalized reminders",
        "Expert consultation",
        "Priority support",
      ],
      color: "#409eff",
    },
    yearly: {
      name: "Premium Yearly",
      price: "$89.99",
      period: "/year",
      features: [
        "All Premium features",
        "Save 25%",
        "Exclusive webinars",
        "Health tracking tools",
        "Family account sharing",
      ],
      color: "#9c27b0",
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Choose Your Plan</Text>
        <Text style={styles.headerSubtitle}>
          Get access to premium features
        </Text>
      </View>

      {Object.entries(plans).map(([key, plan]) => (
        <TouchableOpacity
          key={key}
          style={[
            styles.planCard,
            selectedPlan === key && styles.selectedPlan,
            { borderColor: plan.color },
          ]}
          onPress={() => setSelectedPlan(key)}
        >
          <View style={styles.planHeader}>
            <Text style={[styles.planName, { color: plan.color }]}>
              {plan.name}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{plan.price}</Text>
              <Text style={styles.period}>{plan.period}</Text>
            </View>
          </View>

          <View style={styles.featuresContainer}>
            {plan.features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color={plan.color}
                />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.subscribeButton,
          { backgroundColor: plans[selectedPlan].color },
        ]}
        onPress={() => console.log(`Subscribe to ${selectedPlan} plan`)}
      >
        <Text style={styles.subscribeText}>Subscribe Now</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Secure payment powered by Stripe</Text>
        <Text style={styles.terms}>
          By subscribing you agree to our Terms & Conditions
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
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  planCard: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  selectedPlan: {
    transform: [{ scale: 1.02 }],
  },
  planHeader: {
    marginBottom: 15,
  },
  planName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  period: {
    fontSize: 16,
    color: "#666",
    marginLeft: 4,
  },
  featuresContainer: {
    marginTop: 15,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#666",
  },
  subscribeButton: {
    margin: 15,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  subscribeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#666",
    marginBottom: 10,
  },
  terms: {
    color: "#999",
    fontSize: 12,
  },
});
