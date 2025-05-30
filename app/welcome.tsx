import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Selamat Datang{"\n"}di <Text style={styles.brand}>Dyscover</Text>
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => {
          // Ganti '/home' dengan halaman utama Anda
          router.replace("/onboarding1");
        }}>
        <Text style={styles.buttonText}>Mulai</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Sudah punya akun?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => {
            // Ganti '/login' dengan halaman login Anda
            router.replace("/login");
          }}>
          Masuk
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8300BA",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 60,
  },
  title: {
    color: "#fff",
    fontSize: 36,
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    lineHeight: 40,
    letterSpacing: 0,
    textAlign: "center",
    width: 279,
    height: 80,
    // marginTop: 102,
    marginLeft: 61,
    marginBottom: 350,
    alignSelf: "flex-start",
  },
  brand: {
    color: "#FFD233",
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#FFD233",
    borderRadius: 19,
    width: 320,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    alignSelf: "center",
    shadowColor: "#FFD233",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  buttonText: {
    color: "#8800cc",
    fontSize: 24,
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "PlusJakartaSans",
    marginTop: 8,
  },
  loginLink: {
    color: "#FFD233",
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
  },
});
