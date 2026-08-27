import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealProvider } from "@/components/reveal-provider";

export const metadata: Metadata = {
  title: {
    default: "Visit Meherpur — Complete Travel & Information Guide",
    template: "%s · Visit Meherpur",
  },
  description:
    "Explore Mujibnagar, Nilkuthi heritage, farms, rivers and nearby memorials with detailed guides, real maps and an interactive Meherpur trip planner.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RevealProvider />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
