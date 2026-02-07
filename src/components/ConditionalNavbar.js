"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import TopBar from "./TopBar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Sembunyikan navbar di halaman admin
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <TopBar />
      <Navbar />
    </>
  );
}
