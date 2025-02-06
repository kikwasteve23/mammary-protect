import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HealthTips() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const healthTips = {
    "Breast Health": [
      {
        title: "Monthly Self-Examination",
        content:
          "Perform breast self-exams at the same time each month. Look for changes in size, shape, or feel.",
      },
      {
        title: "Mammogram Schedule",
        content: "Women over 40 should get mammograms every 1-2 years.",
      },
      {
        title: "Wear Proper Support",
        content: "Use well-fitted bras to maintain breast health and comfort.",
      },
    ],
    Lifestyle: [
      {
        title: "Exercise Regularly",
        content:
          "30 minutes of moderate exercise daily can reduce breast cancer risk.",
      },
      {
        title: "Maintain Healthy Weight",
        content: "Keep BMI within healthy range through diet and exercise.",
      },
      {
        title: "Limit Alcohol",
        content: "Reduce alcohol consumption to lower breast cancer risk.",
      },
    ],
    Nutrition: [
      {
        title: "Eat Antioxidant-Rich Foods",
        content:
          "Include berries, leafy greens, and citrus fruits in your diet.",
      },
      {
        title: "Increase Fiber Intake",
        content: "Consume whole grains, legumes, and vegetables.",
      },
      {
        title: "Healthy Fats",
        content: "Include omega-3 rich foods like fish, nuts, and olive oil.",
      },
    ],
    "Warning Signs": [
      {
        title: "Unusual Changes",
        content: "Watch for lumps, swelling, or skin changes.",
      },
      {
        title: "Nipple Changes",
        content: "Note any discharge, pain, or direction changes.",
      },
      {
        title: "When to See Doctor",
        content: "Consult if you notice any persistent changes.",
      },
    ],
  };

  const CategoryCard = ({ title, tips }) => (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.categoryHeader}
        onPress={() =>
          setExpandedCategory(expandedCategory === title ? null : title)
        }
      >
        <Text style={styles.categoryTitle}>{title}</Text>
        <Ionicons
          name={expandedCategory === title ? "chevron-up" : "chevron-down"}
          size={24}
          color="#BC37FA"
        />
      </TouchableOpacity>

      {expandedCategory === title && (
        <View style={styles.tipsContainer}>
          {tips.map((tip, index) => (
            <View key={index} style={styles.tipItem}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipContent}>{tip.content}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="medical" size={40} color="#FF69B4" />
        <Text style={styles.headerTitle}>Health Tips</Text>
        <Text style={styles.headerSubtitle}>
          Your guide to better breast health
        </Text>
      </View>

      {Object.entries(healthTips).map(([category, tips]) => (
        <CategoryCard key={category} title={category} tips={tips} />
      ))}

      <TouchableOpacity style={styles.emergencyButton}>
        <Ionicons name="alert-circle" size={24} color="#fff" />
        <Text style={styles.emergencyText}>Emergency Contact</Text>
      </TouchableOpacity>
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
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  tipsContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  tipItem: {
    marginBottom: 15,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
    marginBottom: 5,
  },
  tipContent: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  emergencyButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BC37FA",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  emergencyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
