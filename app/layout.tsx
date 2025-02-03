import type { Metadata } from "next";
import { ThemeProvider } from "./contexts/Theme-context";

import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Explore countries around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <div className="container">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
