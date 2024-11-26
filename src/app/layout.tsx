// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import AuthProvider from "../components/AuthProvider";

export const metadata: Metadata = {
  title: "ZoskaApp",
  description: "Created by Tomas Hestera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar /> {/* Navbar will now render at the top */}
            <main style={{ flexGrow: 1 }}>{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
