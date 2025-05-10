import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { generateLocalBusinessSchema } from "@/lib/schema"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wadi Rum Tours | Authentic Bedouin Desert Experience in Jordan",
  description:
    "Experience the authentic Bedouin way of life in Wadi Rum, Jordan. Book your desert adventure with jeep tours, camel rides, camping, and guided hikes in the UNESCO World Heritage site.",
  keywords:
    "Wadi Rum, Jordan desert tours, Bedouin experience, desert camping, jeep tours Wadi Rum, camel rides Jordan, Wadi Rum accommodation, Wadi Rum travel guide",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon1.png" }],
    apple: { url: "/apple-icon.png" },
    other: [
      {
        rel: "mask-icon",
        url: "/icon0.svg",
      },
    ],
  },
  openGraph: {
    images: [
      {
        url: "https://wadirum-adventures.com/images/traditional-camp.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Mutlak Camp - Traditional Bedouin Camp in Wadi Rum",
      },
    ],
    siteName: "Mohammed Mutlak Camp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Mutlak Camp - Authentic Wadi Rum Desert Experiences",
    description:
      "Experience the magic of Wadi Rum with authentic Bedouin tours, jeep safaris, camping, and climbing adventures.",
    images: ["https://wadirum-adventures.com/images/traditional-camp.jpg"],
    creator: "@MohammedMutlakCamp",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Generate the LocalBusiness schema with default values
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppChat />
      </body>
    </html>
  )
}
