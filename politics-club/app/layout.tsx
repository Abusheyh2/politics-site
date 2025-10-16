import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import { Geist, Archivo as V0_Font_Archivo } from "next/font/google"

// Initialize fonts
const _archivo = V0_Font_Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  title: "Al Beuniy Politics Club - Engage, Debate, Lead",
  description: "Join our school Politics Club to engage in meaningful political discourse and shape the future.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans flex flex-col min-h-screen`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </Suspense>
        {/* Analytics component removed temporarily */}
      </body>
    </html>
  )
}
