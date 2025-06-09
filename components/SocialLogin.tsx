import { Image, View } from "react-native";

export default function SocialLogin() {
  return (
    <View style={{ flexDirection: "row", gap: 8, justifyContent: "center", alignItems: "center" }}>
      <Image style={{ width: 40, height: 40 }} source={require("../assets/Icons/facebook.png")} />
      <Image style={{ width: 40, height: 40 }} source={require("../assets/Icons/google.png")} />
      <Image style={{ width: 40, height: 40 }} source={require("../assets/Icons/apple.png")} />
    </View>
  );
}
