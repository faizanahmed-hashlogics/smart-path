"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SITE_CONFIG } from "@/lib/constants"
import { useState, useEffect } from "react"

export function Hero() {
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = scrolled * 0.5 // Adjust speed by changing multiplier
      setParallaxOffset(parallax)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Section className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/dubai-skyline.webp)`,
            transform: `translateY(${parallaxOffset}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Container className="relative z-10 flex items-center min-h-screen">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance">
            Transform Your Business in the UAE
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            Expert consulting solutions for sustainable growth in the Middle East market
          </p>
          <p className="mt-4 text-base leading-7 text-gray-300 max-w-3xl mx-auto">{SITE_CONFIG.description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" onClick={() => scrollToSection("#contact")} className="neon-glow">
              Get a Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="neon-border hover:neon-glow text-white border-white hover:bg-white hover:text-black"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
