import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NextButton from "../../components/ui/NextButton";
import ProgressBar from "../../components/ui/ProgressBar";

export default function Onboarding3() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Progress Bar & Skip */}
      <View style={styles.topRow}>
        <ProgressBar progress={1} style={{ marginRight: 16 }} />
        <TouchableOpacity onPress={() => router.replace("/home/page")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Title & Description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Belajar Jadi <Text style={styles.highlight}>Seru</Text>
        </Text>
        <Text style={styles.desc}>Permainan edukatif untuk membantu anak melatih kemampuan membaca, fokus, dan memori secara menyenangkan.</Text>
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image source={require("../../assets/images/learn-blob.png")} style={styles.blob} resizeMode="contain" />
        <Image source={require("../../assets/Icons/a-icon.png")} style={styles.aIcon} resizeMode="contain" />
        <Image source={require("../../assets/Icons/i-icon.png")} style={styles.iIcon} resizeMode="contain" />
        <Image source={require("../../assets/Icons/o-icon.png")} style={styles.oIcon} resizeMode="contain" />
        <Image source={require("../../assets/Icons/u-icon.png")} style={styles.uIcon} resizeMode="contain" />
        <Image source={require("../../assets/Icons/apple-icon.png")} style={styles.appleIcon} resizeMode="contain" />
        <Image source={require("../../assets/Icons/elephant-icon.png")} style={styles.elephantIcon} resizeMode="contain" />
        {/* Ilustrasi anak belajar di depan */}
        <Image source={require("../../assets/images/learn-illustration.png")} style={styles.illustration} resizeMode="contain" />
      </View>

      {/* Next Button */}
      <NextButton onPress={() => router.replace("/home/page")} />
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
    width: 359.87,
    height: 482.59,
    marginTop: 100,
    marginLeft: -130,
    zIndex: 1,
  },
  blob: {
    position: "absolute",
    width: 769.37,
    height: 583.81,
    marginTop: 140,
    marginLeft: -10,
    // transform: [{ rotate: "-180deg" }],
    zIndex: 0,
  },
  aIcon: {
    position: "absolute",
    top: 1,
    left: 146,
    width: 40.73,
    height: 44.66,
    zIndex: 2,
  },
  iIcon: {
    position: "absolute",
    top: 285,
    right: 30,
    width: 13.71,
    height: 39,
    zIndex: 2,
  },
  oIcon: {
    position: "absolute",
    top: 200,
    left: 150,
    width: 40.73,
    height: 44.66,
    zIndex: 2,
  },
  uIcon: {
    position: "absolute",
    top: 90,
    right: 10,
    width: 25.19,
    height: 31.26,
    zIndex: 2,
  },
  appleIcon: {
    position: "absolute",
    top: 60,
    right: 70,
    width: 91.16,
    height: 96.86,
    zIndex: 2,
  },
  elephantIcon: {
    position: "absolute",
    top: 170,
    right: -10,
    width: 109.1,
    height: 113.38,
    zIndex: 2,
  },
});
