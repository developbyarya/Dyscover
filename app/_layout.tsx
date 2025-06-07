import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat.ttf"),
    PlusJakartaSans: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom", "left", "right"]}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Montserrat",
  },
});
