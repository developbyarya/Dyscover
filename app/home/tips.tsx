import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TipsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Ionicons name="close" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Big Number */}
      <Text style={styles.bigNumber}>1/10</Text>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.tipsLabel}>Tips</Text>
        <Text style={styles.tipsTitle}>Istirahat Teratur</Text>
        <Text style={styles.tipsDesc}>Setelah 10–15 menit membaca, berikan waktu istirahat singkat untuk mengurangi kelelahan berpikir.</Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navRow}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF1FF",
    alignItems: "center",
    paddingTop: 40,
  },
  closeButton: {
    position: "absolute",
    top: 48,
    left: 24,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#8300BA",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  bigNumber: {
    position: "absolute",
    top: 90,
    alignSelf: "center",
    fontSize: 80,
    color: "#E3C6F7",
    fontWeight: "bold",
    opacity: 0.7,
    fontFamily: "PlusJakartaSans",
    zIndex: 1,
  },
  card: {
    marginTop: 120,
    width: "88%",
    backgroundColor: "#fff",
    borderRadius: 32,
    padding: 28,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
    zIndex: 2,
  },
  tipsLabel: {
    color: "#8300BA",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: "PlusJakartaSans",
  },
  tipsTitle: {
    color: "#222",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "PlusJakartaSans",
  },
  tipsDesc: {
    color: "#666",
    fontSize: 16,
    fontFamily: "PlusJakartaSans",
    lineHeight: 22,
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    gap: 24,
  },
  navButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#B266E4",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
});
