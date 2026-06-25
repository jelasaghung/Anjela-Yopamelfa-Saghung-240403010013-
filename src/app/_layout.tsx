import { Stack } from "expo-router";
import { CartProvider } from "../CartContext";

export default function Layout() {
  return (
    <CartProvider>
      <Stack
        screenOptions={{
          headerShown: false, // biar full UI seperti aplikasi asli
        }}
      />
    </CartProvider>
  );
}