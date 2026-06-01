import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://madhavkamble.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Madhav Kamble — Developer",
  description: "Full-stack developer and M.Tech Data Engineering student at IIIT Allahabad. Builds with React, Next.js, and Node.js. GATE 2025 qualified. Open to internships and full-time roles.",
  openGraph: {
    title: "Madhav Kamble — Developer",
    description: "Full-stack developer and M.Tech Data Engineering student at IIIT Allahabad. Builds with React, Next.js, and Node.js. GATE 2025 qualified.",
    url,
    siteName: "Madhav Kamble",
    images: [{ url: "/portrait.jpg", width: 866, height: 924, alt: "Madhav Kamble" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhav Kamble — Developer",
    description: "Full-stack developer and M.Tech Data Engineering student at IIIT Allahabad. Open to internships and full-time roles.",
    images: ["/portrait.jpg"],
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
      className={`${geist.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
