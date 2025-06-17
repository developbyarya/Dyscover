import { ScreeningProvider } from "@/components/context/ScreeningContext";
import { TimerProvider } from "@/components/context/TimerContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat.ttf"),
    PlusJakartaSans: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  // Web-only style
  const webExtraStyle =
    Platform.OS === "web"
      ? {
          maxWidth: 430,
          width: "100%",
          // @ts-ignore
          marginLeft: "auto",
          // @ts-ignore
          marginRight: "auto",
          // @ts-ignore
          boxSizing: "border-box",
          // @ts-ignore
          minHeight: "100vh",
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor: "#e0e0e0",
          borderRadius: 16,
          // @ts-ignore
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }
      : {};

  return (
    <TimerProvider>
      <ScreeningProvider>
        <SafeAreaView style={[styles.container, webExtraStyle]} edges={["top", "bottom", "left", "right"]}>
          <Stack screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="auth/signin" options={{ headerShown: false }} />
            <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding/onboarding1" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding/onboarding2" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding/onboarding3" options={{ headerShown: false }} />
            <Stack.Screen name="home/page" options={{ headerShown: false }} />
            <Stack.Screen name="home/tips" options={{ headerShown: false }} />
            <Stack.Screen name="home/screening-report" options={{ headerShown: false }} />
            <Stack.Screen name="home/screening-advance" options={{ headerShown: false }} />
            <Stack.Screen name="home/half-way" options={{ headerShown: false }} />
            <Stack.Screen name="home/screening" options={{ headerShown: false }} />
            <Stack.Screen name="home/screening-instruction" options={{ headerShown: false }} /> */}
          </Stack>
        </SafeAreaView>
      </ScreeningProvider>
    </TimerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "PlusJakartaSans",
  },
});
