import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
  isYellow?: boolean;
};

const arrowImage = require("../../assets/Icons/Back-Button.png");
const yellowArrowImage = require("../../assets/Icons/yellow-back-button.png");

export default function BackButton({ onPress, isYellow = false }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={isYellow ? yellowArrowImage : arrowImage} style={styles.arrowImage} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#EDE6F6",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  arrowImage: {
    width: 40,
    height: 40,
  },
});
