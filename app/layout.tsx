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
  title: "The Aha Company — Blockchain Solutions Built to Last",
  description: "The Aha Company bridges institutions and startups with blockchain. From developer tooling to tokenization and DeFi, we build trusted, compliance-ready solutions that scale across Stellar, XRPL, Ethereum, Cosmos & more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spectral.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
