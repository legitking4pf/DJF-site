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
  description: "Chief Technology Officer at Banco Atlántida Honduras. Governing Member - Advisory Board at Grupo Financiero Atlántida.",
  
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
    "inversiones Atlantida", "South America", "seguros Atlantida", "bank investment", "entrepreneurship", "Spanish", "Honduras", "El salvador",
    "Infrastructure Governance"
  ],
  authors: [{ name: "David Jackson Fernandez" }],
  creator: "Banco Atlántida",
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
    title: "David Jackson Fernandez",
    description: "Chief Technology Officer at Banco Atlántida Honduras. Governing Member - Advisory Board at Grupo Financiero Atlántida.",
    images: ["https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/10.png"],
  },
  
  // 5. Social Media (X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "David Jackson Fernandez | CAO & CTO",
    description: "Chief Technology Officer at Banco Atlántida Honduras. Governing Member - Advisory Board at Grupo Financiero Atlántida.",
    images: ["https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/6.png"],
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