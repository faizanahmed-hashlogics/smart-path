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
    <html lang="en" className={`${crimsonText.variable} ${inter.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-heading: ${crimsonText.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://smartpath.ae/#organization",
                  name: "Smart Path Consultancy",
                  url: "https://smartpath.ae",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://smartpath.ae/logo.png",
                  },
                  sameAs: ["https://linkedin.com/company/smartpath-consultancy"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://smartpath.ae/#website",
                  url: "https://smartpath.ae",
                  name: "Smart Path Consultancy",
                  publisher: {
                    "@id": "https://smartpath.ae/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://smartpath.ae/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider defaultTheme="dark" storageKey="smart-path-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
