import { Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Tentang Aplikasi
      </Text>

      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
        }}
      >
        Aplikasi Penjual Makanan dibuat menggunakan React Native
        dan Expo Router.
      </Text>

      <Text
        style={{
          textAlign: "center",
          marginTop: 15,
        }}
      >
        Menu yang tersedia:
        {"\n"}Nasi Goreng
        {"\n"}Nasi Kuning
        {"\n"}Ayam Bakar
        {"\n"}Sate Ayam
        {"\n"}Sate Kambing
      </Text>
    </View>
  );
}