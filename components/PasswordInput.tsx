import React, { useState } from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PasswordInput = () => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <Image style={{ width: 40, height: 24 }} source={require("../assets/Icons/lock.png")} />

      <TextInput style={styles.input} secureTextEntry={secure} placeholderTextColor="#999" />

      <TouchableOpacity onPress={() => setSecure(!secure)}>
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Icon name={secure ? "eye-off-outline" : "eye-outline"} size={24} color="#5C4033" style={styles.icon} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#8300ba",
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
  },
  icon: {
    marginHorizontal: 4,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    color: "#000",
    fontSize: 16,
  },
});

export default PasswordInput;
