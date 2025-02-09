import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend_Giga } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LexendGiga = Lexend_Giga({
  variable: "--font-lexend-giga",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Basic TODO",
  description: "This is a Basic TODO app for learning Purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${LexendGiga.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
