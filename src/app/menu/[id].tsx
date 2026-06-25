import { router, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../../CartContext";

const images: any = {
  nasigoreng: require("../../../assets/images/nasigoreng.png"),
  nasikuning: require("../../../assets/images/nasikuning.png"),
  ayambakar: require("../../../assets/images/ayambakar.png"),
  sateayam: require("../../../assets/images/sateayam.png"),
  satekambing: require("../../../assets/images/satekambing.png"),
  rendang: require("../../../assets/images/rendang.png"),
};

export default function DetailMenu() {
  const { id, nama, harga } = useLocalSearchParams();
  const { addToCart } = useCart();

  return (
    <View style={{ flex: 1, padding: 20 }}>

      <Image
        source={images[id as string]}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      />

      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
        {nama}
      </Text>

      <Text style={{ fontSize: 18 }}>
        Rp{harga}
      </Text>

      {/* PESAN */}
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 15,
          marginTop: 20,
          borderRadius: 8,
        }}
        onPress={() => {
          addToCart({
            nama,
            harga: Number(harga),
            img: id,
          });

          router.push("/checkout");   // 🔥 langsung checkout
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          🛒 Pesan Sekarang
        </Text>
      </TouchableOpacity>

      {/* BACK */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={{ textAlign: "center", marginTop: 10 }}>
          ⬅ Kembali
        </Text>
      </TouchableOpacity>

    </View>
  );
}