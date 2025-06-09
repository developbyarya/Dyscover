import React, { useEffect, useRef, useState } from "react";
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
  testType?: 'alphabet' | 'word';
}

export default function MicButton({ onPress, onFinish, style, expectedWord, testType = 'alphabet' }: MicButtonProps) {
  const [image, setImage] = useState(initialImg);
  const [animating, setAnimating] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const errorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAfter = useRef(false);
  const hasFinished = useRef(false);
  const processingError = useRef(false);
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
    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current);
      errorTimeoutRef.current = null;
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

  const handleError = () => {
    if (!hasFinished.current && animating) {
      console.log('Handling error for word:', expectedWord);
      addScore({
        word: "",
        expectedWord: expectedWord || "",
        isCorrect: false,
        type: testType
      });
      stopRecording();
    }
    // Reset state even if conditions weren't met
    setAnimating(false);
    hasFinished.current = false;
    processingError.current = false;
    fadeAnim.setValue(1);
    setImage(initialImg);
  };

  const stopRecording = () => {
    console.log('Stopping recording for word:', expectedWord);
    stopRecognition();
    clearAllTimers();
    setAnimating(false);
    setImage(initialImg);
    fadeAnim.setValue(1);
    processingError.current = false;
    if (typeof onFinish === "function") {
      onFinish();
      // Only set hasFinished after onFinish callback
      hasFinished.current = true;
    } else {
      hasFinished.current = false;
    }
  };

  const handlePress = () => {
    if (animating) {
      stopRecording();
      return;
    }
    
    // Reset state before starting new recording
    hasFinished.current = false;
    processingError.current = false;
    setAnimating(true);
    isAfter.current = false;
    
    console.log('Starting recording for word:', expectedWord);
    startRecognition();
    if (onPress) onPress();
    
    animateTo(beforeImg);
    intervalRef.current = setInterval(() => {
      isAfter.current = !isAfter.current;
      animateTo(isAfter.current ? afterImg : beforeImg);
    }, 500);
    
    timeoutRef.current = setTimeout(() => {
      if (!hasFinished.current) {
        console.log('Recording timeout for word:', expectedWord);
        stopRecording();
      }
    }, 10000);
  };

  useEffect(() => {
    return () => {
      // Ensure cleanup on unmount
      clearAllTimers();
      fadeAnim.setValue(1);
      setImage(initialImg);
      setAnimating(false);
      hasFinished.current = false;
      processingError.current = false;
    };
  }, []);

  // Handle errors gracefully with debounce
  React.useEffect(() => {
    if (error && !hasFinished.current && animating) {
      console.log('Got error for word:', expectedWord, error);
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
      errorTimeoutRef.current = setTimeout(() => {
        handleError();
      }, 1000);
    }
    
    // Cleanup on error
    return () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
    };
  }, [error]);

  React.useEffect(() => {
    if (result && !hasFinished.current && expectedWord) {
      console.log('Got result for word:', expectedWord, result);
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
      
      // Compare case-insensitive and trim whitespace
      const normalizedResult = result.toLowerCase().trim().replace(/\s+/g, '');
      const normalizedExpected = expectedWord.toLowerCase().trim().replace(/\s+/g, '');
      addScore({
        word: normalizedResult,
        expectedWord: normalizedExpected,
        isCorrect: normalizedResult === normalizedExpected,
        type: testType
      });
      
      stopRecording();
    }
  }, [result]);

  // Reset state when expectedWord changes
  useEffect(() => {
    console.log('Expected word changed:', expectedWord);
    // Ensure immediate reset of visual state
    fadeAnim.setValue(1);
    setImage(initialImg);
    setAnimating(false);
    hasFinished.current = false;
    processingError.current = false;
    clearAllTimers();
  }, [expectedWord]);

  return (
    <TouchableOpacity 
      style={[styles.micButton, style]} 
      onPress={handlePress} 
      activeOpacity={0.8}
      disabled={!expectedWord || (hasFinished.current && !animating)} 
    >
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
