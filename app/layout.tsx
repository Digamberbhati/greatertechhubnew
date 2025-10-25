import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { StructuredData } from "@/components/structured-data"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GreaterTechHub - IT Services & Technology Solutions",
  description:
    "Leading IT services company offering web development, app development, digital marketing, DevOps, ERP/CRM, QA testing, AI agents, and animation services.",
  generator: "v0.app",
  keywords:
    "IT services, web development, app development, digital marketing, DevOps, cloud services, ERP, CRM, QA testing, AI agents, chatbots, animation",
  authors: [{ name: "GreaterTechHub" }],
  creator: "GreaterTechHub",
  publisher: "GreaterTechHub",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: "GreaterTechHub - IT Services & Technology Solutions",
    description: "Leading IT services company offering comprehensive technology solutions",
    type: "website",
    locale: "en_US",
    url: "https://greatertechhub.com",
    siteName: "GreaterTechHub",
    images: [
      {
        url: "https://greatertechhub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "GreaterTechHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreaterTechHub - IT Services & Technology Solutions",
    description: "Leading IT services company offering comprehensive technology solutions",
    images: ["https://greatertechhub.com/og-image.png"],
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
  alternates: {
    canonical: "https://greatertechhub.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
