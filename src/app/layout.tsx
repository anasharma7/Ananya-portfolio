import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Shadows_Into_Light, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import ScrollProgressBar from '@/components/layout/ScrollProgressBar';

const inter = Inter({ subsets: ["latin"] });
const shadowsIntoLight = Shadows_Into_Light({ subsets: ["latin"], weight: "400", variable: '--font-shadows-into-light' });
const permanentMarker = Permanent_Marker({ subsets: ["latin"], weight: "400", variable: '--font-permanent-marker' });

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio website showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${shadowsIntoLight.variable} ${permanentMarker.variable}`}>
        <ScrollProgressBar />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
