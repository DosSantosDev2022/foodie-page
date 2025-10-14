// biome-ignore assist/source/organizeImports: <explanation>
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/footer";
import data from '@/config/data.json';
import { Header } from "@/components";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodie delivery",
  description: "Um serviço de delivery de comida, desenvolvida com as tecnologias mais recentes do ecossistema React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} antialiased scrollbar-custom`}
      >
        <Header data={data.header} />
        {children}
        <Footer data={data.footer} />
      </body>
    </html>
  );
}
