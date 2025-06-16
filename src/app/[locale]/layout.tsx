import { ReactNode } from "react";
import "../globals.css";

type Props = { children: ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="font-satoshi min-h-screen overflow-x-hidden relative bg-fundo w-full text-principal"
      >
        {children}
      </body>
    </html>
  );
}
