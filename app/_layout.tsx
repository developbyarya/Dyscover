import { ScreeningProvider } from "@/components/context/ScreeningContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat.ttf"),
    PlusJakartaSans: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ScreeningProvider>
    <View style={styles.container}>
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
    </View>
    </ScreeningProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Montserrat",
  },
});
