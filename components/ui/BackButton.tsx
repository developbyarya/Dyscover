import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
};

const arrowImage = require("../../assets/images/Back-Button.png");

export default function BackButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={arrowImage} style={styles.arrowImage} resizeMode="contain" />
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
