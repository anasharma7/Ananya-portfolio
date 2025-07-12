import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ 
  subsets: ["latin"],
  variable: '--font-caveat'
});

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
      <body className={`${inter.className} ${caveat.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
