import { useScreening } from "@/components/context/ScreeningContext";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScreeningResult() {
  const router = useRouter();
  const { scores, getAccuracy, alphabetTest, wordTest } = useScreening();
  const accuracy = Math.round(getAccuracy());
  
  // Filter out empty results and calculate statistics
  const validScores = scores.filter(score => score.word.trim() !== '');
  const correctAnswers = validScores.filter(score => score.isCorrect).length;
  const totalExpected = alphabetTest.length + wordTest.length;
  
  const currentDate = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <View style={styles.container}>
      {/* Header Gradient */}
      <View style={styles.headerGradient}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Image source={require("../../assets/Icons/back.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hasil Screening</Text>
        <Text style={styles.headerDate}>{currentDate}</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Image source={require("../../assets/Icons/share.png")} style={styles.shareIcon} />
        </TouchableOpacity>
        {/* Circular Progress */}
        <View style={styles.progressCircleContainer}>
          <View style={styles.progressCircleBg} />
          <View style={[styles.progressCircleFg, { transform: [{ rotate: `${accuracy * 3.6}deg` }] }]} />
          <Text style={styles.progressText}>{accuracy}%</Text>
        </View>
        {/* Score & Time */}
        <View style={styles.scoreRow}>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreText}>{correctAnswers}/{totalExpected} Benar</Text>
          </View>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreText}>10 Menit</Text>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Explanation Box */}
        <View style={styles.explanationBox}>
          <Text style={styles.explanationText}>
            Seorang anak pada kelompok usia ini diharapkan dapat membaca kata-kata dengan akurasi <Text style={{ fontWeight: "bold" }}>90%</Text>. Indra membaca kata-kata dengan akurasi <Text style={{ fontWeight: "bold" }}>{accuracy}%</Text>.
          </Text>
        </View>

        {/* Risiko */}
        <Text style={styles.sectionTitle}>Tingkat Risiko</Text>
        <View style={[styles.riskBadge, { backgroundColor: accuracy >= 80 ? "#FFD233" : "#FF3B3B" }]}>
          <Text style={styles.riskText}>{accuracy >= 80 ? "Rendah" : "Tinggi"}</Text>
        </View>

        {/* Detailed Results */}
        <Text style={styles.sectionTitle}>Detail Hasil</Text>
        <View style={styles.explanationBox}>
          <Text style={styles.detailText}>
            Tes Alfabet: {validScores.filter(s => s.type === 'alphabet' && s.isCorrect).length}/{alphabetTest.length} benar
          </Text>
          <Text style={styles.detailText}>
            Tes Kata: {validScores.filter(s => s.type === 'word' && s.isCorrect).length}/{wordTest.length} benar
          </Text>
        </View>

        {/* Langkah Selanjutnya */}
        <Text style={styles.sectionTitle}>Langkah Selanjutnya</Text>
        <View style={styles.nextSteps}>
          <View style={styles.stepRow}>
            <Text style={styles.stepText}>Gunakan fitur gamifikasi untuk melatih kesadaran fonemik dan pengenalan huruf secara rutin.</Text>
          </View>
          <View style={styles.stepRow}>
            <Text style={styles.stepText}>Lakukan skrining ulang setelah 4 minggu latihan untuk memantau perkembangan.</Text>
          </View>
          <View style={styles.stepRow}>
            <Text style={styles.stepText}>Pertimbangkan untuk berkonsultasi dengan spesialis atau psikolog anak untuk evaluasi lebih mendalam.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerGradient: {
    backgroundColor: "#A259FF",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 48,
    paddingHorizontal: 24,
    paddingBottom: 32,
    alignItems: "center",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: 48,
    left: 24,
    width: 44,
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  backIcon: {
    width: 10,
    height: 17.14,
    tintColor: "#A259FF",
  },
  shareButton: {
    position: "absolute",
    top: 48,
    right: 24,
    width: 44,
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  shareIcon: {
    width: 24,
    height: 24,
    tintColor: "#A259FF",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 12,
    fontFamily: "PlusJakartaSans",
    textAlign: "center",
  },
  headerDate: {
    color: "#fff",
    fontSize: 18,
    marginTop: 4,
    marginBottom: 12,
    fontFamily: "PlusJakartaSans",
    textAlign: "center",
  },
  progressCircleContainer: {
    width: 140,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 12,
  },
  progressCircleBg: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 12,
    borderColor: "#FFD23333",
  },
  progressCircleFg: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 12,
    borderColor: "#FFD233",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    transform: [{ rotate: "45deg" }],
  },
  progressText: {
    color: "#FFD233",
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "PlusJakartaSans",
    textAlign: "center",
  },
  scoreRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    gap: 12,
  },
  scoreBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginHorizontal: 6,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  scoreIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
    tintColor: "#A259FF",
  },
  scoreText: {
    color: "#222",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "PlusJakartaSans",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  explanationBox: {
    backgroundColor: "#E9CFFF",
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 24,
    padding: 16,
  },
  explanationText: {
    color: "#8300BA",
    fontSize: 16,
    fontFamily: "PlusJakartaSans",
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginTop: 28,
    marginLeft: 24,
    fontFamily: "PlusJakartaSans",
  },
  riskBadge: {
    backgroundColor: "#FFD233",
    alignSelf: "flex-start",
    marginLeft: 24,
    marginTop: 8,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  riskText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "PlusJakartaSans",
  },
  nextSteps: {
    marginTop: 12,
    marginHorizontal: 24,
    gap: 16,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  stepIcon: {
    width: 28,
    height: 28,
    marginRight: 12,
    tintColor: "#A259FF",
  },
  stepText: {
    flex: 1,
    color: "#222",
    fontSize: 16,
    fontFamily: "PlusJakartaSans",
  },
  detailText: {
    color: "#8300BA",
    fontSize: 16,
    fontFamily: "PlusJakartaSans",
    marginBottom: 8,
  }
});
