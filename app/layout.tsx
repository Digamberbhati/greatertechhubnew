import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { StructuredData } from "@/components/structured-data"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  // Google Title (50-60 chars)
  title: "GreaterTechHub - IT Services Company in India | Web, App, AI, DevOps",
  description:
    "Top IT services company in India offering web development, mobile apps, AI agents, DevOps, digital marketing, ERP/CRM, QA testing, and animation services.",

  // 50+ High-Intent Keywords
  keywords: [
    "IT services India", "web development company India", "mobile app development India",
    "digital marketing agency India", "DevOps services India", "cloud computing India",
    "ERP development India", "CRM software India", "QA testing company",
    "AI development India", "chatbot development India", "AI agents India",
    "software company India", "custom software development", "ecommerce development India",
    "UI UX design India", "animation studio India", "2D 3D animation",
    "full stack development India", "React JS development", "Node JS development",
    "Python development India", "AWS cloud India", "Azure cloud India",
    "cybersecurity services India", "IT consulting India", "software outsourcing India",
    "offshore development India", "SaaS development", "MVP development India",
    "startup tech solutions", "enterprise software India", "blockchain development India",
    "IoT solutions India", "AR VR development", "game development India",
    "SEO services India", "PPC advertising India", "social media marketing India",
    "content marketing India", "email marketing India", "branding agency India",
    "website maintenance India", "API development", "microservices India",
    "database optimization", "tech support India", "GreaterTechHub"
  ].join(", "),

  generator: "Next.js",
  applicationName: "GreaterTechHub",
  authors: [{ name: "GreaterTechHub", url: "https://greatertechhub.com" }],
  creator: "GreaterTechHub",
  publisher: "GreaterTechHub",

  // Google Search Console Verification
  verification: {
    google: "-K5TQT7v0IXNRnuXU7terQ3xAw1XYA93AH0jiL6emJ8",
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "GreaterTechHub - IT Services & Software Development Company in India",
    description: "Web, App, AI, DevOps, Digital Marketing & Animation | GreaterTechHub India",
    url: "https://greatertechhub.com",
    siteName: "GreaterTechHub",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://greatertechhub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "GreaterTechHub - IT Services India",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "GreaterTechHub - IT Services in India",
    description: "Web, App, AI, DevOps, SEO & Animation | GreaterTechHub",
    images: ["https://greatertechhub.com/og-image.png"],
    creator: "@greatertechhub",
    site: "@greatertechhub",
  },

  // Robots
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

  // Canonical URL
  alternates: {
    canonical: "https://greatertechhub.com",
  },

  // Viewport & Theme
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",

  // PWA
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="-K5TQT7v0IXNRnuXU7terQ3xAw1XYA93AH0jiL6emJ8"
        />

        {/* Favicon - logo.ico */}
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* PWA Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XWWRYNW41Z"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XWWRYNW41Z', {
                send_page_view: true,
                page_path: window.location.pathname + window.location.search
              });
            `,
          }}
        />

        {/* Structured Data */}
        <StructuredData />
      </head>

      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}