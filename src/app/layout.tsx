import { ReactNode } from "react";
import { Metadata } from "next";
import { siteUrl } from "@/i18n/url";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({ children }: Props) {
  return children;
}
