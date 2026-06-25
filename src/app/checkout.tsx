import { router } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../CartContext";

export default function CheckoutScreen() {
  const { cart, total, clearCart, addToCart, minusQty } = useCart();

  const [done, setDone] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  // 🎉 SUCCESS PAGE
  if (done) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#db9ec9",
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
          🎉 Terima Kasih!
        </Text>

        <Text style={{ marginTop: 10 }}>
          Pesanan Anda sudah diterima
        </Text>

        <Text style={{ marginTop: 10, fontSize: 18 }}>
          Total: Rp{finalTotal}
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 15,
            marginTop: 25,
            borderRadius: 8,
            width: 180,
          }}
          onPress={() => router.replace("/")}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            🔒 Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // 💳 CHECKOUT PAGE
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        💳 Checkout
      </Text>

      {/* LIST CART */}
      {cart.map((item: any, i: number) => (
        <View key={i} style={{ marginTop: 15, alignItems: "center" }}>

          <Text>
            {item.nama}
          </Text>

          <Text>
            Rp{item.harga * item.qty}
          </Text>

          {/* 🔥 BUTTON QTY */}
          <View style={{ flexDirection: "row", marginTop: 5 }}>

            {/* MINUS */}
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                padding: 5,
                width: 30,
                alignItems: "center",
                borderRadius: 5,
              }}
              onPress={() => minusQty(item.nama)}
            >
              <Text style={{ color: "white" }}>-</Text>
            </TouchableOpacity>

            <Text style={{ marginHorizontal: 15 }}>{item.qty}</Text>

            {/* PLUS */}
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                padding: 5,
                width: 30,
                alignItems: "center",
                borderRadius: 5,
              }}
              onPress={() => addToCart(item)}
            >
              <Text style={{ color: "white" }}>+</Text>
            </TouchableOpacity>

          </View>
        </View>
      ))}

      <Text style={{ marginTop: 20, fontSize: 18 }}>
        Total: Rp{total}
      </Text>

      {/* BAYAR */}
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 15,
          marginTop: 20,
          borderRadius: 8,
          width: 180,
        }}
        onPress={() => {
          setFinalTotal(total);
          clearCart();
          setDone(true);
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Bayar Sekarang
        </Text>
      </TouchableOpacity>

      {/* BACK */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={{ marginTop: 10 }}>⬅ Kembali</Text>
      </TouchableOpacity>
    </View>
  );
}