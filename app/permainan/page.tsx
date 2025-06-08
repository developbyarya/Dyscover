import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const games = [
  {
    title: "Menulis Karakter",
    image: require("../../assets/images/writing.png"),
  },
  {
    title: "Latihan Ejaan",
    image: require("../../assets/images/spelling.png"),
  },
  {
    title: "Suara dan Huruf",
    image: require("../../assets/images/sound-and-letter.png"),
  },
  {
    title: "Urut Kata",
    image: require("../../assets/images/scrabble.png"),
  },
];

export default function PermainanPage() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Permainan</Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }} showsVerticalScrollIndicator={false}>
        {games.map((game, idx) => (
          <TouchableOpacity key={idx} style={styles.card} onPress={() => router.push("/permainan/menulis")}>
            <Image source={game.image} style={styles.cardImage} resizeMode="cover" />
            {/* <LinearGradient colors={["#8300BAEE", "#8300BA99", "#8300BA00"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gradient} /> */}
            <View style={styles.cardContent}>
              {/* <Text style={styles.cardTitle}>{game.title}</Text> */}
              {/* <TouchableOpacity style={styles.playButton}>
                <Text style={styles.playButtonText}>Mainkan</Text>
              </TouchableOpacity> */}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/home/page")}>
          <Image source={require("../../assets/Icons/beranda-menu-gray.png")} style={{ width: 30, height: 40 }} resizeMode="contain" />
          <Text style={styles.tabLabel}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <View style={styles.tabIconContainer}>
            <Image source={require("../../assets/Icons/game-menu-white.png")} style={{ width: 24, height: 24 }} resizeMode="contain" />
          </View>
          <Text style={[styles.tabLabel, { color: "#8300BA" }]}>Permainan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/riwayat/page")}>
          <Image source={require("../../assets/Icons/riwayat-menu.png")} style={{ width: 30, height: 40 }} resizeMode="contain" />
          <Text style={styles.tabLabel}>Riwayat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image source={require("../../assets/Icons/profil-menu.png")} style={{ width: 30, height: 40 }} resizeMode="contain" />
          <Text style={styles.tabLabel}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
    paddingHorizontal: 0,
  },
  header: {
    fontFamily: "PlusJakartaSans",
    fontSize: 32,
    color: "#8300BA",
    textAlign: "center",
    marginBottom: 24,
    fontWeight: "700",
  },
  card: {
    height: 120,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 16,
    marginBottom: 20,
    position: "relative",
    backgroundColor: "#eee",
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 20,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  cardTitle: {
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
    marginBottom: 12,
  },
  playButton: {
    borderWidth: 1.5,
    borderColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 6,
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  playButtonText: {
    color: "#fff",
    fontFamily: "PlusJakartaSans-Regular",
    fontSize: 16,
    fontWeight: "500",
  },
  tabItem: {
    alignItems: "center",
    flex: 1,
  },
  tabLabel: {
    fontSize: 12,
    color: "#B0B0B0",
    fontFamily: "PlusJakartaSans",
    marginTop: -2,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 64,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: 8,
    paddingTop: 12,
  },
  tabIconContainer: {
    width: 50,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#8300BA",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
