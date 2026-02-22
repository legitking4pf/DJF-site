import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono, Playfair_Display } from "next/font/google";
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
  // 1. Basic Identity
  title: {
    default: "David Jackson Fernandez",
    template: "%s | David Jackson Fernandez",
  },
  description: "Executive at Grupo Financiero Atlántida. Architecting the future of fintech, digital sovereignty, and strategic growth.",
  
  // 2. Search Engine Visibility
  keywords: [
    "David Jackson Fernandez",
    "CAO Grupo Financiero Atlántida",
    "CTO Banco Atlántida",
    "Digital Sovereignty",
    "Fintech Core Migration",
    "KONCEPTO",
    "GFA Strategic Vision",
    "Wealth Acceleration",
    "DJF",
    "Infrastructure Governance"
  ],
  authors: [{ name: "David Jackson Fernandez" }],
  creator: "David Jackson Fernandez",
  publisher: "Grupo Financiero Atlántida",
  
  // 3. URLs & Indexing
  metadataBase: new URL("https://djf-site.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 4. Social Media (Open Graph)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://djf-site.vercel.app",
    siteName: "David Jackson Fernandez",
    title: "David Jackson Fernandez | Executive Profile",
    description: "CAO & CTO at Banco Atlántida. Driving institutional fintech innovation and strategic architecture.",
    images: [
      {
        url: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/10.png", // Ensure this is in /public
        width: 1200,
        height: 630,
        alt: "David Jackson Fernandez - Executive Profile",
      },
    ],
  },

  // 5. Social Media (X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "David Jackson Fernandez | CAO & CTO",
    description: "Architecting the future of wealth through high-precision fintech.",
    images: ["/og-image.jpg"],
  },

  // 6. Icons & Branding
  icons: {
    icon: [
      { url: "/favicon.ico" },
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

  // 7. Mobile UI
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DJF",
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