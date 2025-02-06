// app/register.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as AppleAuthentication from "expo-apple-authentication";

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ValidationErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Register(): React.JSX.Element {
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailRegister = async (): Promise<void> => {
    try {
      if (!validateForm()) return;

      setLoading(true);
      // Add your registration API call here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call

      Alert.alert(
        "Success",
        "Registration successful! Please verify your email.",
        [{ text: "OK", onPress: () => router.push("/login") }]
      );
    } catch (error) {
      Alert.alert("Error", "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async (): Promise<void> => {
    try {
      setLoading(true);
      // Add Google Sign-In logic here
    } catch (error) {
      Alert.alert("Error", "Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookRegister = async (): Promise<void> => {
    try {
      setLoading(true);
      // Add Facebook Sign-In logic here
    } catch (error) {
      Alert.alert("Error", "Facebook sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAppleRegister = async (): Promise<void> => {
    try {
      setLoading(true);
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      // Handle credential
    } catch (error) {
      Alert.alert("Error", "Apple sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderError = (error?: string) => {
    if (!error) return null;
    return <Text style={styles.errorText}>{error}</Text>;
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
      </View>

      <View style={styles.form}>
        <View>
          <View
            style={[
              styles.inputContainer,
              errors.fullName && styles.inputError,
            ]}
          >
            <Ionicons name="person-outline" size={20} color="#666" />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={formData.fullName}
              onChangeText={(text) => {
                setFormData((prev) => ({ ...prev, fullName: text }));
                if (errors.fullName)
                  setErrors((prev) => ({ ...prev, fullName: undefined }));
              }}
              editable={!loading}
            />
          </View>
          {renderError(errors.fullName)}
        </View>

        <View>
          <View
            style={[styles.inputContainer, errors.email && styles.inputError]}
          >
            <Ionicons name="mail-outline" size={20} color="#666" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={formData.email}
              onChangeText={(text) => {
                setFormData((prev) => ({ ...prev, email: text }));
                if (errors.email)
                  setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!loading}
            />
          </View>
          {renderError(errors.email)}
        </View>

        <View>
          <View
            style={[
              styles.inputContainer,
              errors.password && styles.inputError,
            ]}
          >
            <Ionicons name="lock-closed-outline" size={20} color="#666" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={formData.password}
              onChangeText={(text) => {
                setFormData((prev) => ({ ...prev, password: text }));
                if (errors.password)
                  setErrors((prev) => ({ ...prev, password: undefined }));
              }}
              secureTextEntry={!showPassword}
              editable={!loading}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              disabled={loading}
            >
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#666"
              />
            </TouchableOpacity>
          </View>
          {renderError(errors.password)}
        </View>

        <View>
          <View
            style={[
              styles.inputContainer,
              errors.confirmPassword && styles.inputError,
            ]}
          >
            <Ionicons name="lock-closed-outline" size={20} color="#666" />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChangeText={(text) => {
                setFormData((prev) => ({ ...prev, confirmPassword: text }));
                if (errors.confirmPassword)
                  setErrors((prev) => ({
                    ...prev,
                    confirmPassword: undefined,
                  }));
              }}
              secureTextEntry={!showPassword}
              editable={!loading}
            />
          </View>
          {renderError(errors.confirmPassword)}
        </View>

        <TouchableOpacity
          style={[styles.registerButton, loading && styles.disabledButton]}
          onPress={handleEmailRegister}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.registerButtonText}>Register</Text>
          )}
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialButtons}>
          <TouchableOpacity
            style={[styles.socialButton, styles.googleButton]}
            onPress={handleGoogleRegister}
            disabled={loading}
          >
            <Ionicons name="logo-google" size={24} color="#DB4437" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialButton, styles.facebookButton]}
            onPress={handleFacebookRegister}
            disabled={loading}
          >
            <Ionicons name="logo-facebook" size={24} color="#4267B2" />
          </TouchableOpacity>

          {AppleAuthentication.isAvailableAsync() && (
            <TouchableOpacity
              style={[styles.socialButton, styles.appleButton]}
              onPress={handleAppleRegister}
              disabled={loading}
            >
              <Ionicons name="logo-apple" size={24} color="#000" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => router.push("/login")}
            disabled={loading}
          >
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
    height: 50,
  },
  inputError: {
    borderColor: "#FF4444",
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  errorText: {
    color: "#FF4444",
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 10,
  },
  registerButton: {
    backgroundColor: "#FF69B4",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  disabledButton: {
    opacity: 0.7,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  orText: {
    marginHorizontal: 10,
    color: "#666",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  googleButton: {
    backgroundColor: "#fff",
  },
  facebookButton: {
    backgroundColor: "#fff",
  },
  appleButton: {
    backgroundColor: "#fff",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  loginText: {
    color: "#666",
  },
  loginLink: {
    color: "#FF69B4",
    fontWeight: "bold",
  },
});
