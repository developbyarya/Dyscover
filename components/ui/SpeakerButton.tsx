import React from "react";
import { Image, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

const speakerButtonImg = require("../../assets/images/volume-high.png");

interface SpeakerButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
}

export default function SpeakerButton({ onPress, style }: SpeakerButtonProps) {
  return (
    <TouchableOpacity style={[styles.speakerButton, style]} onPress={onPress} activeOpacity={0.8}>
      <Image source={speakerButtonImg} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  speakerButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: {
    width: 40,
    height: 40,
  },
});
