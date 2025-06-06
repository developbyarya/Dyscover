import React, { useRef, useState } from "react";
import { Animated, Easing, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { useVoiceRecognition } from "../backend/voiceRecognition";
import { useScreening } from "../context/ScreeningContext";

const initialImg = require("../../assets/images/Record-Button.png");
const beforeImg = require("../../assets/images/record-before.png");
const afterImg = require("../../assets/images/record-after.png");

interface MicButtonProps {
  onPress?: () => void;
  onFinish?: () => void;
  style?: ViewStyle;
  expectedWord?: string;
}

export default function MicButton({ onPress, onFinish, style, expectedWord }: MicButtonProps) {
  const [image, setImage] = useState(initialImg);
  const [animating, setAnimating] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAfter = useRef(false);
  const { addScore } = useScreening();
  const {
    result,
    started,
    error,
    startRecognition,
    stopRecognition,
  } = useVoiceRecognition();

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
    stopRecognition();
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
    startRecognition();
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

  React.useEffect(() => {
    if (result) {
      stopRecording();
      if (expectedWord) {
        // Compare case-insensitive and trim whitespace
        const normalizedResult = result.toLowerCase().trim();
        const normalizedExpected = expectedWord.toLowerCase().trim();
        addScore({
          word: normalizedResult,
          expectedWord: normalizedExpected,
          isCorrect: normalizedResult === normalizedExpected
        });
      }
    }
  }, [result, expectedWord]);

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
