"use client";

import { usePathname } from "next/navigation";

export default function ConditionalMain({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  
  return (
    <main className={`${isAdmin ? "pb-16" : "pt-28 pb-24 md:pb-16 flex-1"} min-w-0 overflow-x-hidden`}>
      <div className={isAdmin ? "min-w-0" : "page-shell min-w-0"}>{children}</div>
    </main>
  );
}
