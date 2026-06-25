import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  // 🔥 TAMBAH KE CART (FIX QTY + HARGA)
  const addToCart = (item: any) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.nama === item.nama);

      if (exist) {
        return prev.map((i) =>
          i.nama === item.nama
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }

      return [
        ...prev,
        {
          nama: item.nama,
          harga: item.harga,
          img: item.img,
          qty: 1, // 🔥 PENTING
        },
      ];
    });
  };

  const minusQty = (nama: string) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.nama === nama ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce(
    (sum, item) => sum + item.harga * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, minusQty, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);