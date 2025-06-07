import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const historyData = [
  {
    date: "25 Mei",
    risk: "Rendah",
    riskColor: "#3DCB6C",
    correct: 8,
    total: 10,
    time: "10 Menit",
  },
  {
    date: "24 Mei",
    risk: "Sedang",
    riskColor: "#FFC700",
    correct: 6,
    total: 10,
    time: "12 Menit",
  },
  {
    date: "23 Mei",
    risk: "Tinggi",
    riskColor: "#FF4B4B",
    correct: 3,
    total: 10,
    time: "15 Menit",
  },
  {
    date: "22 Mei",
    risk: "Tinggi",
    riskColor: "#FF4B4B",
    correct: 3,
    total: 10,
    time: "15 Menit",
  },
];

export default function RiwayatPage() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Ionicons name="chevron-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>Mei, 2025</Text>
        <Ionicons name="chevron-forward" size={24} color="#000" />
      </View>
      <Text style={styles.subHeader}>Riwayat Skrining</Text>
      <View style={styles.rowBetween}>
        <Text style={styles.label}>Waktu</Text>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Mulai Skrining+</Text>
        </TouchableOpacity>
      </View>
      {/* Timeline */}
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        <View style={styles.timeline}>
          {historyData.map((item, idx) => (
            <View key={idx} style={styles.timelineItem}>
              {/* Date & Line */}
              <View style={styles.dateCol}>
                <View style={styles.circleDate}>
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
                {idx < historyData.length - 1 && <View style={styles.verticalLine} />}
              </View>
              {/* Card */}
              <View style={styles.card}>
                <View style={styles.cardRow}>
                  <View style={styles.iconBox}>
                    <Ionicons name="document-text-outline" size={24} color="#8300BA" />
                  </View>
                  <View style={{ marginLeft: 8 }}>
                    <View style={styles.riskRow}>
                      <View style={[styles.riskBadge, { backgroundColor: item.riskColor }]}>
                        <Text style={styles.riskBadgeText}>{item.risk}</Text>
                      </View>
                      <Text style={styles.riskLabel}> Tingkat Risiko</Text>
                    </View>
                    <View style={styles.infoRow}>
                      <Ionicons name="checkmark-circle" size={16} color="#3DCB6C" />
                      <Text style={styles.infoText}>
                        {item.correct}/{item.total} Benar
                      </Text>
                      <Ionicons name="time-outline" size={16} color="#FFC700" style={{ marginLeft: 8 }} />
                      <Text style={styles.infoText}>{item.time}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.resultButton}>
                  <Text style={styles.resultButtonText}>Lihat Hasil</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/home/page")}>
          <Image source={require("../../assets/Icons/beranda-menu-gray.png")} style={{ width: 30, height: 40 }} resizeMode="contain" />
          <Text style={styles.tabLabel}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/permainan/page")}>
          <Image source={require("../../assets/Icons/game-menu.png")} style={{ width: 30, height: 40 }} resizeMode="contain" />
          <Text style={styles.tabLabel}>Permainan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <View style={styles.tabIconContainer}>
            <Image source={require("../../assets/Icons/riwayat-white.png")} style={{ width: 30, height: 40 }} resizeMode="contain" />
          </View>
          <Text style={[styles.tabLabel, { color: "#8300BA" }]}>Riwayat</Text>
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
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 32, fontFamily: "PlusJakartaSans" },
  headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: "#222" },
  subHeader: { fontSize: 16, fontWeight: "bold", color: "#222", marginBottom: 8 },
  rowBetween: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
  label: { color: "#888", fontSize: 14 },
  startButton: { backgroundColor: "#E9B8FF", borderRadius: 12, paddingHorizontal: 16, paddingVertical: 6 },
  startButtonText: { color: "#8300BA", fontWeight: "bold" },
  timeline: { flexDirection: "column" },
  timelineItem: { flexDirection: "row", alignItems: "flex-start", marginBottom: 24 },
  dateCol: { alignItems: "center", width: 60 },
  circleDate: { borderWidth: 2, borderColor: "#8300BA", borderRadius: 16, paddingHorizontal: 8, paddingVertical: 2, marginBottom: 2 },
  dateText: { color: "#8300BA", fontWeight: "400", fontSize: 12 },
  verticalLine: { width: 2, flex: 1, backgroundColor: "#8300BA", marginTop: 2 },
  card: { flex: 1, backgroundColor: "#fff", borderRadius: 16, padding: 12, marginLeft: 8, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 },
  cardRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  iconBox: { backgroundColor: "#F3E6FF", borderRadius: 8, padding: 8 },
  riskRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  riskBadge: { borderRadius: 8, paddingHorizontal: 8, paddingVertical: 2 },
  riskBadgeText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
  riskLabel: { color: "#888", fontSize: 12, marginLeft: 4 },
  infoRow: { flexDirection: "row", alignItems: "center", marginTop: 2 },
  infoText: { color: "#222", fontSize: 12, marginLeft: 2 },
  resultButton: { backgroundColor: "#8300BA", borderRadius: 12, paddingVertical: 8, marginTop: 8, alignItems: "center" },
  resultButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
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
