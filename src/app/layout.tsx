import type { Metadata, Viewport } from "next";
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

// Viewport configuration for high-end mobile UI integrity
export const viewport: Viewport = {
  themeColor: "#0A0A0A", // Obsidian branding
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "David Jackson Fernandez | CAO & CTO - Grupo Financiero Atlántida",
    template: "%s | David Jackson Fernandez"
  },
  description: "Executive leader specializing in Digital Integration, Strategic Corporate Administration, and High-End Design. Driving the GFA Strategic Vision 2030.",
  keywords: [
    "David Jackson Fernandez",
    "CAO Grupo Financiero Atlántida",
    "CTO Banco Atlántida",
    "Digital Transformation Finance",
    "KONCEPTO Décor Founder",
    "Strategic Growth Network",
    "GFA Strategic Vision 2030"
  ],
  authors: [{ name: "David Jackson Fernandez" }],
  creator: "David Jackson Fernandez",
  metadataBase: new URL("https://your-domain.com"), // Set your actual domain here
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "David Jackson Fernandez Executive Portfolio",
    title: "David Jackson Fernandez | Strategic Growth & Digital Transformation",
    description: "CAO & CTO leading institutional expansion and fintech innovation across Central and South America.",
    images: [
      {
        url: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM", 
        width: 1200,
        height: 630,
        alt: "David Jackson Fernandez - Executive Profile",
      }, 
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Jackson Fernandez | CAO & CTO",
    description: "Driving digital integration and strategic growth at Grupo Financiero Atlántida.",
    images: ["https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Institutional Authority
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "David Jackson Fernandez",
    "jobTitle": ["Chief Technology Officer", "Chief Administrative Officer"],
    "description": "Executive at Grupo Financiero Atlántida focusing on Digital Integration and Strategic Growth.",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Grupo Financiero Atlántida"
      },
      {
        "@type": "Organization",
        "name": "Banco Atlántida"
      }
    ],
    "founder": {
      "@type": "Organization",
      "name": "KONCEPTO Décor"
    },
    "image": "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-gold/30`}
      >
        {children}
      </body>
    </html>
  );
}
