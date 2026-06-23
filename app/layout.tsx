import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://arithaya-model.vercel.app"),
  title: {
    default: "ARITHAYA Model | Human Intelligence Platform",
    template: "%s | ARITHAYA Model"
  },
  description:
    "ARITHAYA is Thailand's Human Intelligence Platform connecting knowledge, wellness, human performance, AI, community, data, and enterprise solutions.",
  keywords: [
    "ARITHAYA",
    "Human Intelligence Platform",
    "Thailand",
    "AI",
    "human performance",
    "enterprise wellness",
    "knowledge platform"
  ],
  openGraph: {
    title: "ARITHAYA Model",
    description: "Human Intelligence Infrastructure for Thailand.",
    type: "website",
    locale: "en_TH"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
