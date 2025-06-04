import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type ProgressBarProps = {
  progress: number; // nilai antara 0 dan 1, misal 0.25, 0.5, 1
  style?: ViewStyle;
};

export default function ProgressBar({ progress, style }: ProgressBarProps) {
  return (
    <View style={[styles.bg, style]}>
      <View style={[styles.fill, { width: `${progress * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: 191,
    height: 8,
    backgroundColor: "#a259d9",
    borderRadius: 4,
    overflow: "hidden",
    flex: undefined,
  },
  fill: {
    height: 8,
    backgroundColor: "#FFD233",
    borderRadius: 4,
  },
});
