import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Home Page | Esdras Portfolio",
  description: "Welcome to my portfolio! Check out my projects and skills.",
  keywords: "portfolio, projects, skills, developer",
  robots: "index, follow",
  authors: [{ name: "Esdras" }],
  creator: "Esdras",
  publisher: "Esdras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body
        suppressHydrationWarning
        className={`font-satoshi min-h-screen overflow-x-hidden relative bg-fundo w-full text-principal`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
