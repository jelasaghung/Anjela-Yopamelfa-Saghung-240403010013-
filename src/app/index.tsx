import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#e599c2",
      }}
    >

      {/* 🔥 JUDUL (TIDAK DIHAPUS) */}
      <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
        🍱 Selamat Datang di Aplikasi Makanan
      </Text>

      {/* 🔥 DESKRIPSI (TETAP ADA) */}
      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          color: "#0e0101",
        }}
      >
        Pesan makanan favoritmu dengan mudah, cepat, dan praktis 🚀
      </Text>

      {/* 📧 EMAIL INPUT */}
      <TextInput
        placeholder="Masukkan Email"
        value={email}
        onChangeText={setEmail}
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#798bdc",
          padding: 10,
          marginTop: 20,
          borderRadius: 8,
        }}
      />

      {/* 🔒 PASSWORD INPUT */}
      <TextInput
        placeholder="Masukkan Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#7069da",
          padding: 10,
          marginTop: 10,
          borderRadius: 8,
        }}
      />

      {/* 🔵 TOMBOL MASUK MENU (TETAP ADA) */}
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 15,
          marginTop: 20,
          borderRadius: 10,
          width: "100%",
        }}
        onPress={() => router.replace("/home")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Masuk ke Menu
        </Text>
      </TouchableOpacity>

    </View>
  );
}