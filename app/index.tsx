// import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  // const [fontsLoaded] = useFonts({
  //   "PlusJakartaSans-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
  // });

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/welcome");
    }, 2000); // 2 detik
    return () => clearTimeout(timer);
  }, [router]);

  // if (!fontsLoaded) {
  //   return null; // Atau tampilkan loader sederhana
  // }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8800cc" />
      {/* Jika ingin logo, aktifkan baris di bawah */}
      {/* <Image source={require('../assets/images/splash-icon.png')} style={styles.logo} /> */}
      <Text style={styles.splash}>Dyscover</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8300BA",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  splash: {
    color: "#fff",
    fontSize: 48,
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
  },
});
