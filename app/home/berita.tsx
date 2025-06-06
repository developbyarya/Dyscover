import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NewsDetail() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/images/berita.png")} style={styles.headerImage} imageStyle={styles.headerImageStyle}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <View style={styles.backCircle}>
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Hari Disleksia Sedunia 8 Oktober, Asal–usul dan Tujuan Peringatannya</Text>
        <Text style={styles.source}>detik.com</Text>
        <Text style={styles.date}>Bandung – 8 Oktober 2024</Text>
        <Text style={styles.body}>
          Dalam penjelasan medis, disleksia merujuk pada sebuah kondisi gangguan proses belajar yang ditandai dengan kesulitan membaca, menulis atau mengeja. Direktorat Jenderal Pelayanan Kesehatan dalam laman resminya mengungkapkan, bahwa
          penderita disleksia akan kesulitan untuk mengidentifikasi kata-kata yang diucapkan, dan mengubahnya menjadi huruf atau kalimat.{"\n\n"}
          Di Indonesia sendiri, berdasarkan laporan dari Asosiasi Disleksia Indonesia pada tahun 2020, jumlah anak atau siswa yang mengalami disleksia cukup banyak yaitu sekitar 10 persen dari jumlah total seluruh siswa. Hal tersebut
          tentunya perlu mendapatkan perhatian khusus. Peringatan Hari Disleksia Sedunia dapat menjadi momen yang pas untuk mendorong perhatian khusus tersebut.{"\n\n"}
          Hari Disleksia Sedunia secara rutin diperingati setiap tanggal 8 Oktober di tiap tahunnya. Peringatan hari tersebut pertama kali diadakan di Inggris pada tahun 2002 dan kemudian semakin populer menyebar di seluruh belahan dunia.
          Peringatan Hari Disleksia Sedunia ini pun sejalan dengan diperingatinya bulan Oktober sebagai bulan disleksia sedunia.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "100%",
    height: 220,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  headerImageStyle: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  backButton: {
    marginTop: 48,
    marginLeft: 24,
  },
  backCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#8300BA",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111",
    fontFamily: "PlusJakartaSans",
    marginBottom: 8,
  },
  source: {
    color: "#8300BA",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 12,
    fontFamily: "PlusJakartaSans",
  },
  date: {
    color: "#bbb",
    fontSize: 16,
    marginBottom: 18,
    fontFamily: "PlusJakartaSans",
  },
  body: {
    color: "#222",
    fontSize: 18,
    lineHeight: 28,
    fontFamily: "PlusJakartaSans",
  },
});
