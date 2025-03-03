import type { Metadata } from "next";

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
    <html lang="en" className="scroll-smooth ">
      <body suppressHydrationWarning 
        className={`font-satoshi bg-fundo w-full h-screen text-principal`}
      >
        {children}
      </body>
    </html>
  );
}
