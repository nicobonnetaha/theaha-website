import type { Metadata } from "next";
import { Space_Grotesk, Spectral } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  title: {
    default: "The Aha Company — Blockchain Solutions Built to Last",
    template: "%s — The Aha Company",
  },
  description: "The Aha Company bridges institutions and startups with blockchain. Developer tooling, tokenization, and DeFi — compliance-ready solutions across Stellar, XRPL, Ethereum & Cosmos.",
  metadataBase: new URL("https://theaha.co"),
  openGraph: {
    siteName: "The Aha Company",
    type: "website",
    locale: "en_US",
    url: "https://theaha.co",
    title: "The Aha Company — Blockchain Solutions Built to Last",
    description: "We bridge institutions and startups with blockchain — developer tooling, tokenization, and DeFi. Compliance-ready solutions across Stellar, XRPL, Ethereum & Cosmos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Aha Company — Blockchain Solutions Built to Last",
    description: "Blockchain solutions for institutions and startups — Stellar, XRPL, Ethereum & Cosmos.",
  },
  alternates: {
    canonical: "https://theaha.co",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spectral.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
