import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NextButton from "../components/ui/NextButton";

export default function Onboarding1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Progress Bar & Skip */}
      <View style={styles.topRow}>
        <View style={styles.progressBarBg}>
          <View style={styles.progressBarFill} />
        </View>
        <TouchableOpacity onPress={() => router.replace("/welcome")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Title & Description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Deteksi Disleksia{"\n"}
          <Text style={styles.highlight}>Sejak Dini</Text>
        </Text>
        <Text style={styles.desc}>Kenali risiko disleksia sejak awal melalui skrining cepat dan akurat.</Text>
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        {/* Ganti source dengan ilustrasi dokter Anda jika ada */}
        <Image source={require("../assets/images/doctor-illustration.png")} style={styles.illustration} resizeMode="contain" />
      </View>

      {/* Next Button */}
      <NextButton onPress={() => router.replace("/onboarding2")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8800cc",
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: "#a259d9",
    borderRadius: 4,
    marginRight: 16,
    overflow: "hidden",
  },
  progressBarFill: {
    width: "25%",
    height: 8,
    backgroundColor: "#FFD233",
    borderRadius: 4,
  },
  skip: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "PlusJakartaSans",
    fontWeight: "400",
  },
  textContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    lineHeight: 40,
    marginBottom: 8,
  },
  highlight: {
    color: "#FFD233",
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
  },
  desc: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "PlusJakartaSans",
    marginTop: 8,
    marginBottom: 8,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  illustration: {
    width: "100%",
    height: 280,
    marginBottom: 16,
  },
});
