import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-inter' 
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-playfair' 
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  title: {
    default: "David Jackson Fernandez",
    template: "%s | David Jackson Fernandez"
  },
  description: "Dual-mandate executive leading Digital Integration and Strategic Growth at Grupo Financiero Atlántida. Architecting the future of wealth through high-precision fintech and aesthetic essentialism.",
  keywords: [
    "David Jackson Fernandez",
    "CAO Grupo Financiero Atlántida",
    "CTO Banco Atlántida",
    "Digital Sovereignty",
    "Fintech Core Migration",
    "KONCEPTO Décor Founder",
    "GFA Strategic Vision 2030",
    "Fintech", "Governance", "Sovereign", "Infrastructure", "David Jackson",
    "Wealth Acceleration Opportunity",
    "DJF",
    "djf",
    "banco Atlantida",
    "koncepto",
    "GFA"
  ],
  authors: [{ name: "David Jackson Fernandez" }],
  creator: "David Jackson Fernandez",
  metadataBase: new URL("https://djf-site.vercel.app"), 
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://djf-site.vercel.app",
    siteName: "David Jackson Fernandez | Institutional Portfolio",
    title: "David Jackson Fernandez | C.A.O Grupo Financiero Atlantida",
    description: "CAO & CTO | Founder. Leading institutional expansion and fintech innovation across Central and South America. ",
    images: [
      {
        url: "/og-image.jpg", // Removed /public
        width: 1200,
        height: 630,
        alt: "David Jackson Fernandez - Executive Profile",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Removed /public
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" }
    ]
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <meta name="google-verification" content="3-zan2mnlXQc8aKFUYw0sEkcBZjHcEXk8DvEArCczwE" />
        {/* Preconnecting to your Vercel Blob storage for faster asset delivery */}
        <link rel="preconnect" href="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com" />
      </head>
      <body className="antialiased bg-obsidian text-bone selection:bg-gold/30">
        {children}
      </body>
    </html>
  );
}