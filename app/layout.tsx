import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import MetaPixel from "@/components/meta-pixel"

export const metadata: Metadata = {
  title: "Pips Master - Forex Signals",
  description: "Get free daily forex signals with 85%+ win rate accuracy",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>{/* Meta Pixel will be included here on the client side */}</head>
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  )
}
