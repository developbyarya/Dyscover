import { useRouter } from "expo-router";
import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import BackButton from "../../components/ui/BackButton";

// const { width, height } = Dimensions.get("window");

export default function MenulisPage() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/Menulis.png")} style={styles.fullBg} resizeMode="cover" />
      <View style={styles.backBtnWrapper}>
        <BackButton onPress={() => router.push("/permainan/page")} isYellow />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fullBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backBtnWrapper: {
    position: "absolute",
    top: Platform.OS === "web" ? 0 : 34,
    left: Platform.OS === "web" ? 16 : 12,
    zIndex: 10,
  },
});
