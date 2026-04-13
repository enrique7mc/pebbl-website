import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pebbl — Notepad Calculator",
  description:
    "Type math the way you think. Live currency, inline unit conversion, variables, and sums — all in a beautiful notepad. Free for iPhone.",
  openGraph: {
    title: "Pebbl — Notepad Calculator",
    description:
      "Type math the way you think. Live currency, inline unit conversion, variables, and sums — all in a beautiful notepad. Free for iPhone.",
    url: "https://pebbl.xemc.dev",
    siteName: "Pebbl",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pebbl — Notepad Calculator",
    description:
      "Type math the way you think. Live currency, inline unit conversion, variables, and sums.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
