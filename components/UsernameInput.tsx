import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

const UsernameInput = () => {
  return (
    <View style={styles.container}>
      <Image style={{ width: 40, height: 24 }} source={require("../assets/Icons/Email.png")} />
      <TextInput style={styles.input} placeholder="" placeholderTextColor="#999" />
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

export default UsernameInput;
