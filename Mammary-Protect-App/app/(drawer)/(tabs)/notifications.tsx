import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "reminder",
      title: "Monthly Check-up Reminder",
      message: "It's time for your monthly self-examination",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "2",
      type: "appointment",
      title: "Appointment Confirmed",
      message: "Your appointment is scheduled for March 15, 2025",
      time: "1 day ago",
      read: true,
    },
    {
      id: "3",
      type: "tips",
      title: "New Health Tip Available",
      message: "Check out our latest article on breast health",
      time: "2 days ago",
      read: false,
    },
  ]);

  const getIcon = (type) => {
    switch (type) {
      case "reminder":
        return "alarm-outline";
      case "appointment":
        return "calendar-outline";
      case "tips":
        return "bulb-outline";
      default:
        return "notifications-outline";
    }
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((note) =>
        note.id === id ? { ...note, read: true } : note
      )
    );
  };

  const renderNotification = ({ item }) => (
    <TouchableOpacity
      style={[styles.notificationItem, !item.read && styles.unread]}
      onPress={() => markAsRead(item.id)}
    >
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: item.read ? "#e1e1e1" : "#FF69B4" },
        ]}
      >
        <Ionicons
          name={getIcon(item.type)}
          size={24}
          color={item.read ? "#666" : "#fff"}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, !item.read && styles.boldText]}>
          {item.title}
        </Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => setNotifications([])}
        >
          <Text style={styles.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="notifications-off" size={48} color="#ccc" />
            <Text style={styles.emptyText}>No notifications</Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  clearButton: {
    padding: 8,
  },
  clearButtonText: {
    color: "#FF69B4",
    fontSize: 16,
  },
  listContainer: {
    flexGrow: 1,
  },
  notificationItem: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
    marginVertical: 1,
  },
  unread: {
    backgroundColor: "#fff9fc",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  boldText: {
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#999",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  emptyText: {
    marginTop: 10,
    color: "#666",
    fontSize: 16,
  },
});
