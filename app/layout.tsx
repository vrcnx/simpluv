import type { Metadata } from "next";
import { Instrument_Sans, Jura } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inst",
  display: "swap",
});

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIMPL UV — Performance Golf Apparel",
  description:
    "Golf-first performance apparel built around UV protection, movement, and refined minimalism. Nothing extra. Everything intentional.",
  icons: { icon: "/logo/simpl-uv.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrument.variable} ${jura.variable}`}>
      <body className="has-hero">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
