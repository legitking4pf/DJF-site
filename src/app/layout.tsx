import type { Metadata } from "next";
import { Merriweather, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Primary: The "Forbes" voice for Headlines and Authority
const merriweather = Merriweather({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

// Secondary: The "Wikipedia" voice for Narrative and Body Text
const inter = Inter({
  variable: "--font-secondary",
  subsets: ["latin"],
});

// Tertiary: The "CTO" voice for Technical Labels and Metadata
const robotoMono = Roboto_Mono({
  variable: "--font-tertiary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Jackson Fernandez | Executive Portfolio",
  description: "Chief Technology Officer & Chief Administrative Officer at Grupo Financiero Atlántida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${merriweather.variable} 
          ${inter.variable} 
          ${robotoMono.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
