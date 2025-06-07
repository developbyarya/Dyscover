import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NextButton from "../../components/ui/NextButton";
import ProgressBar from "../../components/ui/ProgressBar";

export default function Onboarding2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Progress Bar & Skip */}
      <View style={styles.topRow}>
        <ProgressBar progress={0.5} style={{ marginRight: 16 }} />
        <TouchableOpacity onPress={() => router.replace("/welcome")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Title & Description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Teknologi <Text style={styles.highlight}>Cerdas</Text>
        </Text>
        <Text style={styles.desc}>Didukung AI dari Microsoft Azure, Dyscover memberi hasil skrining yang lebih personal, adaptif, dan akurat.</Text>
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        {/* Heart Icon */}
        <Image source={require("../../assets/images/heart-icon.png")} style={styles.heartIcon} resizeMode="contain" />
        {/* Green Icon */}
        <Image source={require("../../assets/Icons/green-icon.png")} style={styles.greenIcon} resizeMode="contain" />
        <Image source={require("../../assets/images/robot-blob.png")} style={styles.blob} resizeMode="contain" />
        {/* Ilustrasi robot di tengah */}
        <Image source={require("../../assets/images/robot-illustration.png")} style={styles.illustration} resizeMode="contain" />
      </View>

      {/* Next Button */}
      <NextButton onPress={() => router.replace("/onboarding/onboarding3")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8300BA",
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  skip: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "PlusJakartaSans",
    fontWeight: "500",
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "center",
    marginBottom: 4,
  },
  textContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    color: "#fff",
    fontSize: 36,
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    lineHeight: 40,
    letterSpacing: 0,
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
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
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
    width: 331.53,
    height: 515,
    marginTop: 80,
    marginLeft: -100,
    zIndex: 1,
  },
  blob: {
    position: "absolute",
    width: 500.66,
    height: 560,
    marginTop: 90,
    marginLeft: -10,
    // transform: [{ rotate: "-180deg" }],
    zIndex: 0,
  },
  heartIcon: {
    position: "absolute",
    top: 180,
    left: 230,
    width: 77.1,
    height: 64.3,
    zIndex: 2,
  },
  greenIcon: {
    position: "absolute",
    top: 50,
    left: 150,
    width: 77.1,
    height: 64.2,
    zIndex: 2,
  },
});
