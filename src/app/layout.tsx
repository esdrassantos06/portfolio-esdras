import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata: Metadata = {
  title: "Home Page | Esdras Portfolio",
  description: "Welcome to my portfolio! Check out my projects and skills.",
  keywords: 'portfolio, projects, skills, developer',
  robots: 'index, follow',
  authors: [{ name: 'Esdras' }],
  creator: 'Esdras',
  publisher: 'Esdras',
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body suppressHydrationWarning 
        className={`font-satoshi min-h-screen overflow-x-hidden relative bg-fundo w-full text-principal`}
      >
        <Navbar />
        <main className="flex-grow"> {/*Added flex-grow to main*/}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
