// app/(drawer)/(tabs)/scan-results.js
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ScanResults() {
  const [filter, setFilter] = useState("all");
  const [results] = useState([
    {
      id: "1",
      date: "2025-02-06",
      result: "benign",
      confidence: 95,
      details: "No malignant characteristics detected",
      doctor: "Dr. Smith",
      location: "Left breast, upper quadrant",
    },
    {
      id: "2",
      date: "2025-01-15",
      result: "suspicious",
      confidence: 75,
      details: "Further examination recommended",
      doctor: "Dr. Johnson",
      location: "Right breast, lower quadrant",
    },
  ]);

  const getStatusColor = (result) => {
    switch (result) {
      case "benign":
        return "#4CAF50";
      case "suspicious":
        return "#FFC107";
      case "malignant":
        return "#FF5252";
      default:
        return "#757575";
    }
  };

  const renderResult = ({ item }) => (
    <TouchableOpacity style={styles.resultCard}>
      <View style={styles.resultHeader}>
        <View
          style={[
            styles.statusIndicator,
            { backgroundColor: getStatusColor(item.result) },
          ]}
        >
          <Text style={styles.statusText}>{item.result.toUpperCase()}</Text>
        </View>
        <Text style={styles.date}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
      </View>

      <View style={styles.resultDetails}>
        <View style={styles.detailRow}>
          <Ionicons name="location" size={20} color="#666" />
          <Text style={styles.detailText}>{item.location}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="medical" size={20} color="#666" />
          <Text style={styles.detailText}>{item.doctor}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="analytics" size={20} color="#666" />
          <Text style={styles.detailText}>Confidence: {item.confidence}%</Text>
        </View>
      </View>

      <Text style={styles.details}>{item.details}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        {["all", "benign", "suspicious", "malignant"].map((filterType) => (
          <TouchableOpacity
            key={filterType}
            style={[
              styles.filterButton,
              filter === filterType && styles.activeFilter,
            ]}
            onPress={() => setFilter(filterType)}
          >
            <Text
              style={[
                styles.filterText,
                filter === filterType && styles.activeFilterText,
              ]}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={results.filter(
          (item) => filter === "all" || item.result === filter
        )}
        renderItem={renderResult}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="document" size={48} color="#ccc" />
            <Text style={styles.emptyText}>No scan results found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  filterContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  filterButton: {
    flex: 1,
    padding: 8,
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 4,
  },
  activeFilter: {
    backgroundColor: "#FF69B4",
  },
  filterText: {
    color: "#666",
  },
  activeFilterText: {
    color: "#fff",
  },
  listContainer: {
    padding: 10,
  },
  resultCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  statusIndicator: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#666",
  },
  resultDetails: {
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  detailText: {
    marginLeft: 10,
    color: "#666",
  },
  details: {
    color: "#333",
    fontSize: 14,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
  },
  emptyContainer: {
    alignItems: "center",
    paddingTop: 50,
  },
  emptyText: {
    marginTop: 10,
    color: "#666",
  },
});
