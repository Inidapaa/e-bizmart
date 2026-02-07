import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "../components/ConditionalNavbar";
import ConditionalMain from "../components/ConditionalMain";
import ConditionalFooter from "../components/ConditionalFooter";
import { CartProvider } from "../context/CartContext";
import { ConfirmProvider } from "../context/ConfirmContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-BizMart",
  description: "Aplikasi digital untuk toko kelontong dan bisnis grosir: kelola stok, belanja barang, dan layani pelanggan secara lebih efisien.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <CartProvider>
          <ConfirmProvider>
            <ConditionalNavbar />
            <ConditionalMain>{children}</ConditionalMain>
            <ConditionalFooter />
          </ConfirmProvider>
        </CartProvider>
      </body>
    </html>
  );
}
