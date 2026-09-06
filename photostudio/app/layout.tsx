import type { Metadata } from "next";
import { Fraunces, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amberandash.example"),
  title: {
    default: "Amber & Ash — Wedding & Travel Photography, Pune",
    template: "%s — Amber & Ash",
  },
  description:
    "Amber & Ash is a candid wedding and travel photography studio based in Pune, working across Maharashtra, Rajasthan, Goa and worldwide. Cinematic, story-led photography for weddings, couples and journeys.",
  keywords: [
    "wedding photographer Pune",
    "candid photographer Pune",
    "wedding photographer Maharashtra",
    "destination wedding photographer India",
    "photography Pune",
  ],
  openGraph: {
    title: "Amber & Ash — Wedding & Travel Photography, Pune",
    description:
      "Cinematic, candid wedding and travel photography, based in Pune and working across India and worldwide.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${schibsted.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
