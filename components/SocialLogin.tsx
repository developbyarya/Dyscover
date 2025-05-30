import { Image, View } from "react-native";

export default function SocialLogin() {
    return (
        <View style={{ flexDirection: "row", gap: 8, justifyContent: "center", alignItems: "center" }}>
            <Image source={require("../assets/Icons/Facebook.svg")} />
            <Image source={require("../assets/Icons/Google.svg")} />
            <Image source={require("../assets/Icons/Apple.svg")} />
        </View>
    )
}