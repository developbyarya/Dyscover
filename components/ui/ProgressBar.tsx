import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type ProgressBarProps = {
  progress: number; // 0..1
  style?: ViewStyle;
  variant?: "default" | "gradient";
};

export default function ProgressBar({ progress, style, variant = "default" }: ProgressBarProps) {
  return (
    <View style={[variant === "gradient" ? styles.bgGradient : styles.bgDefault, style]}>
      {variant === "gradient" ? (
        <LinearGradient colors={["#8300BA", "#FDCA40"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.fill, { width: `${progress * 100}%` }]} />
      ) : (
        <View style={[styles.fillDefault, { width: `${progress * 100}%` }]} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  bgDefault: {
    width: 191,
    height: 8,
    backgroundColor: "#a259d9",
    borderRadius: 4,
    overflow: "hidden",
  },
  fillDefault: {
    height: 8,
    backgroundColor: "#FFD233",
    borderRadius: 4,
  },
  bgGradient: {
    width: "100%",
    height: 8,
    backgroundColor: "#CCCCCC",
    borderRadius: 4,
    overflow: "hidden",
  },
  fill: {
    height: 8,
    borderRadius: 4,
  },
});
