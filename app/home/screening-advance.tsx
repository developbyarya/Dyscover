import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";
import MicButton from "@/components/ui/MicButton";
import ProgressBar from "@/components/ui/ProgressBar";
import SpeakerButton from "@/components/ui/SpeakerButton";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Screening() {
  const router = useRouter();
  const [showNext, setShowNext] = useState(false);
  const [showMic, setShowMic] = useState(true);

  const handleMicFinish = () => {
    setShowNext(true);
    setShowMic(false);
  };

  return (
    <View style={styles.container}>
      {/* Header: Back Button & Progress Bar */}
      <View style={styles.headerRow}>
        <BackButton onPress={() => router.replace("/home/half-way")} />
        <ProgressBar progress={0.5} style={styles.progressBar} variant="gradient" />
      </View>

      {/* Word Card */}
      <View style={styles.wordCard}>
        <Text style={styles.wordText}>Buku</Text>
        <SpeakerButton style={styles.speakerIcon} />
      </View>

      {/* Tap to start text */}
      {showMic && <Text style={styles.tapText}>Tap untuk memulai</Text>}

      {/* Microphone Button */}
      {showMic && <MicButton onFinish={handleMicFinish} />}

      {/* Button Lanjut */}
      {showNext && (
        <Button onPress={() => router.replace("/home/screening-report")} backgroundColor="#8800cc" borderRadius={16} style={{ position: "absolute", bottom: 40 }}>
          Selesai
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
  },
  wordCard: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#8800cc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    position: "relative",
  },
  wordText: {
    fontSize: 96,
    fontFamily: "PlusJakartaSans",
    fontWeight: "600",
    color: "#000",
  },
  speakerIcon: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  tapText: {
    fontSize: 24,
    fontFamily: "PlusJakartaSans",
    fontWeight: "400",
    color: "#aaa",
    marginBottom: 32,
    marginTop: 8,
  },
  micButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#8800cc",
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {
    flex: 1,
    marginLeft: 16,
    height: 8,
    alignSelf: "center",
  },
});
