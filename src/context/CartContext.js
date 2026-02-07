"use client";

import { createContext, useContext, useCallback, useState, useEffect } from "react";

const CART_KEY = "ebizmart_cart";

function loadCart() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const refresh = useCallback(() => {
    setItems(loadCart());
  }, []);

  useEffect(() => {
    const id = setTimeout(() => refresh(), 0);
    return () => clearTimeout(id);
  }, [refresh]);

  const add = useCallback((product, qty = 1) => {
    const cart = loadCart();
    const existing = cart.find((i) => i.KODE_BARANG === product.KODE_BARANG);
    let next;
    if (existing) {
      next = cart.map((i) =>
        i.KODE_BARANG === product.KODE_BARANG
          ? { ...i, qty: (i.qty || 1) + qty }
          : i
      );
    } else {
      next = [
        ...cart,
        {
          KODE_BARANG: product.KODE_BARANG,
          NAMA_BARANG: product.NAMA_BARANG,
          HARGA_BARANG: product.HARGA_BARANG,
          GAMBAR_BARANG: product.GAMBAR_BARANG,
          qty: qty,
        },
      ];
    }
    saveCart(next);
    setItems(next);
    return next;
  }, []);

  const remove = useCallback((kodeBarang) => {
    const cart = loadCart().filter((i) => i.KODE_BARANG !== kodeBarang);
    saveCart(cart);
    setItems(cart);
    return cart;
  }, []);

  const updateQty = useCallback((kodeBarang, qty) => {
    if (qty < 1) return remove(kodeBarang);
    const cart = loadCart().map((i) =>
      i.KODE_BARANG === kodeBarang ? { ...i, qty } : i
    );
    saveCart(cart);
    setItems(cart);
    return cart;
  }, [remove]);

  const count = items.reduce((n, i) => n + (i.qty || 1), 0);
  const total = items.reduce((n, i) => n + (i.HARGA_BARANG || 0) * (i.qty || 1), 0);

  const value = {
    items,
    count,
    total,
    add,
    remove,
    updateQty,
    refresh,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
