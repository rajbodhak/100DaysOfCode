import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Yeseva_One } from "next/font/google";
import "./globals.css";

const yesevaOne = Yeseva_One({
  variable: "--font-yeseva-one",
  subsets: ["latin"],
  weight: "400"
})
const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La La Land | A Dreamer’s Story",
  description: "Step into the dreamy world of La La Land. A love story under the city lights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${yesevaOne.variable} ${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
