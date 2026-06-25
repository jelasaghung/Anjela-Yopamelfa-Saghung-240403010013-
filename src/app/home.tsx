import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../CartContext";

const images: any = {
  nasigoreng: require("../../assets/images/nasigoreng.png"),
  nasikuning: require("../../assets/images/nasikuning.png"),
  ayambakar: require("../../assets/images/ayambakar.png"),
  sateayam: require("../../assets/images/sateayam.png"),
  satekambing: require("../../assets/images/satekambing.png"),
  rendang: require("../../assets/images/rendang.png"),
};

export default function HomeScreen() {
  const { addToCart } = useCart();

  const menu = [
    { nama: "Nasi Goreng", harga: 20000, img: "nasigoreng" },
    { nama: "Nasi Kuning", harga: 18000, img: "nasikuning" },
    { nama: "Ayam Bakar", harga: 25000, img: "ayambakar" },
    { nama: "Sate Ayam", harga: 30000, img: "sateayam" },
    { nama: "Sate Kambing", harga: 35000, img: "satekambing" },
    { nama: "Rendang", harga: 40000, img: "rendang" },
  ];

  return (
    <ScrollView style={{ flex: 1, padding: 15 }}>

      {/* 🔥 JUDUL DIPERBAIKI (TIDAK MENGUBAH FITUR LAIN) */}
      <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center" }}>
        🍱 Menu Makanan Lezat
      </Text>

      <Text style={{ textAlign: "center", color: "#666", marginBottom: 10 }}>
        Nikmati makanan favoritmu dengan cepat, enak, dan praktis 🍽️
      </Text>

      {/* MENU GRID (TIDAK DIUBAH) */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {menu.map((item, i) => (
          <View key={i} style={{ width: "47%", marginBottom: 15 }}>

            <Image
              source={images[item.img]}
              style={{ width: "100%", height: 100, borderRadius: 10 }}
            />

            <Text>{item.nama}</Text>
            <Text>Rp{item.harga}</Text>

            {/* 🟢 PESAN (TIDAK DIUBAH) */}
            <TouchableOpacity
              style={{
                backgroundColor: "orange",
                padding: 8,
                borderRadius: 8,
                marginTop: 5,
              }}
              onPress={() => {
                addToCart({
                  nama: item.nama,
                  harga: item.harga,
                  img: item.img,
                });

                router.push("/checkout");
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                + Pesan
              </Text>
            </TouchableOpacity>

            {/* 🔵 DETAIL (TIDAK DIUBAH) */}
            <TouchableOpacity
              style={{
                backgroundColor: "#555",
                padding: 6,
                borderRadius: 6,
                marginTop: 5,
              }}
              onPress={() =>
                router.push({
                  pathname: "/menu/[id]",
                  params: {
                    id: item.img,
                    nama: item.nama,
                    harga: item.harga,
                  },
                })
              }
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Lihat Detail
              </Text>
            </TouchableOpacity>

          </View>
        ))}
      </View>

    </ScrollView>
  );
}