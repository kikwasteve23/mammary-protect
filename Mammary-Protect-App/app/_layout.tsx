import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="login" options={{ title: "Mammary Protect" }} />
    <Stack.Screen name="register" options={{ title: "Mammary Protect" }} />
    <Stack.Screen 
      name="(drawer)" 
      options={{ headerShown: false }} 
    />
    <Stack.Screen name="+not-found" />
  </Stack>
  );
}
