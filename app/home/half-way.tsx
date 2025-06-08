import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HalfWayScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <BackButton onPress={() => router.push("/home/screening")} />
      </View>

      {/* Title & Subtitle Container */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Kamu Sudah{"\n"}Setengah Jalan! 🎉</Text>
        <Text style={styles.subtitle}>
          Tahap berikutnya:{"\n"}Penilaian Membaca{"\n"}Sesuai Tingkat Kelas
        </Text>
      </View>

      {/* Illustration */}
      <View style={{ width: 500, height: 307, alignItems: "center", justifyContent: "center", position: "relative", marginBottom: 40 }}>
        <Image source={require("../../assets/images/halfway-illustration.png")} style={styles.illustration} resizeMode="contain" />
        <Image source={require("../../assets/images/confetti.png")} style={styles.confetti} resizeMode="contain" />
      </View>

      {/* Lanjut Button */}
      <Button style={{ position: "absolute", bottom: 40 }} onPress={() => router.replace("/home/screening-advance")} backgroundColor="#8800cc" borderRadius={16}>
        Lanjut
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 24,
    justifyContent: "flex-end",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 40,
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 24,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#8300BA",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  backIcon: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 100,
  },
  title: {
    color: "#8300BA",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 24,
    fontFamily: "PlusJakartaSans",
  },
  subtitle: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    fontFamily: "PlusJakartaSans",
  },
  illustration: {
    width: 500,
    height: 307,
  },
  // button: {
  //   width: "100%",
  //   backgroundColor: "#8300BA",
  //   borderRadius: 16,
  //   paddingVertical: 18,
  //   alignItems: "center",
  //   marginBottom: 40,
  // },
  buttonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "PlusJakartaSans",
  },
  confetti: {
    position: "absolute",
    top: -40,
    left: 0,
    width: 411.64,
    height: 260.52,
    zIndex: 2,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 80,
  },
});
