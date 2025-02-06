import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerType: "front",
        drawerStyle: {
          width: 280,
        },
      }}
    >
      {/* Main tabs section */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          title: "Mammary Protect",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Profile screen - make sure profile.js exists in (drawer) folder */}
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Settings screen - make sure settings.js exists in (drawer) folder */}
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: "About",
          title: "About",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="healthtips"
        options={{
          drawerLabel: "Health Tips",
          title: "Health Tips",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="medical-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="subscription"
        options={{
          drawerLabel: "Subscription",
          title: "Subscription Plans",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="card-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="t&c"
        options={{
          drawerLabel: "Terms & Conditions",
          title: "Terms & Conditions",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
