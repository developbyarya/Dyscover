import PasswordInput from "@/components/PasswordInput";
import SeparatorWithText from "@/components/SeparatorWithText";
import SocialLogin from "@/components/SocialLogin";
import UsernameInput from "@/components/UsernameInput";
import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const primaryColor = "#8300ba";
const secondaryColor = "#fdca40";

export default function SignIn() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={{ color: primaryColor, fontWeight: "bold", fontSize: 32, letterSpacing: 0, marginBottom: 26, fontFamily: "Montserrat" }}>Masuk</Text>
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text style={{ color: "black", fontSize: 14, fontWeight: 600, fontFamily: "PlusJakartaSans", marginBottom: 8 }}> Alamat Email </Text>
            <UsernameInput />
          </View>
          <View style={{ width: "100%" }}>
            <Text style={{ color: "black", fontSize: 14, fontWeight: 600, fontFamily: "PlusJakartaSans", marginBottom: 8 }}> Kata Sandi </Text>
            <PasswordInput />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => router.push("/onboarding/onboarding1")}>
            <Text style={{ color: primaryColor, fontSize: 24, fontWeight: "bold" }}>Masuk</Text>
          </TouchableOpacity>
          <View style={{ width: "100%", marginVertical: 26 }}>
            <SeparatorWithText />
            <SocialLogin />
            <Text style={{ fontSize: 14, color: primaryColor, fontFamily: "PlusJakartaSans", textAlign: "center", marginTop: 20, fontWeight: "400" }}>
              Tidak Punya Akun?{" "}
              <Link href={"/auth/signup"} style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
                Buat Akun
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // Fill the screen with the primary color
    backgroundColor: primaryColor,
    width: "100%",
    height: "100%",
    padding: 16,
  },
  card: {
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    borderRadius: 32,
    padding: 25,
    // margin: 20,
  },
  input: {
    width: "100%",
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: primaryColor,
    padding: 16,
    marginTop: 8,
  },
  button: {
    width: "100%",
    fontSize: 24,
    fontWeight: "bold",
    color: primaryColor,
    height: 48,
    borderRadius: 19,
    paddingVertical: 10,
    backgroundColor: secondaryColor,
    marginTop: 26,
    alignItems: "center",
    boxShadow: "0px 0px 16px 0px rgba(246, 198, 103, 0.5)",
  },
});
