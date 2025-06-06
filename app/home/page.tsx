import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.logo}>Dyscover</Text>
          <TouchableOpacity style={styles.progressButton}>
            <Image source={require("../../assets/Icons/crown.png")} style={{ width: 20, height: 20, marginRight: 4 }} resizeMode="contain" />
            <Text style={styles.progressText}>25%</Text>
          </TouchableOpacity>
        </View>

        {/* Greeting Card */}
        <TouchableOpacity style={styles.greetingCard} onPress={() => router.push("/home/screening-instruction")}>
          <Image source={require("../../assets/images/Frame.png")} style={styles.blob} resizeMode="contain" />
          <Text style={styles.greetingTitle}>Halo, Indra!</Text>
          <Text style={styles.greetingSubtitle}>Ayo cek disleksiamu</Text>
          <View style={styles.screeningButton}>
            <Text style={styles.screeningButtonText}>Mulai Screening</Text>
            <Ionicons name="chevron-forward" size={24} style={{ marginTop: 6 }} color="#fff" />
          </View>
        </TouchableOpacity>

        {/* Tips & Game */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.cardTips} onPress={() => router.push("/home/tips")}>
            <Image source={require("../../assets/Icons/half-bulb.png")} style={styles.cardTipsBg} resizeMode="contain" />
            <Image source={require("../../assets/Icons/bulb.png")} style={styles.cardTipsIcon} resizeMode="contain" />
            <Text style={styles.cardTipsTitle}>Tips</Text>
            <Text style={styles.cardTipsSubtitle}>Informasi Disleksia</Text>
            <View style={styles.cardTipsButton}>
              <Text style={styles.cardTipsButtonText}>Buka</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardGame} onPress={() => router.push("/home/tips")}>
            <Image source={require("../../assets/Icons/half-game.png")} style={styles.cardGameBg} resizeMode="contain" />
            <Image source={require("../../assets/Icons/Game-Button.png")} style={styles.cardTipsIcon} resizeMode="contain" />
            <Text style={styles.cardTipsTitle}>Game</Text>
            <Text style={styles.cardTipsSubtitle}>Latihan Cepat</Text>
            <View style={styles.cardGameButton}>
              <Text style={styles.cardTipsButtonText}>Main</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* News */}
        <TouchableOpacity onPress={() => router.push("/home/berita")} activeOpacity={0.8}>
          <View style={styles.newsCard}>
            <Image source={require("../../assets/images/berita.png")} style={styles.newsImage} />
            <Text style={styles.newsTitle}>Hari Disleksia Sedunia 8 Oktober, Asal-usul dan Tujuan Peringatannya</Text>
            <Text style={styles.newsSource}>detik.com</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <View style={styles.tabIconContainer}>
            <Image source={require("../../assets/Icons/beranda-menu.png")} style={{ width: 24, height: 24 }} resizeMode="contain" />
          </View>
          <Text style={[styles.tabLabel, { color: "#8300BA" }]}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image source={require("../../assets/Icons/game-menu.png")} style={{ width: 50, height: 40 }} resizeMode="contain" />
          <Text style={styles.tabLabel}>Permainan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image source={require("../../assets/Icons/riwayat-menu.png")} style={{ width: 50, height: 40 }} resizeMode="contain" />
          <Text style={styles.tabLabel}>Riwayat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image source={require("../../assets/Icons/profil-menu.png")} style={{ width: 50, height: 40 }} resizeMode="contain" />
          <Text style={styles.tabLabel}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 24,
    marginBottom: 8,
  },
  logo: {
    fontFamily: "PlusJakartaSans",
    fontWeight: "700",
    fontSize: 28,
    color: "#8300BA",
  },
  progressButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FDCA40",
    borderRadius: 32,
    minWidth: 92,
    minHeight: 40,
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    columnGap: 8,
  },
  progressText: {
    color: "#fff",
    fontWeight: "700",
    marginLeft: 6,
    fontSize: 16,
  },
  greetingCard: {
    backgroundColor: "#8300BA",
    borderRadius: 20,
    marginHorizontal: 24,
    marginBottom: 16,
    padding: 20,
    marginTop: 8,
  },
  greetingTitle: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "500",
    fontFamily: "PlusJakartaSans",
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontWeight: "400",
    color: "#fff",
    fontSize: 16,
    marginBottom: 16,
    fontFamily: "PlusJakartaSans",
  },
  screeningButton: {
    width: "100%",
    backgroundColor: "#EAC0FD80",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 8,
  },
  screeningButtonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 20,
    fontFamily: "PlusJakartaSans",
    marginRight: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginBottom: 16,
  },
  cardTips: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#8300BA",
    marginRight: 8,
    alignItems: "flex-start",
    padding: 20,
    overflow: "hidden",
    position: "relative",
    height: 245,
    width: 175,
  },
  cardTipsBg: {
    position: "absolute",
    right: -50,
    bottom: -10,
    width: 155.42,
    height: 217.58,
    zIndex: 0,
    opacity: 0.2,
  },
  cardTipsIcon: {
    width: 48,
    height: 48,
    marginBottom: 8,
    zIndex: 1,
  },
  cardTipsTitle: {
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "PlusJakartaSans",
    color: "#222",
    zIndex: 1,
  },
  cardTipsSubtitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#888",
    fontFamily: "PlusJakartaSans",
    marginBottom: 16,
    zIndex: 1,
    maxWidth: 143,
  },
  cardTipsButton: {
    borderWidth: 2,
    borderColor: "#8300BA",
    borderRadius: 32,
    paddingHorizontal: 28,
    paddingVertical: 8,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  cardTipsButtonText: {
    color: "#222",
    fontWeight: "400",
    fontSize: 16,
    fontFamily: "PlusJakartaSans",
    textAlign: "center",
  },
  cardGame: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#FDCA40",
    marginRight: 8,
    alignItems: "flex-start",
    padding: 20,
    overflow: "hidden",
    position: "relative",
    height: 245,
    width: 175,
  },
  cardGameBg: {
    position: "absolute",
    right: -80,
    bottom: 0,
    width: 231.33,
    height: 232.98,
    zIndex: 0,
    opacity: 0.2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "PlusJakartaSans",
    marginBottom: 2,
    color: "#222",
  },
  cardGameButton: {
    borderWidth: 2,
    borderColor: "#FDCA40",
    borderRadius: 32,
    paddingHorizontal: 28,
    paddingVertical: 8,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#888",
    fontFamily: "PlusJakartaSans",
    marginBottom: 12,
  },
  cardButton: {
    borderWidth: 1,
    borderColor: "#8300BA",
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 6,
    marginTop: 8,
  },
  cardButtonText: {
    color: "#8300BA",
    fontWeight: "700",
    fontFamily: "PlusJakartaSans",
    fontSize: 16,
  },
  newsCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#8300BA",
    marginHorizontal: 24,
    marginBottom: 24,
    overflow: "hidden",
  },
  newsImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "PlusJakartaSans",
    color: "#222",
    margin: 12,
    marginBottom: 2,
  },
  newsSource: {
    fontSize: 12,
    color: "#888",
    fontFamily: "PlusJakartaSans",
    marginHorizontal: 12,
    marginBottom: 12,
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
  blob: {
    position: "absolute",
    width: 200.96,
    height: 305.8,
    marginTop: -90,
    marginLeft: 120,
    // transform: [{ rotate: "-180deg" }],
    zIndex: 0,
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

export {};
