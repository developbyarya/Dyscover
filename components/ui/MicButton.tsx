import React, { useRef, useState } from "react";
import { Animated, Easing, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

const initialImg = require("../../assets/Icons/Record-Button.png");
const beforeImg = require("../../assets/images/record-before.png");
const afterImg = require("../../assets/images/record-after.png");

interface MicButtonProps {
  onPress?: () => void;
  onFinish?: () => void;
  style?: ViewStyle;
}

export default function MicButton({ onPress, onFinish, style }: MicButtonProps) {
  const [image, setImage] = useState(initialImg);
  const [animating, setAnimating] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAfter = useRef(false);

  const clearAllTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const animateTo = (nextImg: any, callback?: () => void) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      setImage(nextImg);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start(() => {
        if (callback) callback();
      });
    });
  };

  const stopRecording = () => {
    clearAllTimers();
    setAnimating(false);
    setImage(initialImg);
    fadeAnim.setValue(1);
    if (typeof onFinish === "function") onFinish();
  };

  const handlePress = () => {
    if (animating) {
      stopRecording();
      return;
    }
    setAnimating(true);
    isAfter.current = false;
    if (onPress) onPress();
    animateTo(beforeImg);
    intervalRef.current = setInterval(() => {
      isAfter.current = !isAfter.current;
      animateTo(isAfter.current ? afterImg : beforeImg);
    }, 500);
    timeoutRef.current = setTimeout(() => {
      stopRecording();
    }, 10000);
  };

  React.useEffect(() => {
    return () => clearAllTimers();
  }, []);

  return (
    <TouchableOpacity style={[styles.micButton, style]} onPress={handlePress} activeOpacity={0.8}>
      <Animated.Image source={image} style={[styles.image, { opacity: fadeAnim }]} resizeMode="contain" />
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
  },
  image: {
    width: 123,
    height: 123,
  },
});
