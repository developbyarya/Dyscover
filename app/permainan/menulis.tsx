import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import BackButton from "../../components/ui/BackButton";

const { width, height } = Dimensions.get("window");

export default function MenulisPage() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/Menulis.png")} style={styles.fullBg} resizeMode="cover" />
      <View style={styles.backBtnWrapper}>
        <BackButton onPress={() => router.push("/permainan/page")} />
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
    width: width,
    height: height,
    top: -8,
    left: 0,
  },
  backBtnWrapper: {
    position: "absolute",
    top: 25,
    left: 12,
    zIndex: 10,
  },
});
