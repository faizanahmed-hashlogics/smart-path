import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Text } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/components/i18n/provider"
import { LanguageHydrator } from "@/components/i18n/language-hydrator"
import { NavigationProgress } from "@/components/navigation-progress"
import { ScrollProgressBar } from "@/components/scroll-progress"

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
        <I18nProvider>
          <ThemeProvider defaultTheme="light" storageKey="smart-path-theme">
            <ScrollProgressBar />
            <NavigationProgress />
            {children}
          </ThemeProvider>
          <LanguageHydrator />
        </I18nProvider>
      </body>
    </html>
  )
}
