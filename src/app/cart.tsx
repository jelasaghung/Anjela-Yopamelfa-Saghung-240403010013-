import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../CartContext";

export default function CartScreen() {
  const { cart, addToCart, minusQty, total } = useCart();

  return (
    <View style={{ flex: 1, padding: 15 }}>

      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        🛒 Keranjang
      </Text>

      {cart.length === 0 ? (
        <Text style={{ marginTop: 20 }}>Keranjang kosong</Text>
      ) : (
        cart.map((item: any, i: number) => (
          <View key={i} style={{ marginTop: 15 }}>
            <Text>{item.nama}</Text>
            <Text>Rp{item.harga}</Text>

            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <TouchableOpacity onPress={() => minusQty(item.nama)}>
                <Text>-</Text>
              </TouchableOpacity>

              <Text style={{ marginHorizontal: 15 }}>{item.qty}</Text>

              <TouchableOpacity onPress={() => addToCart(item)}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}

      <Text style={{ marginTop: 20, fontSize: 18 }}>
        💰 Total: Rp{total}
      </Text>

      {/* KE CHECKOUT */}
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 15,
          marginTop: 20,
          borderRadius: 8,
        }}
        onPress={() => router.push("/checkout")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Checkout
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