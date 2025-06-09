import { useScreening } from "@/components/context/ScreeningContext";
import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";
import MicButton from "@/components/ui/MicButton";
import ProgressBar from "@/components/ui/ProgressBar";
import SpeakerButton from "@/components/ui/SpeakerButton";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function ScreeningAdvance() {
  const router = useRouter();
  const [showNext, setShowNext] = useState(false);
  const [showMic, setShowMic] = useState(true);
  const { 
    wordTest,
    currentWordIndex,
    setCurrentWordIndex,
    isLoading
  } = useScreening();

  const handleMicFinish = () => {
    if (currentWordIndex < wordTest.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setShowMic(true);
      setShowNext(false);
    } else {
      setShowNext(true);
      setShowMic(false);
    }
  };

  if (isLoading || wordTest.length === 0) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#8800cc" />
      </View>
    );
  }

  const currentWord = wordTest[currentWordIndex];
  const progress = (currentWordIndex + 1) / wordTest.length;

  return (
    <View style={styles.container}>
      {/* Header: Back Button & Progress Bar */}
      <View style={styles.headerRow}>
        <BackButton onPress={() => router.replace("/home/screening-instruction")} />
        <ProgressBar progress={progress} style={styles.progressBar} variant="gradient" />
      </View>

      {/* Word Card */}
      <View style={styles.wordCard}>
        <Text style={styles.wordText}>{currentWord}</Text>
        <SpeakerButton style={styles.speakerIcon} />
      </View>

      {/* Tap to start text */}
      {showMic && <Text style={styles.tapText}>Tap untuk memulai</Text>}

      {/* Microphone Button */}
      {showMic && (
        <MicButton 
          onFinish={handleMicFinish} 
          expectedWord={currentWord}
          testType="word"
        />
      )}

      {/* Button Lanjut */}
      {showNext && (
        <Button 
          onPress={() => router.replace("/home/screening-report")} 
          backgroundColor="#8800cc" 
          borderRadius={16} 
          style={{ position: "absolute", bottom: 40, left: 24, right: 24 }}
        >
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
  centered: {
    justifyContent: "center",
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
