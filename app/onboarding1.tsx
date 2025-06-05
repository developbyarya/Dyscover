import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NextButton from "../components/ui/NextButton";
import ProgressBar from "../components/ui/ProgressBar";

export default function Onboarding1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <ProgressBar progress={0.25} style={{ marginRight: 16 }} />
        <TouchableOpacity onPress={() => router.replace("/welcome")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Deteksi Disleksia{"\n"}
          <Text style={styles.highlight}>Sejak Dini</Text>
        </Text>
        <Text style={styles.desc}>Kenali risiko disleksia sejak awal melalui skrining cepat dan akurat.</Text>
      </View>

      <View style={styles.illustrationContainer}>
        <Image source={require("../assets/images/doctor-blob.png")} style={styles.blob} resizeMode="contain" />
        <Image source={require("../assets/images/doctor-illustration.png")} style={styles.illustration} resizeMode="contain" />
      </View>

      <NextButton onPress={() => router.replace("/onboarding2")} />
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
  progressBarBg: {
    flex: 1,
    width: 191,
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
    width: 370,
    height: 88,
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
  blob: {
    position: "absolute",
    width: 400.66,
    height: 600,
    marginTop: 80,
    marginLeft: -30,
    // transform: [{ rotate: "-180deg" }],
    zIndex: 0,
  },
  illustration: {
    width: 331.53,
    height: 515,
    marginTop: 50,
    marginLeft: -140,
    zIndex: 1,
  },
});
