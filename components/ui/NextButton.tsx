import React from "react";
import { Image, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

// Pastikan path dan nama file gambar benar
const arrowImage = require("../../assets/Icons/Solid arrow right.png");

type NextButtonProps = {
  onPress: () => void;
  style?: ViewStyle;
};

export default function NextButton({ onPress, style }: NextButtonProps) {
  return (
    <TouchableOpacity style={[styles.nextButton, style]} onPress={onPress}>
      <Image source={arrowImage} style={styles.arrowImage} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  nextButton: {
    position: "absolute",
    right: 32,
    bottom: 48,
    backgroundColor: "#FFD233",
    borderRadius: 16,
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "#FFD233",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#FFD233",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
    zIndex: 10,
  },
  arrowImage: {
    width: 32,
    height: 32,
  },
});
