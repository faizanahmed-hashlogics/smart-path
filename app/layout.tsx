import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Text } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Smart Path Consultancy - Your Strategic Partner for Business Growth in the UAE",
  description:
    "Expert business consultancy for entrepreneurs, startups, and enterprises in the UAE. From company formation to operational excellence and growth planning.",
  generator: "v0.app",
  openGraph: {
    title: "Smart Path Consultancy - Business Growth Experts in UAE",
    description:
      "Expert business consultancy for entrepreneurs, startups, and enterprises in the UAE. From company formation to operational excellence and growth planning.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Path Consultancy - Business Growth Experts in UAE",
    description: "Expert business consultancy for entrepreneurs, startups, and enterprises in the UAE.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${inter.variable}`} suppressHydrationWarning>
      <head />
      <body className="antialiased">
        <ThemeProvider defaultTheme="light" storageKey="smart-path-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
