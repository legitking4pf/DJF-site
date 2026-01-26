import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
    default: "David Jackson Fernandez | Executive Command",
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
    "Wealth Acceleration Opportunity", 
    "GFA",
    "DJF"
  ],
  authors: [{ name: "David Jackson Fernandez" }],
  creator: "David Jackson Fernandez",
  metadataBase: new URL("https://your-domain.com"), 
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "David Jackson Fernandez | Institutional Portfolio",
    title: "David Jackson Fernandez | Strategic Growth & Digital Transformation",
    description: "CAO & CTO leading institutional expansion and fintech innovation across Central and South America.",
    images: [
      {
        /* FIXED: Removed /public/ prefix for production pathing */
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "David Jackson Fernandez - Executive Profile",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* CTO Optimization: Mobile PWA manifest link */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased bg-obsidian text-bone selection:bg-gold/30">
        {children}
      </body>
    </html>
  );
}
