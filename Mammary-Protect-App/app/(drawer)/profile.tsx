import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  const userInfo = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phoneNumber: "+1 234 567 8900",
    location: "New York, USA",
  };

  const menuItems = [
    {
      icon: "person-outline",
      title: "Edit Profile",
      onPress: () => console.log("Edit Profile pressed"),
    },
    {
      icon: "lock-closed-outline",
      title: "Change Password",
      onPress: () => console.log("Change Password pressed"),
    },
    {
      icon: "notifications-outline",
      title: "Notifications",
      onPress: () => console.log("Notifications pressed"),
    },
    {
      icon: "shield-outline",
      title: "Privacy Policy",
      onPress: () => console.log("Privacy Policy pressed"),
    },
    {
      icon: "help-circle-outline",
      title: "Help & Support",
      onPress: () => console.log("Help & Support pressed"),
    },
    {
      icon: "log-out-outline",
      title: "Logout",
      onPress: () => router.push("/login"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editImageButton}>
            <Ionicons name="camera" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{userInfo.name}</Text>
        <Text style={styles.email}>{userInfo.email}</Text>
      </View>

      {/* User Info Section */}
      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Ionicons name="call-outline" size={20} color="#666" />
          <Text style={styles.infoText}>{userInfo.phoneNumber}</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="location-outline" size={20} color="#666" />
          <Text style={styles.infoText}>{userInfo.location}</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <View style={styles.menuItemLeft}>
              <Ionicons name={item.icon} size={24} color="#333" />
              <Text style={styles.menuItemText}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#ccc" />
          </TouchableOpacity>
        ))}
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
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 15,
    borderRadius: 50,
    borderColor: "#ddd",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editImageButton: {
    position: "relative",
    right: 0,
    bottom: 0,
    backgroundColor: "#2196F3",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  infoSection: {
    backgroundColor: "#fff",
    padding: 15,
    marginTop: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#666",
  },
  menuSection: {
    backgroundColor: "#fff",
    marginTop: 20,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    marginLeft: 15,
    fontSize: 16,
    color: "#333",
  },
});
