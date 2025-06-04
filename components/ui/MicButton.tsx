import React from "react";
import { Image, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

const recordButtonImg = require("../../assets/images/Record-Button.png");

interface MicButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
}

export default function MicButton({ onPress, style }: MicButtonProps) {
  return (
    <TouchableOpacity style={[styles.micButton, style]} onPress={onPress} activeOpacity={0.8}>
      <Image source={recordButtonImg} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  micButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: {
    width: 120,
    height: 120,
  },
});
