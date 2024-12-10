import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  // State for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle the form submission
  const handleRegister = () => {
    // Basic form validation
    if (!fullName || !email || !country || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // Simulate registration success (Replace with your API call)
    Alert.alert("Success", "You have successfully registered!");

    // After successful registration, navigate to login screen
    router.push("/login");
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.textHeader}>
          Join Mammary Protect today and take the first step towards advanced,
          user-friendly breast cancer screening from the comfort of your home
        </Text>
        {/* Full Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Country Selector */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Country</Text>
          <Picker
            selectedValue={country}
            style={styles.input}
            onValueChange={(itemValue) => setCountry(itemValue)}
          >
            <Picker.Item label="United States" value="US" />
            <Picker.Item label="India" value="IN" />
            <Picker.Item label="Canada" value="CA" />
            <Picker.Item label="United Kingdom" value="UK" />
          </Picker>
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Confirm Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <Text style={styles.textTerms}>
          By clicking submit you agree to the terms and conditions for Mammary
          protect
        </Text>

        {/* Register Button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        {/* Link to Login Page */}
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 15,
  },
  text: {
    color: "#222",
  },
  textHeader: {
    textAlign: "center",
    fontSize: 16,
    paddingBottom: 10,
    marginBottom: 15,
  },
  textTerms: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "#BC37FA",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    width: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 5,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    backgroundColor: "#fafafa",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  linkText: {
    color: "#BC37FA",
    textAlign: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
