import type React from "react";
import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { LanguageProvider } from "../components/language-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rilisan.com - Jasa Publikasi Media Terpercaya",
  description:
    "Layanan publikasi media profesional untuk meningkatkan visibilitas brand Anda di berbagai platform media.",
  keywords:
    "publikasi media, press release, media relations, digital marketing",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${urbanist.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="rilisan-theme"
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
