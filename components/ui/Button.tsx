import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface ButtonProps {
  onPress?: () => void;
  backgroundColor?: string;
  borderRadius?: number;
  color?: string;
  style?: ViewStyle;
  children: React.ReactNode;
}

export default function Button({ onPress, color = "#fff", backgroundColor = "#8800cc", borderRadius = 16, style, children }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor, borderRadius }, style]} activeOpacity={0.8} onPress={onPress}>
      {typeof children === "string" ? <Text style={[styles.buttonText, { color }]}>{children}</Text> : children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 32,
    left: 24,
    right: 24,
  },
  buttonText: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    fontSize: 24,
  },
});
