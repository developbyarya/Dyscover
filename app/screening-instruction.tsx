import BackButton from "@/components/ui/BackButton";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScreeningInstruction() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <BackButton onPress={() => router.replace("/welcome")} />
        <Text style={styles.headerTitle}>Screening</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Info Box */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Sebelum memulai skrining, mohon baca petunjuk berikut dengan teliti agar hasil pengukuran akurat <Text style={styles.red}>!</Text>
        </Text>
      </View>

      {/* Instructions */}
      <View style={styles.instructions}>
        <View style={styles.instructionRow}>
          <Text style={styles.instructionNumber}>1.</Text>

          <Text style={styles.instructionTextOne}>Skrining ini akan memakan waktu sekitar 5–10 menit dan terdiri dari dua bagian : Quick Screening (Tes Baca Ucapan) dan Grade-Level Reading (Penilaian Tingkat Kelas).</Text>
        </View>
        <View style={styles.instructionRow}>
          <Text style={styles.instructionNumber}>2.</Text>
          <Text style={styles.instructionText}>Anda akan ditampilkan rangkaian kata nyata dan kata tidak bermakna (nonsense words) satu per satu</Text>
        </View>
        <View style={styles.instructionRow}>
          <Text style={styles.instructionNumber}>3.</Text>

          <Text style={styles.instructionText}>Rekam hanya pelafalan pertama. Anda bisa menjawab “Saya tidak tahu” atau tidak merespons dalam 10 detik akan dicatat sebagai kesalahan.</Text>
        </View>
      </View>

      {/* Mulai Button */}
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => router.replace("/screening")}>
        <Text style={styles.buttonText}>Mulai</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  backButton: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "#EDE6F6",
  },
  headerTitle: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    fontSize: 32,
    color: "#8800cc",
    textAlign: "center",
  },
  infoBox: {
    backgroundColor: "#E1B8F7",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    alignItems: "center",
  },
  infoText: {
    color: "#8800cc",
    fontFamily: "PlusJakartaSans",
    fontWeight: "800",
    fontSize: 16,
    textAlign: "center",
  },
  red: {
    color: "#FF3B3B",
    fontWeight: "700",
  },
  instructions: {
    marginBottom: 32,
  },
  instructionRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  instructionNumber: {
    color: "#222",
    fontFamily: "PlusJakartaSans",
    fontSize: 16,
    marginRight: 8,
    marginTop: -1,
  },
  instructionText: {
    color: "#222",
    fontFamily: "PlusJakartaSans",
    fontSize: 16,
    flex: 1,
    lineHeight: 22,
    marginLeft: 1,
  },
  instructionTextOne: {
    color: "#222",
    fontSize: 16,
    fontFamily: "PlusJakartaSans",
    marginLeft: 5,
    marginRight: 11,
  },
  button: {
    backgroundColor: "#8800cc",
    borderRadius: 16,
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 32,
    left: 24,
    right: 24,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    fontSize: 24,
  },
});
