import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY_DETAILS } from "@/data/catalogue";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nelskraft Refractory Pvt. Ltd. | Building Durability, Enabling Sustainability",
  description:
    "Leading manufacturer and supplier of refractory products, biomass fuels, and mineral materials. Supporting high-temperature furnaces, boilers, and industrial applications with consistent quality and sustainability.",
  keywords: [
    "Nelskraft Refractory",
    "Refractory Products",
    "Biomass Pellets",
    "Cashew Nut Shell Cake",
    "Ball Clay",
    "Silica Sand",
    "Furnace Construction",
    "Boiler Bed Material",
    "Pune Refractory Manufacturer"
  ],
  authors: [{ name: COMPANY_DETAILS.name }],
  metadataBase: new URL("https://www.nelskraft.com"),
  openGraph: {
    title: "Nelskraft Refractory Pvt. Ltd. - Building Durability, Enabling Sustainability",
    description: "Refractory products, biomass fuels and mineral materials to support high-temperature and industrial applications.",
    url: "https://www.nelskraft.com",
    siteName: COMPANY_DETAILS.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-gray-900 antialiased selection:bg-[#54a937]/20 selection:text-[#000d15]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
