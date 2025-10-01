import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://caseyjdavis.com'),
  title: {
    default: "Casey J Davis | Technology Consultant | Edgewater, Colorado",
    template: "%s | Casey J Davis"
  },
  description: "Expert technology consultant helping businesses solve complex technical challenges. Located in Edgewater, Colorado.",
  keywords: ["technology consultant", "Edgewater Colorado", "technical consulting", "software development", "Casey Davis"],
  authors: [{ name: "Casey J Davis" }],
  creator: "Casey J Davis",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://caseyjdavis.com",
    siteName: "Casey J Davis",
    title: "Casey J Davis | Technology Consultant",
    description: "Expert technology consultant helping businesses solve complex technical challenges. Located in Edgewater, Colorado.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casey J Davis - Technology Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casey J Davis | Technology Consultant",
    description: "Expert technology consultant helping businesses solve complex technical challenges.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-QMD5969HLB" />
      </body>
    </html>
  );
}
